import React from "react";

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import MultiSelect from "../formfields/MultiSelect";
import Select from "../formfields/Select";
import Slider from '../formfields/Slider';

export default function RiftDetailFilterForm(props){
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h5" color="secondary" className={classes.title}>Filters [SSS]</Typography>
            
            <form className={classes.root} noValidate autoComplete="off">
                <Grid container spacing={3}>
                    <Grid item md={6} xs={12} lg={4}>
                        <MultiSelect
                            name="monsters"
                            title="Monsters"
                            data={props.data.monsters}
                            value={props.filters.monsters}
                            handleChange={props.handleMultiSelectChange}
                            handleDelete={props.handleMultiSelectDelete}
                        />
                    </Grid>
                    <Grid item md={6} xs={12} lg={4}>
                        <MultiSelect
                            name="leader"
                            title="Leader"
                            data={props.data.leader}
                            value={props.filters.leader}
                            handleChange={props.handleMultiSelectChange}
                            handleDelete={props.handleMultiSelectDelete}
                        />
                    </Grid>

                    <Grid item md={6} xs={12} lg={4}>
                        <Slider
                            name="dmg_total"
                            title="Total Damage"
                            data={props.data.dmg_total}
                            step={10000}
                            value={props.filters.dmg_total[1] ? props.filters.dmg_total : props.data.dmg_total}
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