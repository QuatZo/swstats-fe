import ErrorIcon from '@material-ui/icons/Error';
import BlockIcon from '@material-ui/icons/Block';
import { makeStyles } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';
import { Typography } from '@material-ui/core';


export default function Error(props){
    const classes = useStyles();
    return (
        <div className={props.embed ? classes.embedded : classes.error}>
            {props.pageNotFound ? (
                <BlockIcon 
                    fontSize="inherit" 
                    className={classes.middle + " " + classes.title}
                />
            ) : (
                <ErrorIcon 
                    fontSize="inherit" 
                    className={classes.middle + " " + classes.title}
                />
            )}
            
            <Typography variant={props.embed ? "h6" : "h3"} className={classes.title}>
                {props.title}
            </Typography>
            <Divider className={classes.middle} />
            <Typography variant={props.embed ? "body2" : "subtitle1"} className={classes.middle}>
                {props.msg}
            </Typography>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    title: {
        color: theme.palette.secondary.main,
        textAlign: "center",
    },
    error: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: 150,
        [theme.breakpoints.down('xs')]: {
            fontSize: 100,
            width: "100%",
            padding: 20,
            left: 0,
            transform: "translate(0, -50%)",
        }
    },
    embedded: {
        position: "relative",
        width: "100%",
        height: 300,
        margin: 0,
        padding: 0,
        fontSize: 50,
        top: 75,
    },
    middle: {
        display: "block",
        margin: "auto",
        textAlign: "center",
        marginBottom: 10,
    }
}));