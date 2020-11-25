import React from "react";

import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import MultiSelect from "../formfields/MultiSelect";

export default function RuneFilterForm(props){
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div className={classes.root}>
            <Typography variant="h5" color="secondary" className={classes.title}>Filters</Typography>
            
            <form className={classes.root} noValidate autoComplete="off" >
                <Grid container spacing={3}>
                    <Grid item md={4} xs={12} lg={3}>
                        <MultiSelect
                            name="slot"
                            title="Slot"
                            data={props.data.slot}
                            value={props.filters.slot}
                            handleChange={props.handleMultiSelectChange}
                            handleDelete={props.handleMultiSelectDelete}
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
                            name="rune_set_id"
                            title="Set"
                            data={props.data.rune_set}
                            value={props.filters.rune_set_id}
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
                    <Grid item md={4} xs={12} lg={3}>
                        <MultiSelect
                            name="innate"
                            title="Innate stat"
                            data={props.data.innate}
                            value={props.filters.innate}
                            handleChange={props.handleMultiSelectChange}
                            handleDelete={props.handleMultiSelectDelete}
                        />
                    </Grid>
                    <Grid item md={4} xs={12} lg={3}>
                        <MultiSelect
                            name="substats"
                            title="Substats stat"
                            data={props.data.substats}
                            value={props.filters.substats}
                            handleChange={props.handleMultiSelectChange}
                            handleDelete={props.handleMultiSelectDelete}
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
    }
  }));