import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../components/Navbar';
import {MenuOpenContext} from '../components/MenuOpenContext';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            overflowX: 'hidden',
        },
        minHeight: "100vh",
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
      padding: 0,
      marginTop: 64,
      [theme.breakpoints.down('md')]: {
        marginTop: 56,
      },
      marginLeft: 0,
      marginRight: 0,
      paddingTop: 20,
      paddingLeft: 20,
      paddingRight: 20,
      overflow: 'hidden',
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }))

  function Layout(props) {
      const classes = useStyles();

      const [navbarOpen, setNavbarOpen] = useState(localStorage.getItem('menu-open') === 'true')
      const [open, setOpen] = useState(localStorage.getItem('shutdown-read') !== 'true');
      
      const handleClose = () => {
        setOpen(false);
        localStorage.setItem('shutdown-read', true);
      }
    
      function handleNavbarStateChange(){
        localStorage.setItem('menu-open', !navbarOpen)
        setNavbarOpen(!navbarOpen)
      }

      return (
        <MenuOpenContext.Provider value={{
            navbarOpen,
            handleNavbarStateChange
          }}>
          <div className="container">
              <div className={classes.root}>
                  <NavBar />
                  <main className={classes.content}>
                      { props.children }
                  </main>
                  <Backdrop className={classes.backdrop} open={open}>
                    <Card style={{ width: "100%", maxWidth: "800px"}}>
                      <CardContent>
                        <Typography variant="h2" gutterBottom>SWStats Shutdown</Typography>
                        <Typography color="textSecondary" gutterBottom>
                          With new Statistics Update that Com2Us enrolled few days ago, and with almost no SWStats contributors, I am forced to shutdown this project. 
                          Don't worry tho, some functionality will be implemented in SWARFARM, with bigger database, more contributors and improvements.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" onClick={handleClose}>I understand!</Button>
                      </CardActions>
                    </Card>
                  </Backdrop>
              </div>
          </div>
        </MenuOpenContext.Provider>
      )
  }

export default Layout;