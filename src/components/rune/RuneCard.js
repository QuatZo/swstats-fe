import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from "@material-ui/core";

import RuneAvatarMini from "./RuneAvatarMini";
import {RuneSubstatMap} from './RuneConstants';

export default function RuneCard(props){
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardHeader
                    avatar={<RuneAvatarMini data={props.data} />}
                    action={<Typography variant="body2" color="secondary">+{props.data.level} {props.data.rune_set}</Typography>}
                    title={RuneSubstatMap[props.data.primary].name + ' +' + props.data.primary_value + (RuneSubstatMap[props.data.primary].percentage ? '%' : '')}
                    subheader={props.data.innate ? RuneSubstatMap[props.data.innate].name + " +" + props.data.innate_value + (RuneSubstatMap[props.data.innate].percentage ? '%' : '') : null}
                />
                <CardContent>
                    {Object.entries(props.data.substats).map(([substat, values]) => {
                        return (
                            values !== null ? (
                                <div className={classes.row}>
                                    <Typography variant="subtitle2" color="secondary">{RuneSubstatMap[substat].name}</Typography>&nbsp;
                                    <Typography variant="body2" color={values[1] ? "secondary" : "textPrimary"}>+{values[0] + values[1]}{RuneSubstatMap[substat].percentage ? '%' : ''}</Typography>
                                </div>
                            ) : null
                        )
                    })}
                    <div className={classes.row}>
                        <Typography variant="subtitle2" color="secondary">&nbsp;</Typography>
                    </div>
                    <div className={classes.row}>
                        <Typography variant="subtitle2" color="secondary">Efficiency</Typography>&nbsp;
                        <Typography variant="body2" color="secondary">{props.data.efficiency}%</Typography>
                    </div>
                    <div className={classes.row}>
                        <Typography variant="subtitle2" color="secondary">Efficiency Max</Typography>&nbsp;
                        <Typography variant="body2" color="secondary">{props.data.efficiency_max}%</Typography>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    card: {
        width: "calc(100% - 10px)",
        marginRight: 10,
        marginBottom: 10,
    },
    row: {
        display: "flex",
    }
  }));