import React from "react";

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import MultiSelect from "../formfields/MultiSelect";
import Select from "../formfields/Select";
import Slider from '../formfields/Slider';

export default function ArtifactFilterForm(props){
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h5" color="secondary" className={classes.title}>Filters</Typography>
            
            <form className={classes.root} noValidate autoComplete="off" >
                <Grid container spacing={3}>
                    <Grid item md={4} xs={12} lg={3}>
                        <MultiSelect
                            name="rtype"
                            title="Type"
                            data={props.data.rtype}
                            value={props.filters.rtype}
                            handleChange={props.handleMultiSelectChange}
                            handleDelete={props.handleMultiSelectDelete}
                        />
                    </Grid>
                    <Grid item md={4} xs={12} lg={3}>
                        <MultiSelect
                            name="quality"
                            title="Quality"
                            data={props.data.quality}
                            value={props.filters.quality}
                            handleChange={props.handleMultiSelectChange}
                            handleDelete={props.handleMultiSelectDelete}
                        />
                    </Grid>
                    <Grid item md={4} xs={12} lg={3}>
                        <MultiSelect
                            name="quality_original"
                            title="Original Quality"
                            data={props.data.quality_original}
                            value={props.filters.quality_original}
                            handleChange={props.handleMultiSelectChange}
                            handleDelete={props.handleMultiSelectDelete}
                        />
                    </Grid>
                    <Grid item md={4} xs={12} lg={3}>
                        <MultiSelect
                            name="primary"
                            title="Primary stat"
                            data={props.data.primary}
                            value={props.filters.primary}
                            handleChange={props.handleMultiSelectChange}
                            handleDelete={props.handleMultiSelectDelete}
                        />
                    </Grid>
                    <Grid item md={4} xs={12} lg={4}>
                        <MultiSelect
                            name="substats"
                            title="Substats"
                            data={props.data.substats}
                            value={props.filters.substats}
                            handleChange={props.handleMultiSelectChange}
                            handleDelete={props.handleMultiSelectDelete}
                        />
                    </Grid>

                    <Grid item md={4} xs={12} lg={2}>
                        <Select
                            name="equipped"
                            title="Equipped"
                            data={props.data.equipped}
                            value={props.filters.equipped}
                            handleChange={props.handleSelectChange}
                            handleDelete={props.handleSelectDelete}
                        />
                    </Grid>
                    <Grid item md={3} xs={12} lg={2}>
                        <Select
                            name="equipped_rta"
                            title="Equipped (RTA)"
                            data={props.data.equipped_rta}
                            value={props.filters.equipped_rta}
                            handleChange={props.handleSelectChange}
                            handleDelete={props.handleSelectDelete}
                        />
                    </Grid>
                    <Grid item md={3} xs={12} lg={1}>
                        <Select
                            name="locked"
                            title="Locked"
                            data={props.data.locked}
                            value={props.filters.locked}
                            handleChange={props.handleSelectChange}
                            handleDelete={props.handleSelectDelete}
                        />
                    </Grid>
                    <Grid item md={3} xs={12} lg={2}>
                        <Slider
                            name="efficiency"
                            title="Efficiency"
                            data={props.data.efficiency}
                            step={0.1}
                            value={props.filters.efficiency[1] ? props.filters.efficiency : props.data.efficiency}
                            handleChange={props.handleSliderChange}
                        />
                    </Grid>
                    <Grid item md={3} xs={12} lg={1}>
                        <Slider
                            name="level"
                            title="Level"
                            data={props.data.level}
                            step={1}
                            value={props.filters.level[1] ? props.filters.level : props.data.level}
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