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
            <Typography variant="h5" color="secondary" className={classes.title}>Guild</Typography>
            
            <form className={classes.root} noValidate autoComplete="off" >
                <Grid container spacing={3}>
                    <Grid item md={4} xs={6} lg={4}>
                        <Select
                            name="war_rank"
                            title="Guild War Ranking"
                            data={props.data.war_rank}
                            value={props.filters.war_rank}
                            handleChange={props.handleSelectChange}
                            handleDelete={props.handleSelectDelete}
                        />
                    </Grid>
                    <Grid item md={4} xs={6} lg={4}>
                        <Slider
                            name="war_won"
                            title="Guild Wars won/week"
                            data={[0, 12]}
                            step={1}
                            value={props.filters.war_won}
                            handleChange={props.handleSliderChange}
                        />
                    </Grid>

                    <Grid item md={4} xs={6} lg={4}>
                        <Select
                            name="siege_rank"
                            title="Siege Ranking"
                            data={props.data.siege_rank}
                            value={props.filters.siege_rank}
                            handleChange={props.handleSelectChange}
                            handleDelete={props.handleSelectDelete}
                        />
                    </Grid>
                    <Grid item md={4} xs={6} lg={4}>
                        <Select
                            name="siege_place_1"
                            title="Monday Siege place"
                            data={props.data.siege_place_1}
                            value={props.filters.siege_place_1}
                            handleChange={props.handleSelectChange}
                            handleDelete={props.handleSelectDelete}
                        />
                    </Grid>
                    <Grid item md={4} xs={6} lg={4}>
                        <Select
                            name="siege_place_2"
                            title="Thursday Siege place"
                            data={props.data.siege_place_2}
                            value={props.filters.siege_place_2}
                            handleChange={props.handleSelectChange}
                            handleDelete={props.handleSelectDelete}
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