import React, {useState, useEffect} from "react";
import Moment from 'react-moment';
import axios from "axios";

import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, CardHeader, CardContent, Divider } from "@material-ui/core";
import ScheduleIcon from '@material-ui/icons/Schedule';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import LoadingAbsolute from '../../components/LoadingAbsolute';
import Dropzone from '../../components/Dropzone';
import APIEndpoints from "../../exts/Endpoints";
import { GenerateAPIHeaders, HandleAPIError, } from "../../exts/Helpers";

export default function Profile(){
    const classes = useStyles();

    const [loading, setLoading] = useState(false);
    const [profile, setProfile] = useState(localStorage.getItem('profile-data') ? JSON.parse(localStorage.getItem('profile-data')) : null);
    const [err, setError] = useState(false);
    const [errorData, setErrorData] = useState({title: "Unknown Error", msg: "Unknown error has occured. Please contact administrator!"})
    const [data, setData] = useState(null);
    const [taskId, setTaskId] = useState(null);

    function handleChange(files) {
        if(files.length){
            const reader = new FileReader()
            reader.onload = async (e) => { 
                const text = (e.target.result)
                let pr = JSON.parse(text)
                const prof = (({ command, tvalue, wizard_info, dimension_hole_info, unit_list, unit_lock_list, runes, rune_lock_list, friend_list, deco_list, guild, guild_member_defense_list, guildwar_ranking_stat }) => ({ command, tvalue, wizard_info, dimension_hole_info, unit_list, unit_lock_list, runes, rune_lock_list, friend_list, deco_list, guild, guild_member_defense_list, guildwar_ranking_stat }))(pr);
                localStorage.setItem('profile-data', JSON.stringify(prof))
                setProfile(prof)

            };
            reader.readAsText(files[0])
        }
    }

    useEffect(() => {
        if(profile){
            setLoading(true);
            axios.post(APIEndpoints.ProfileReport, profile, {
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

    useEffect(() => {
        let axiosIntervalID = setInterval(() => {
            if(taskId){
                axios.get(APIEndpoints.Status + taskId + '/', {
                    headers: GenerateAPIHeaders()
                })
                .then((resp) => {
                    if(resp.data.status === 'SUCCESS'){
                        if(loading) setLoading(false);
                        setTaskId(null);
                        setData(resp.data.step);
                    }
                    if(resp.data.status === 'FAILURE'){
                        setErrorData(HandleAPIError(resp));
                        setError(true);
                        if(loading) setLoading(false);
                        setTaskId(null);
                    }
                })
                .catch((err_res) => {
                    setErrorData(HandleAPIError(err_res));
                    setError(true);
                    if(loading) setLoading(false);
                    setTaskId(null);
                })
            }
        }, 250)

        return (() => {
            if(axiosIntervalID) clearInterval(axiosIntervalID);
        })
    }, [taskId])

    return (
        <div className={classes.root}>
            {loading && <LoadingAbsolute />}
            <Grid container spacing={3}>
                <Grid item md={6} xs={12} >
                    <Dropzone handleChange={handleChange} text={"Upload JSON file (OPTIONAL)"} />
                </Grid>
                <Grid item md={6} xs={12} className={classes.firstRow}>
                    <Card className={classes.paper}>
                        <Typography variant="h6" className={classes.title} gutterBottom>
                            {profile ? <Moment interval={0} format="YYYY-MM-DD hh:mm:ss">{new Date(profile.tvalue * 1000)}</Moment> : "Manual"}
                        </Typography>
                        <Typography variant="h4" className={classes.animatedNumber}>
                            {profile ? profile.wizard_info.wizard_name : "Manual"}
                        </Typography>
                    </Card>
                </Grid>
                {data ? (
                    <>
                        <Grid item md={12} xs={12} className={classes.section}>
                            <Typography variant="h2" color="secondary">Profile</Typography>
                        </Grid>
                        <Grid item md={12} xs={12} className={classes.section}>
                            <Divider />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Card>
                                <CardHeader 
                                    title="Introduction"
                                    // subheader="Part I"
                                />
                                <CardContent>
                                    <Grid container>
                                        <Grid item md={6} xs={6}>
                                            Country
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            <Avatar src={"https://swstats.info/static/website/images/flags/" + data.wizard.country + ".png"} className={classes.smallAvatar} />
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            Level
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            {data.wizard.level}
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            Energy / Max Energy
                                        </Grid>
                                        <Grid item md={6} xs={6} className={classes.grid}>
                                            <img src={"https://swstats.info/static/website/images/other/currency_energy.png"} className={classes.inlineImg} /> {data.wizard.energy} / {data.wizard.energy_max}
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            Dimension Hole Energy
                                        </Grid>
                                        <Grid item md={6} xs={6} className={classes.grid}>
                                            <img src={"https://swstats.info/static/website/images/other/currency_dimensionenergy.png"} className={classes.inlineImg} /> {data.wizard.dim_hole_energy}
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            Arena Wings
                                        </Grid>
                                        <Grid item md={6} xs={6} className={classes.grid}>
                                            <img src={"https://swstats.info/static/website/images/other/currency_arena.png"} className={classes.inlineImg} /> {data.wizard.dim_hole_energy}
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            Dimensional Rift Crystals
                                        </Grid>
                                        <Grid item md={6} xs={6} className={classes.grid}>
                                            <img src={"https://swstats.info/static/website/images/other/currency_dimensioncrystal.png"} className={classes.inlineImg} /> {data.wizard.dim_rift_crystals}
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Card>
                                <CardHeader 
                                    title="Currency"
                                />
                                <CardContent>
                                    <Grid container>
                                        <Grid item md={6} xs={6}>
                                            Mana
                                        </Grid>
                                        <Grid item md={6} xs={6} className={classes.grid}>
                                            <img src={"https://swstats.info/static/website/images/other/currency_mana.png"} className={classes.inlineImg} /> {data.wizard.mana}
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            Crystals
                                        </Grid>
                                        <Grid item md={6} xs={6} className={classes.grid}>
                                            <img src={"https://swstats.info/static/website/images/other/currency_crystal.png"} className={classes.inlineImg} /> {data.wizard.crystals}
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            Guild Points
                                        </Grid>
                                        <Grid item md={6} xs={6} className={classes.grid}>
                                            <img src={"https://swstats.info/static/website/images/other/currency_guildpoint.png"} className={classes.inlineImg} /> {data.wizard.guild_points}
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            Glory Points
                                        </Grid>
                                        <Grid item md={6} xs={6} className={classes.grid}>
                                            <img src={"https://swstats.info/static/website/images/other/currency_glorypoint.png"} className={classes.inlineImg} /> {data.wizard.glory_points}
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            RTA Points
                                        </Grid>
                                        <Grid item md={6} xs={6} className={classes.grid}>
                                            <img src={"https://swstats.info/static/website/images/other/currency_rta.png"} className={classes.inlineImg} /> {data.wizard.rta_points}
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            Shapeshifting Stones
                                        </Grid>
                                        <Grid item md={6} xs={6} className={classes.grid}>
                                            <img src={"https://swstats.info/static/website/images/other/currency_shapestones.png"} className={classes.inlineImg} /> {data.wizard.shapeshifting_stones}
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            Social Points
                                        </Grid>
                                        <Grid item md={6} xs={6} className={classes.grid}>
                                            <img src={"https://swstats.info/static/website/images/other/currency_socialpoint.png"} className={classes.inlineImg} /> {data.wizard.social_points}
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            Ancient Coins
                                        </Grid>
                                        <Grid item md={6} xs={6} className={classes.grid}>
                                            <img src={"https://swstats.info/static/website/images/other/currency_ancientcoin.png"} className={classes.inlineImg} /> {data.wizard.ancient_coins}
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item md={12} xs={12} className={classes.section}>
                            <Typography variant="h2" color="secondary">Monsters</Typography>
                        </Grid>
                        <Grid item md={12} xs={12} className={classes.section}>
                            <Divider />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Card>
                                <CardHeader 
                                    title="Introduction"
                                    subheader="Part I"
                                />
                                <CardContent>
                                    <Grid container>
                                        <Grid item md={6} xs={6}>
                                            Amount
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            {data.monsters.count}
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            Elements
                                        </Grid>
                                        <Grid item md={6} xs={6} className={classes.gridList}>
                                            {Object.entries(data.monsters.elements).map(([k, v]) => {
                                                return (
                                                    <div className={classes.grid}>
                                                        <img src={"https://swstats.info/static/website/images/attributes/attribute_" + k.toLowerCase() + ".png"} className={classes.smallAvatar}/> {v}
                                                    </div>
                                                )
                                            })}
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            Archetypes
                                        </Grid>
                                        <Grid item md={6} xs={6} className={classes.gridList}>
                                            {Object.entries(data.monsters.archetypes).map(([k, v]) => {
                                                if(k === "None") return ""
                                                return (
                                                    <div className={classes.grid}>
                                                        {k} {v}
                                                    </div>
                                                )
                                            })}
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Card>
                                <CardHeader 
                                    title="Introduction"
                                    subheader="Part II"
                                />
                                <CardContent>
                                    <Grid container>
                                        <Grid item md={6} xs={6}>
                                            Base Class
                                        </Grid>
                                        <Grid item md={6} xs={6} className={classes.gridList}>
                                            {Object.entries(data.monsters.base_class).map(([k, v]) => {
                                                return (
                                                    <div className={classes.grid}>
                                                        {Array.from(new Array(v[0]), (x, i) => i).map(item => {
                                                            return <img src={"https://swstats.info/static/website/images/stars/star_0.png"} className={classes.smallAvatar} />
                                                        })}
                                                        {v[1]}
                                                    </div>
                                                )
                                            })}
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            Non-Fusion Nat5
                                        </Grid>
                                        <Grid item md={6} xs={6} className={classes.grid}>
                                            <img src={"https://swstats.info/static/website/images/other/elements.png"} className={classes.inlineImg} /> {data.monsters.nat5_not_fusion.length}
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            Days since last Non-Fusion Nat5
                                        </Grid>
                                        <Grid item md={6} xs={6} className={classes.grid}>
                                            <ScheduleIcon className={classes.smallAvatar} color="secondary" /> {data.monsters.last_nat5}
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            Non-Fusion, Non-HoH L&D Nat4+
                                        </Grid>
                                        <Grid item md={6} xs={6} className={classes.grid}>
                                            <img src={"https://swstats.info/static/website/images/other/ld.png"} className={classes.inlineImg} /> {data.monsters.ld4plus_not_fusion.length}
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            Days since last Non-Fusion, Non-HoH L&D Nat4+
                                        </Grid>
                                        <Grid item md={6} xs={6} className={classes.grid}>
                                            <ScheduleIcon className={classes.smallAvatar} color="secondary" /> {data.monsters.last_ld4plus}
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item md={12} xs={12} className={classes.section}>
                            <Typography variant="h2" color="secondary">Runes</Typography>
                        </Grid>
                        <Grid item md={12} xs={12} className={classes.section}>
                            <Divider />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Card>
                                <CardHeader 
                                    title="Introduction"
                                />
                                <CardContent>
                                    <Grid container>
                                        <Grid item md={6} xs={6}>
                                            Amount
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            {data.runes.count}
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            In inventory
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            {data.runes.unequipped_count} ({data.runes.unequipped_percentage}%)
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            Equipped
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            {data.runes.equipped_count} ({data.runes.equipped_percentage}%)
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            Locked
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            {data.runes.locked_count} ({data.runes.locked_percentage}%)
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            Maxed
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            {data.runes.maxed} ({data.runes.maxed_percentage}%)
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            Efficiency (minimum)
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            {data.runes.eff_min}%
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            Efficiency (maximum)
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            {data.runes.eff_max}%
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            Efficiency (mean)
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            {data.runes.eff_mean}%
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            Efficiency (median)
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            {data.runes.eff_median}%
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            Efficiency (standard deviation)
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            {data.runes.eff_st_dev}%
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Card>
                                <CardHeader 
                                    title="Sets & Slots"
                                />
                                <CardContent>
                                        <Grid container>
                                            {Object.values(data.runes.sets).map(([k, v]) => {
                                                return (
                                                    <Grid item lg={2} md={3} xs={4} className={classes.grid}>
                                                        <img src={"https://swstats.info/static/website/images/runes/" + k + ".png"} className={classes.mediumAvatar} /> {v}
                                                    </Grid>
                                                )
                                            })}
                                        </Grid>
                                        <Grid container>
                                            {Object.values(data.runes.slots).map(([k, v]) => {
                                                return (
                                                    <Grid item lg={2} md={3} xs={4} className={classes.grid}>
                                                        <img src={"https://swstats.info/static/website/images/runes/rune" + k + ".png"} className={classes.mediumAvatar} /> {v}
                                                    </Grid>
                                                )
                                            })}
                                        </Grid>
                                            
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item md={12} xs={12} className={classes.section}>
                            <Typography variant="h2" color="secondary">Guild</Typography>
                        </Grid>
                        <Grid item md={12} xs={12} className={classes.section}>
                            <Divider />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Card>
                                <CardHeader 
                                    title="Introduction"
                                />
                                <CardContent>
                                    <Grid container>
                                        <Grid item md={6} xs={6}>
                                            Name
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            {data.guild.name}
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            Leader
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            <img src={"https://swstats.info/static/website/images/other/guild_leader.png"} className={classes.inlineImg} /> {data.guild.master}
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            Members
                                        </Grid>
                                        <Grid item md={6} xs={6} className={classes.grid}>
                                            <img src={"https://swstats.info/static/website/images/other/guild_members.png"} className={classes.inlineImg} /> {data.guild.members_count} / {data.guild.members_max}
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Card>
                                <CardHeader 
                                    title="Guild War"
                                />
                                <CardContent>
                                    <Grid container>
                                        <Grid item md={6} xs={6}>
                                            Actual Ranking
                                        </Grid>
                                        <Grid item md={6} xs={6} className={classes.grid}>
                                            <img src={"https://swstats.info/static/website/images/other/guild_ranking.png"} className={classes.inlineImg} /> {data.guild.current_ranking}
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            Best Ranking
                                        </Grid>
                                        <Grid item md={6} xs={6} className={classes.grid}>
                                            <img src={"https://swstats.info/static/website/images/other/guild_ranking.png"} className={classes.inlineImg} /> {data.guild.best_ranking}
                                        </Grid>
                                        <Grid item md={6} xs={6}>
                                            Defenses
                                        </Grid>
                                        <Grid item md={6} xs={6} className={classes.grid}>
                                            <img src={"https://swstats.info/static/website/images/other/guild_defense.png"} className={classes.inlineImg} /> {data.guild.defenses_count} / {data.guild.defenses_max}
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item md={12} xs={12} className={classes.section}>
                            <Typography variant="h2" color="secondary">Guild Members</Typography>
                        </Grid>
                        <Grid item md={12} xs={12} className={classes.section}>
                            <Divider />
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <TableContainer component={Card} elevation={0}>
                                <Table aria-label="guild-members" size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Name</TableCell>
                                            <TableCell>Joined</TableCell>
                                            <TableCell>Offline since</TableCell>
                                            <TableCell>Days since last login</TableCell>
                                            <TableCell>First defense</TableCell>
                                            <TableCell>Second defense</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {data.guild.members.map(item => {
                                            return (
                                                <TableRow key={item.name}>
                                                    <TableCell component="th" scope="row" className={classes.rowHeader}>{item.name}</TableCell>
                                                    <TableCell component="th" scope="row" className={classes.rowHeader}><Moment interval={0} format="YYYY-MM-DD hh:mm:ss">{new Date(item.joined)}</Moment></TableCell>
                                                    <TableCell component="th" scope="row" className={classes.rowHeader}><Moment interval={0} format="YYYY-MM-DD hh:mm:ss">{new Date(item.last_login)}</Moment></TableCell>
                                                    <TableCell component="th" scope="row" className={classes.rowHeader}>{item.last_login_days}</TableCell>
                                                    <TableCell component="th" scope="row" className={classes.rowHeader}>{item.defense_1}</TableCell>
                                                    <TableCell component="th" scope="row" className={classes.rowHeader}>{item.defense_2}</TableCell>
                                                </TableRow>
                                            )
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>

                        <Grid item md={12} xs={12} className={classes.section}>
                            <Typography variant="h2" color="secondary">Friends</Typography>
                        </Grid>
                        <Grid item md={12} xs={12} className={classes.section}>
                            <Divider />
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <TableContainer component={Card} elevation={0}>
                                <Table aria-label="guild-members" size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Name</TableCell>
                                            <TableCell>Offline since</TableCell>
                                            <TableCell>Days since last login</TableCell>
                                            <TableCell>Rep Monster</TableCell>
                                            <TableCell>Rep level</TableCell>
                                            <TableCell>Rep stars</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {data.friends.map(item => {
                                            return (
                                                <TableRow key={item.name}>
                                                    <TableCell component="th" scope="row" className={classes.rowHeader}>{item.name}</TableCell>
                                                    <TableCell component="th" scope="row" className={classes.rowHeader}><Moment interval={0} format="YYYY-MM-DD hh:mm:ss">{new Date(item.last_login)}</Moment></TableCell>
                                                    <TableCell component="th" scope="row" className={classes.rowHeader}>{item.last_login_days}</TableCell>
                                                    <TableCell component="th" scope="row" className={classes.rowHeader}>{item.rep.monster}</TableCell>
                                                    <TableCell component="th" scope="row" className={classes.rowHeader}>{item.rep.level}</TableCell>
                                                    <TableCell component="th" scope="row" className={classes.rowHeader}>{item.rep.stars}</TableCell>
                                                </TableRow>
                                            )
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </>
                ) : null}
                
            </Grid>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: 10,
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
    title: {
        color: theme.palette.secondary.main,
    },
    animatedNumber: {
        display: "flex",
        justifyContent: "center",
    },
    smallAvatar: {
        width: theme.spacing(3),
        height: theme.spacing(3),
        marginRight: 5,
    },
    mediumAvatar: {
        width: theme.spacing(5),
        height: theme.spacing(5),
        marginRight: 5,
    },
    section: {
        paddingBottom: "0 !important",
        paddingTop: "0 !important",
    },
    grid: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
    },
    gridList: {
        display: "flex",
        flexDirection: "column",
    },
    inlineImg: {
        marginRight: 5,
    }
  }));