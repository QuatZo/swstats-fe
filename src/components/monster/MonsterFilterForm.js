import React from "react";

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import MultiSelect from "../formfields/MultiSelect";
import Select from "../formfields/Select";
import Slider from '../formfields/Slider';
import Text from '../formfields/Text';

export default function MonsterFilterForm(props){
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h5" color="secondary" className={classes.title}>Filters</Typography>
            <form className={classes.root} noValidate autoComplete="off" >
                <Grid container spacing={3}>
                    <Grid item md={4} xs={12} lg={3}>
                        <Text 
                            name="base_monster__name"
                            title="Name"
                            data={props.data.base_monster__name}
                            value={props.filters.base_monster__name}
                            handleChange={props.handleTextChange}
                        />
                    </Grid>
                    <Grid item md={4} xs={12} lg={3}>
                        <MultiSelect
                            name="stars"
                            title="Stars"
                            data={props.data.stars}
                            value={props.filters.stars}
                            handleChange={props.handleMultiSelectChange}
                            handleDelete={props.handleMultiSelectDelete}
                        />
                    </Grid>
                    <Grid item md={4} xs={12} lg={3}>
                        <MultiSelect
                            name="base_monster__base_class"
                            title="Natural stars"
                            data={props.data.base_monster__base_class}
                            value={props.filters.base_monster__base_class}
                            handleChange={props.handleMultiSelectChange}
                            handleDelete={props.handleMultiSelectDelete}
                        />
                    </Grid>
                    <Grid item md={4} xs={12} lg={3}>
                        <MultiSelect
                            name="base_monster__attribute"
                            title="Elemenent"
                            data={props.data.base_monster__attribute}
                            value={props.filters.base_monster__attribute}
                            handleChange={props.handleMultiSelectChange}
                            handleDelete={props.handleMultiSelectDelete}
                        />
                    </Grid>
                    <Grid item md={4} xs={12} lg={3}>
                        <MultiSelect
                            name="base_monster__archetype"
                            title="Archetype"
                            data={props.data.base_monster__archetype}
                            value={props.filters.base_monster__archetype}
                            handleChange={props.handleMultiSelectChange}
                            handleDelete={props.handleMultiSelectDelete}
                        />
                    </Grid>
                    <Grid item md={4} xs={12} lg={3}>
                        <MultiSelect
                            name="base_monster__awaken"
                            title="Awaken"
                            data={props.data.base_monster__awaken}
                            value={props.filters.base_monster__awaken}
                            handleChange={props.handleMultiSelectChange}
                            handleDelete={props.handleMultiSelectDelete}
                        />
                    </Grid>
                    <Grid item md={4} xs={12} lg={3}>
                        <MultiSelect
                            name="base_monster__family"
                            title="Family"
                            data={props.data.base_monster__family}
                            value={props.filters.base_monster__family}
                            handleChange={props.handleMultiSelectChange}
                            handleDelete={props.handleMultiSelectDelete}
                        />
                    </Grid>

                    <Grid item md={3} xs={12} lg={3}>
                        <Select
                            name="locked"
                            title="Locked"
                            data={props.data.locked}
                            value={props.filters.locked}
                            handleChange={props.handleSelectChange}
                            handleDelete={props.handleSelectDelete}
                        />
                    </Grid>
                    
                    <Grid item md={3} xs={12} lg={3}>
                        <Slider
                            name="hp"
                            title="HP"
                            data={props.data.hp}
                            step={100}
                            value={props.filters.hp[1] ? props.filters.hp : props.data.hp}
                            handleChange={props.handleSliderChange}
                        />
                    </Grid>
                    <Grid item md={3} xs={12} lg={3}>
                        <Slider
                            name="attack"
                            title="Attack"
                            data={props.data.attack}
                            step={10}
                            value={props.filters.attack[1] ? props.filters.attack : props.data.attack}
                            handleChange={props.handleSliderChange}
                        />
                    </Grid>
                    <Grid item md={3} xs={12} lg={3}>
                        <Slider
                            name="defense"
                            title="Defense"
                            data={props.data.defense}
                            step={10}
                            value={props.filters.defense[1] ? props.filters.defense : props.data.defense}
                            handleChange={props.handleSliderChange}
                        />
                    </Grid>
                    <Grid item md={3} xs={12} lg={3}>
                        <Slider
                            name="speed"
                            title="Speed"
                            data={props.data.speed}
                            step={1}
                            value={props.filters.speed[1] ? props.filters.speed : props.data.speed}
                            handleChange={props.handleSliderChange}
                        />
                    </Grid>
                    <Grid item md={3} xs={12} lg={3}>
                        <Slider
                            name="res"
                            title="Resistance"
                            data={props.data.res}
                            step={1}
                            value={props.filters.res[1] ? props.filters.res : props.data.res}
                            handleChange={props.handleSliderChange}
                        />
                    </Grid>
                    <Grid item md={3} xs={12} lg={3}>
                        <Slider
                            name="acc"
                            title="Accuracy"
                            data={props.data.acc}
                            step={1}
                            value={props.filters.acc[1] ? props.filters.acc : props.data.acc}
                            handleChange={props.handleSliderChange}
                        />
                    </Grid>
                    <Grid item md={3} xs={12} lg={3}>
                        <Slider
                            name="crit_rate"
                            title="Critical Rate"
                            data={props.data.crit_rate}
                            step={1}
                            value={props.filters.crit_rate[1] ? props.filters.crit_rate : props.data.crit_rate}
                            handleChange={props.handleSliderChange}
                        />
                    </Grid>
                    <Grid item md={3} xs={12} lg={3}>
                        <Slider
                            name="crit_dmg"
                            title="Critical Damage"
                            data={props.data.crit_dmg}
                            step={1}
                            value={props.filters.crit_dmg[1] ? props.filters.crit_dmg : props.data.crit_dmg}
                            handleChange={props.handleSliderChange}
                        />
                    </Grid>
                    <Grid item md={3} xs={12} lg={3}>
                        <Slider
                            name="eff_hp"
                            title="Effective HP"
                            data={props.data.eff_hp}
                            step={1}
                            value={props.filters.eff_hp[1] ? props.filters.eff_hp : props.data.eff_hp}
                            handleChange={props.handleSliderChange}
                        />
                    </Grid>
                    <Grid item md={3} xs={12} lg={3}>
                        <Slider
                            name="avg_eff_total"
                            title="Efficiency"
                            data={props.data.avg_eff_total}
                            step={0.1}
                            value={props.filters.avg_eff_total[1] ? props.filters.avg_eff_total : props.data.avg_eff_total}
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