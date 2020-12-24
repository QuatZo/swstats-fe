import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Card, CardContent, CardHeader, Grid, Typography } from '@material-ui/core';

export default function MonsterOverview(props){
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Card className={classes.cards}>
                <CardHeader title="Other family members" />
                <CardContent className={classes.avatars}>
                    {props.family.map(member => (
                        <Avatar alt={member.name} src={member.image} className={classes.avatars_image} />
                    ))}
                </CardContent>
            </Card>
            <Card className={classes.cards}>
                <CardContent className={classes.avatars}>
                    <Grid container>
                        <Grid item md={4} xs={12} className={classes.column}>
                            <Grid container>
                                <Grid item md={6}>
                                    <Typography variant="body1" color="secondary">Type</Typography>
                                </Grid>
                                <Grid item md={6}>
                                    {props.monster.archetype}
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item md={6}>
                                    <Typography variant="body1" color="secondary">Attribute</Typography>
                                </Grid>
                                <Grid item md={6}>
                                    {props.monster.attribute}
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item md={6}>
                                    <Typography variant="body1" color="secondary">HoH</Typography>
                                </Grid>
                                <Grid item md={6}>
                                    {props.monster.hoh}
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item md={6}>
                                    <Typography variant="body1" color="secondary">Fusion</Typography>
                                </Grid>
                                <Grid item md={6}>
                                    {props.monster.fusion}
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <Typography variant="h2" color="secondary" className={classes.name}>{props.monster.name}</Typography>
                        </Grid>
                        <Grid item md={4} xs={12} className={classes.column}>
                            <Grid container>
                                <Grid item md={6}>
                                    <Typography variant="body1" color="secondary">Popular</Typography>
                                </Grid>
                                <Grid item md={6}>
                                    {props.monster.build}
                                </Grid>
                            </Grid>
                            {props.monster.sets.map(set => (
                                <Grid container>
                                    <Grid item md={6}>
                                        <Typography variant="body1" color="secondary">{set.name}</Typography>
                                    </Grid>
                                    <Grid item md={6}>
                                        {set.text}
                                    </Grid>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "100%",
    },
    avatars: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    avatars_image: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    cards: {
        marginBottom: 10,
    },
    name: {
        textAlign: "center",
    }
}));