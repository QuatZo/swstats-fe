import { makeStyles } from '@material-ui/core/styles';
import NavBar from './components/Navbar';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            overflowX: 'hidden',
        }
      },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }))

  function Layout(props) {
      const classes = useStyles();
      return (
        <div className="container">
            <div className={classes.root}>
                <NavBar />
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    { props.children }
                </main>
            </div>
        </div>
      )
  }

export default Layout;