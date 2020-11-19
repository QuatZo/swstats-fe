import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';


import { rankingParseInitData, rankingParseProfileData } from '../exts/Helpers';

export default function Ranking(props){
    const classes = useStyles();

    const [parsedData, setParsedData] = useState([])
    const [closed, setClosed] = useState([])

    function handleClick(e){
        let closed_temp = [...closed]
        if(closed_temp.includes(e.target.id)){
            closed_temp = closed_temp.filter(item => item !== e.target.id)
        }
        else{
            closed_temp.push(e.target.id)
        }
        setClosed(closed_temp)
    }

    useEffect(() => {
        if(props.init){
            setParsedData(rankingParseInitData(props.data));
        }
        else setParsedData(rankingParseProfileData(props.data));
    }, [props.data])

    return (
        <Grid container spacing={4}>
            {parsedData.map((category) => (
                <Grid item md={3} sm={6} xs={12}>
                    <List
                        component="nav"
                        subheader={
                            <ListSubheader component="div" id={category.name}>
                                {category.name}{!closed.filter(item => item === category.name).length ? <ExpandLess className={classes.buttonRight} /> : <ExpandMore className={classes.buttonRight} />}
                            </ListSubheader>
                        }
                        className={classes.listRoot}
                        onClick={handleClick}
                        id={category.name}
                    >
                        <Collapse in={!closed.filter(item => item === category.name).length} timeout="auto" unmountOnExit>
                            {category.fields.map((item => (
                                <ListItem button id={item.name}>
                                <ListItemText primary={item.name} secondary={item.desc} inset/>
                                    <ListItemText primary={item.value} className={classes.points} />
                                </ListItem> 
                            )))}
                        </Collapse>
                    </List>
                </Grid>
            ))}
        </Grid>
    )
}

const useStyles = makeStyles((theme) => ({
    listRoot: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.secondary.main,
    },
    points: {
        textAlign: "right",
    },
    buttonRight: {
        right: 10,
        position: "absolute",
        top: "50%",
        transform: "translate(0px, -50%)",
    }
  }));