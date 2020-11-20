import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-elastic-carousel'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import '../assets/css/carousel.css'

import { rankingParseInitData, rankingParseProfileData } from '../exts/Helpers';

export default function Ranking(props){
    const classes = useStyles();
    const breakpoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
      ]
    const [parsedData, setParsedData] = useState([])

    useEffect(() => {
        if(props.init){
            setParsedData(rankingParseInitData(props.data));
        }
        else setParsedData(rankingParseProfileData(props.data));
    }, [props.data])

    return (
        <Carousel
            itemsToShow={6}
            pagination={false}
            className={classes.carousel}
            breakPoints={breakpoints}
        >
            {parsedData.map((category) => {
                return category.fields.map((item) => (
                    <Paper className={classes.paper}>
                        <div className={classes.header}>
                            <Typography variant="body2" className={classes.category}>{category.name}</Typography>
                            <Typography variant="subtitle1" className={classes.title}>{item.name}</Typography>
                            <Typography variant="body2" className={classes.category} gutterBottom>{item.desc}</Typography>
                        </div>
                        <Typography variant="h3" className={classes.val}>
                            {item.value}
                        </Typography>
                    </Paper>
                ))
            })}
        </Carousel>
    )
}

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        minWidth: "calc(100% - 50px)",
    },
    header: {
        display: "block",
    },
    category: {
        color: theme.palette.text.secondary,
    },
    title: {
        color: theme.palette.secondary.main,
    },
    val: {
        textAlign: "center",
    },
    carousel: {
        width: "100%",
        marginTop: 25,
        ".rec-arrow": {
            backgroundColor: theme.palette.secondary.main + "!important",
        }
    },
}));