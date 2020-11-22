import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Loading(props){
    const classes = useStyles();

    return (
        <div className={props.embed ? classes.embedded : classes.parent}>
            <Backdrop className={classes.backdrop} open={true} invisible={props.embed}>
                <CircularProgress className={classes.loading} />
            </Backdrop>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    parent: {
        position: "relative",
        width: "100%",
        height: "calc(100vh - 84px)",
        margin: 0,
        padding: 0,
    },
    embedded: {
        position: "relative",
        width: "100%",
        height: "100%",
        margin: 0,
        padding: 0,
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
      position: "absolute",
      marginLeft: -20,
      marginRight: -20,
      marginTop: -20,
      [theme.breakpoints.down('sm')]: {
        marginTop: -30,
      }
    },
    loading: {
        color: theme.palette.secondary.main,
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
    root: {
        flexGrow: 1,
    },
    title: {
        color: theme.palette.secondary.main,
    },
  }));