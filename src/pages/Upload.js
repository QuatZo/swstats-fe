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
import MonsterComparisonTable from '../components/tables/MonsterComparisonTable';
import RuneComparisonTable from '../components/tables/RuneComparisonTable';
import AnimatedNumberContainer from '../components/AnimatedNumberContainer';


export default function Upload(){
    const classes = useStyles();

    const [profile, setProfile] = useState(null);
    const [taskId, setTaskId] = useState(null);
    const [data, setData] = useState(null);
    const [err, setError] = useState(false);
    const [errorData, setErrorData] = useState({})

    // first render
    useEffect(() => {
        if(data !== null) return;
        if(localStorage.getItem('comparison-data')){
            setTimeout(() => setData(JSON.parse(localStorage.getItem('comparison-data'))), 500);
            return;
        }

        axios.get(APIEndpoints.Scoring, {
            headers: GenerateAPIHeaders(),
        })
        .then((resp) => {
            setData(resp.data);
        })
        .catch((err_res) => {
            setErrorData(HandleAPIError(err_res));
            setError(true);
        })
    }, [])

    function handleChange(files) {
        if(files.length){
            const reader = new FileReader()
            reader.onload = async (e) => { 
                const text = (e.target.result)
                setProfile(JSON.parse(text))
                setData(null)
            };
            reader.readAsText(files[0])
        }
        else if(profile !== null){
            setProfile(null)
        }
    }

    // file upload
    useEffect(() => {
        if(profile){
            axios.post(APIEndpoints.Upload, profile, {
                headers: GenerateAPIHeaders(),
            })
            .then((resp) => {
                setTaskId(resp.data.task_id)
            })
            .catch((err_res) => {
                setErrorData(HandleAPIError(err_res));
                setError(true);
            })
        }
    }, [profile])

    // status check
    useEffect(() => {
        let axiosIntervalID = setInterval(() => {
            if(taskId){
                axios.get(APIEndpoints.Status + taskId + '/', {
                    headers: GenerateAPIHeaders()
                })
                .then((resp) => {
                    if(resp.data.status === 'SUCCESS'){
                        localStorage.setItem('comparison-data', JSON.stringify(resp.data.step));
                        setTaskId(null);
                        setData(resp.data.step)
                    }
                    if(resp.data.status === 'FAILURE'){
                        setErrorData(HandleAPIError(resp));
                        setError(true);
                        setTaskId(null);
                    }
                })
                .catch((err_res) => {
                    setErrorData(HandleAPIError(err_res));
                    setError(true);
                    setTaskId(null);
                })
            }
        }, 500)
        

        return (() => {
            if(axiosIntervalID) clearInterval(axiosIntervalID);
        })
    }, [taskId])

    if(!data && !err){
        return <Loading />
    }
    if(err){
        return <Error title={errorData.title} msg={errorData.msg} />
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
                                value={data.points.sum}
                                format={2}
                            />
                        </Typography>
                    </Card>
                </Grid>
                
                <Ranking data={data.points} />
                <MonsterComparisonTable 
                    data={data.comparison.monsters} 
                />
                <RuneComparisonTable 
                    data={data.comparison.runes} 
                />
            </Grid>            
        </>
    )
}

const useStyles = makeStyles((theme) => ({
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
    title: {
        color: theme.palette.secondary.main,
    },
    animatedNumber: {
        display: "flex",
        justifyContent: "center",
    },
  }));