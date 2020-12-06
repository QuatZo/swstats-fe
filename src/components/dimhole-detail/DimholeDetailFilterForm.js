import React from "react";

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import MultiSelect from "../formfields/MultiSelect";
import Select from "../formfields/Select";
import Slider from '../formfields/Slider';

export default function CairosDetailFilterForm(props){
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h5" color="secondary" className={classes.title}>Filters</Typography>
            
            <form className={classes.root} noValidate autoComplete="off" >
                <Grid container spacing={3}>
                    <Grid item md={6} xs={12} lg={3}>
                        <MultiSelect
                            name="monsters__base_monster"
                            title="Monsters"
                            data={props.data.monsters__base_monster}
                            value={props.filters.monsters__base_monster}
                            handleChange={props.handleMultiSelectChange}
                            handleDelete={props.handleMultiSelectDelete}
                        />
                    </Grid>
                    <Grid item md={6} xs={12} lg={3}>
                        <Select
                            name="practice"
                            title="Practice"
                            data={props.data.practice}
                            value={props.filters.practice}
                            handleChange={props.handleSelectChange}
                        />
                    </Grid>

                    <Grid item md={6} xs={12} lg={3}>
                        <Slider
                            name="ratio"
                            title="Success rate"
                            data={props.data.ratio}
                            step={1}
                            value={props.filters.ratio[1] ? props.filters.ratio : props.data.ratio}
                            handleChange={props.handleSliderChange}
                        />
                    </Grid>
                    <Grid item md={6} xs={12} lg={3}>
                        <Slider
                            name="win"
                            title="Wins"
                            data={props.data.win}
                            step={1}
                            value={props.filters.win[1] ? props.filters.win : props.data.win}
                            handleChange={props.handleSliderChange}
                        />
                    </Grid>
                    
                </Grid>
                <ButtonGroup disableElevation variant="contained" color="secondary" className={classes.buttons}>
                    <Button color="primary" className={classes.button} onClick={props.handleReset}>Reset filters</Button>
                    <Button className={classes.button} onClick={props.handleSubmit}>Submit</Button>
                </ButtonGroup>
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
    buttons: {
        width: "100%",
        marginBottom: 30,
        margin: "auto",
        display: "flex",
        justifyContent: "center",
    },
    button: {
        width: "50%",
        maxWidth: 200,
    },
  }));