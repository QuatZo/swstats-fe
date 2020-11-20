import React, {useState, useEffect} from "react";
import Dropzone from '../components/Dropzone';
import axios from "axios";
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import {GenerateAPIHeaders, HandleAPIError} from '../exts/Helpers';
import APIEndpoints from '../exts/Endpoints';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Ranking from '../components/Ranking';
import ComparisonTable from '../components/ComparisonTable';
import AnimatedNumberContainer from '../components/AnimatedNumberContainer';


export default function Upload(){
    const initialData = {
        points: {
            wizard: {
                active_contributor: 1000,
                mana_100k: 1,
                crystals_10: 1,
                level: 5,
                antibot_count: 1,
                raid: 20,
                storage_capacity: 0.25,
            },
            guild: {
                gw_rank: 50,
                siege_rank: 50,
            },
            buildings: {
                max: 20,
                max_all: 250,
            },
            flags: {
                max: 50,
                max_all: 200,
            },
            runes: {
                count: 0.1,
                stars_5_legend: 2,
                stars_6_hero: 2,
                stars_6_legend: 5,
                upgrade_12: 0.1,
                upgrade_15: 0.5,
                sub_speed: {
                    base: [5, 15, 50], 
                    threshold: [20, 28, 33],
                },
                sub_hp: {
                    base: [5, 15, 50], 
                    threshold: [27, 35, 45],
                },
                sub_def: {
                    base: [5, 15, 50], 
                    threshold: [27, 35, 45],
                },
                sub_atk: {
                    base: [5, 15, 50], 
                    threshold: [27, 35, 45],
                },
                sub_crit_rate: {
                    base: [5, 15, 50], 
                    threshold: [20, 28, 33],
                },
                sub_crit_dmg: {
                    base: [5, 15, 50], 
                    threshold: [23, 27, 33],
                },
            },
            monsters: {
                count: 0.1,
                nat4: 2,
                nat5: 5,
                stars_6: 5,
                transmog: 1,
                with_runes: 1,
                skillup: 0.1,
                skillups_max: 5,
                speed: {
                    base: [5, 15, 50],
                    threshold: [200, 250, 300],
                },
                hp: {
                    base: [5, 15, 50],
                    threshold: [30000, 37500, 45000],
                },
                defense: {
                    base: [5, 15, 50],
                    threshold: [1500, 1875, 2250],
                },
                attack: {
                    base: [5, 15, 50],
                    threshold: [1750, 2250, 2500],
                },
                crit_dmg: {
                    base: [5, 15, 50],
                    threshold: [150, 200, 250],
                },
                crit_rate: {
                    base: [5, 15, 50],
                    threshold: [70, 85, 100],
                },
                acc: {
                    base: [5, 15, 50],
                    threshold: [45, 65, 85],
                },
                res: {
                    base: [5, 15, 50],
                    threshold: [70, 85, 100],
                },
            },
            total: {
                wizard: 0,
                guild: 0,
                buildings: 0,
                flags: 0,
                runes: 0,
                monsters: 0,
                all: 0,
            }
        },
        comparison: [],
        init: true,
    }
    const classes = useStyles();

    const [profile, setProfile] = useState(null)
    const [taskId, setTaskId] = useState(null)
    const [data, setData] = useState(initialData)
    const [err, setError] = useState(false);
    const [errorData, setErrorData] = useState({})
    let axiosIntervalID = null;

    useEffect(()=> {
        // cleanup
        return (() => {
            if(axiosIntervalID) clearInterval(axiosIntervalID);
        })
    })

    function handleChange(files) {
        if(files.length){
            const reader = new FileReader()
            reader.onload = async (e) => { 
                const text = (e.target.result)
                setProfile(JSON.parse(text))
                setData(initialData)
            };
            reader.readAsText(files[0])
        }
        else if(profile !== null){
            setProfile(null)
        }
    }

    useEffect(() => {
        if(profile){
            axios.post(APIEndpoints.Upload, profile, {
                headers: GenerateAPIHeaders(),
            })
            .then((resp) => {
                setTaskId(resp.data.task_id)
            })
        }
    }, [profile])

    useEffect(() => {
        if(taskId){
            axiosIntervalID = setInterval(() => {
                axios.get(APIEndpoints.Status + taskId + '/', {
                    headers: GenerateAPIHeaders()
                })
                .then((resp) => {
                    if(resp.data.status === 'SUCCESS'){
                        setData(resp.data.step)
                        console.log(resp.data.step)
                    }
                })
                .catch((err_res) => {
                    setErrorData(HandleAPIError(err_res));
                    setError(true);
                })
            }, 500)
        }
    }, [taskId])

    if(profile && data.init){
        return <Loading />
    }

    return (
        <>
            <Grid container>
                <Grid item md={6} xs={12} >
                    <Dropzone handleChange={handleChange} />
                </Grid>
                <Grid item md={6} xs={12} className={classes.firstRow}>
                    <Card className={classes.paper}>
                        <Typography variant="h6" className={classes.title} gutterBottom>
                            Total points
                        </Typography>
                        <Typography variant="h4" className={classes.animatedNumber}>
                            <AnimatedNumberContainer 
                                value={data.points.total.all}
                                format={2}
                            />
                        </Typography>
                    </Card>
                </Grid>
                
                {err && <Error title={errorData.title} msg={errorData.msg} />}
                <Ranking data={data.points} init={data.init} />
                <ComparisonTable 
                    data={data.comparison.monsters} 
                    title="Top % Monsters"
                />
                {/* <ComparisonTable 
                    data={data.comparison.runes} 
                    title="Runes"
                /> */}
            </Grid>            
        </>
    )
}

const useStyles = makeStyles((theme) => ({
    loading: {
        color: theme.palette.secondary.main,
    },
    paper: {
        marginLeft: theme.spacing(2),
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        minHeight: 143,
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(2),
            marginLeft: "unset"
        }
    },
    root: {
        flexGrow: 1,
    },
    title: {
        color: theme.palette.secondary.main,
    },
    animatedNumber: {
        textAlign: "center",
    },
    grid: {
        [theme.breakpoints.down('sm')]: {
            width: "inherit",
            margin: "inherit",
        }
    },
  }));