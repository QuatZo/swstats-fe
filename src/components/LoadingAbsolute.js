import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function LoadingAbsolute(){
    const classes = useStyles();

    return (
        <div>
            <Backdrop className={classes.backdrop} open={true}>
                <CircularProgress className={classes.loading} />
            </Backdrop>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: 99999999,
      color: '#fff',
    },
    loading: {
        color: theme.palette.secondary.main,
    },
  }));