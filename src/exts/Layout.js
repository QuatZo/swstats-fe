import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../components/Navbar';
import {MenuOpenContext} from '../components/MenuOpenContext';

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
      marginTop: 84,
      marginLeft: 20,
      marginRight: 20,
      [theme.breakpoints.down('sm')]: {
        marginLeft: 10,
        marginRight: 10,
      },
    },
  }))

  function Layout(props) {
      const classes = useStyles();

      const [navbarOpen, setNavbarOpen] = useState(localStorage.getItem('menu-open') === 'true')

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
              </div>
          </div>
        </MenuOpenContext.Provider>
      )
  }

export default Layout;