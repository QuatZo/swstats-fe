import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import APIEndpoints from '../exts/Endpoints';
import {GenerateAPIHeaders, HandleAPIError} from '../exts/Helpers';
import Loading from '../components/Loading';
import Error from '../components/Error';

export default function Rift(){
    const [loading, setLoading] = useState(true);
    const [err, setError] = useState(false);
    const [errorData, setErrorData] = useState({title: "Unknown Error", msg: "Unknown error has occured. Please contact administrator!"})
    const [data, setData] = useState([]);
    const [open, setOpen] = useState([]);

    const classes = useStyles();

    useEffect(() => {
        axios.get(APIEndpoints.Rift, {
            headers: GenerateAPIHeaders() 
        })
        .then((resp) => {
            setData(resp.data);
        })
        .catch((err_res) => {
            setErrorData(HandleAPIError(err_res))
            setError(true);
        })
        .finally(() => {
            setLoading(false);
        })
    }, [])

    const handleClick = (e, itemId) => {
        let opens = [...open]
        if(opens.includes(itemId)){
            opens = opens.filter(item => item !== itemId)
        }
        else{
            opens.push(itemId)
        }
        setOpen(opens)
    }

    return (
        <div className={classes.root}>
            { loading && <Loading />}
            { !loading && err && <Error title={errorData.title} msg={errorData.msg} />}
            <Grid container spacing={3} className={classes.grid}>
                {data.map(item => (
                    <Grid item md={4} lg={3} xs={6} key={item.title}>
                        <Card>
                            <CardHeader
                                avatar={
                                    <Avatar alt={item.name} src={item.image} className={classes.avatar} />
                                }
                                title={item.name}
                                subheader={item.max_stage}
                            />
                            <CardContent>
                                <List
                                    component="nav"
                                    aria-labelledby="nested-list-subheader"
                                    className={classes.root}
                                >
                                    {item.stages.map(stage => {
                                        return (
                                            <>
                                                <ListItem button onClick={(event) => handleClick(event, item.id + "" + stage.stage)}>
                                                    <ListItemText primary={"B" + stage.stage} />
                                                    <Typography variant="body2" color="secondary">({stage.records})</Typography>
                                                    {stage.wins || stage.sss ? open.includes(item.id + "" + stage.stage) ? <ExpandLess color="secondary" /> : <ExpandMore color="secondary" /> : null}
                                                </ListItem>
                                                {stage.wins || stage.sss ? (
                                                    <Collapse in={open.includes(item.id + "" + stage.stage)} timeout="auto" unmountOnExit>
                                                    <List component="div" disablePadding>
                                                        <Link to={"/rifts/" + item.id + "-" + item.path + "/" + stage.stage} className={classes.link}>
                                                            <ListItem button className={classes.nested}>
                                                                {stage.wins ? (
                                                                    <>
                                                                    <ListItemText>Wins <br />Average Time</ListItemText>
                                                                    {stage.wins}<br />{stage.avg_time}<br /><ArrowForwardIosIcon className={classes.moveForward}/>
                                                                    </>

                                                                ): (
                                                                    <>
                                                                    <ListItemText>SSS <br />Average Damage</ListItemText>
                                                                    {stage.sss}<br />{stage.avg_dmg}<br /><ArrowForwardIosIcon className={classes.moveForward}/>
                                                                    </>

                                                                )}
                                                                
                                                            </ListItem>
                                                        </Link>
                                                    </List>
                                                    
                                                </Collapse>
                                                ) : null}
                                            </>
                                        )
                                    })}
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        color: theme.palette.secondary.main,
    },
    animatedNumber: {
        display: "flex",
        justifyContent: "center",
    },
    grid: {
        [theme.breakpoints.down('sm')]: {
            width: "inherit",
            margin: "inherit",
        }
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    moveForward: {
        marginLeft: theme.spacing(4),
    },
    link: {
        textDecoration: "none",
        color: theme.palette.secondary.main,
    },
  }));