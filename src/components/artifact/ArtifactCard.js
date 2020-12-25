import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from "@material-ui/core";

import ArtifactAvatarMini from "./ArtifactAvatarMini";

export default function RuneCard(props){
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardHeader
                    avatar={<ArtifactAvatarMini data={props.data} />}
                    action={<Typography variant="body2" color="secondary">+{props.data.level} {props.data.rtype}</Typography>}
                    title={props.data.primary.replace('+', ' +') + props.data.primary_value}
                />
                <CardContent>
                    {props.data.substats.map(substat => {
                        return (
                            <Typography variant="body2">{substat}</Typography>
                        )
                    })}
                    
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
  }));