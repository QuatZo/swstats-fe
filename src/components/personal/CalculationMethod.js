import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

export default function CalculationMethod(){
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h5" color="secondary" className={classes.title}>Calculation Method</Typography>
            <Grid container spacing={3}>
                <Grid item md={4} xs={12} lg={3}>
                    <Paper className={classes.paper}>
                        <Typography variant="h6" className={classes.title} color="secondary" gutterBottom>
                            Arena
                        </Typography>
                        <Typography variant="body2">
                            At the start of every week, devilmon cost (180 glory points) is added to the pool
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item md={4} xs={12} lg={3}>
                    <Paper className={classes.paper}>
                        <Typography variant="h6" className={classes.title} color="secondary" gutterBottom>
                            Arena
                        </Typography>
                        <Typography variant="body2">
                            At the start of every week, league reward (~60 glory points) is subtracted from the pool
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item md={4} xs={12} lg={3}>
                    <Paper className={classes.paper}>
                        <Typography variant="h6" className={classes.title} color="secondary" gutterBottom>
                            Arena
                        </Typography>
                        <Typography variant="body2">
                            Wing per Day need to be between 1 and 100
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item md={4} xs={12} lg={3}>
                    <Paper className={classes.paper}>
                        <Typography variant="h6" className={classes.title} color="secondary" gutterBottom>
                            Arena
                        </Typography>
                        <Typography variant="body2">
                            Calculator assumes every used wing is a win
                        </Typography>
                    </Paper>
                </Grid>


                <Grid item md={4} xs={12} lg={3}>
                    <Paper className={classes.paper}>
                        <Typography variant="h6" className={classes.title} color="secondary" gutterBottom>
                            Guild
                        </Typography>
                        <Typography variant="body2">
                            At the start of every week, rainbowmon cost (150 guild points) is added to the pool
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item md={4} xs={12} lg={3}>
                    <Paper className={classes.paper}>
                        <Typography variant="h6" className={classes.title} color="secondary" gutterBottom>
                            Guild
                        </Typography>
                        <Typography variant="body2">
                            At Monday, 1st siege reward is substracted from the pool
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item md={4} xs={12} lg={3}>
                    <Paper className={classes.paper}>
                        <Typography variant="h6" className={classes.title} color="secondary" gutterBottom>
                            Guild
                        </Typography>
                        <Typography variant="body2">
                            At Thursday, 2nd siege reward is substracted from the pool
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item md={4} xs={12} lg={3}>
                    <Paper className={classes.paper}>
                        <Typography variant="h6" className={classes.title} color="secondary" gutterBottom>
                            Guild
                        </Typography>
                        <Typography variant="body2">
                            Calculator assumes player scored 10% contribution during Siege Battle
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item md={4} xs={12} lg={3}>
                    <Paper className={classes.paper}>
                        <Typography variant="h6" className={classes.title} color="secondary" gutterBottom>
                            Guild
                        </Typography>
                        <Typography variant="body2">
                            Calculator assumes player is always following +6 rule in Guild war
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item md={4} xs={12} lg={3}>
                    <Paper className={classes.paper}>
                        <Typography variant="h6" className={classes.title} color="secondary" gutterBottom>
                            Guild
                        </Typography>
                        <Typography variant="body2">
                            Calculator assumes every used guild sword has been successful
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 20,
        marginBottom: 20,
        flexGrow: 1,
        width: "100%",
    },
    title: {
        textAlign: "center",
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
  }));