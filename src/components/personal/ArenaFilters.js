import React from "react";

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";

import Select from "../formfields/Select";
import Slider from '../formfields/Slider';

export default function ArenaFilters(props){
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h5" color="secondary" className={classes.title}>Arena</Typography>
            
            <form className={classes.root} noValidate autoComplete="off" >
                <Grid container spacing={3}>
                    <Grid item md={6} xs={6} lg={6}>
                        <Select
                            name="arena_rank"
                            title="Ranking"
                            data={props.data}
                            value={props.filters.arena_rank}
                            handleChange={props.handleSelectChange}
                            handleDelete={props.handleSelectDelete}
                        />
                    </Grid>

                    <Grid item md={6} xs={6} lg={6}>
                        <Slider
                            name="wings"
                            title="Wings/Day"
                            step={1}
                            value={props.filters.wings}
                            handleChange={props.handleSliderChange}
                        />
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "100%",
    },
    title: {
        textAlign: "center",
    },
  }));