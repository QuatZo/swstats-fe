import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link, useLocation } from 'react-router-dom';

import HomeIcon from '@material-ui/icons/Home';
import BarChartIcon from '@material-ui/icons/BarChart';
import HelpIcon from '@material-ui/icons/Help';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import PersonIcon from '@material-ui/icons/Person';
import SecurityIcon from '@material-ui/icons/Security';
import ApartmentIcon from '@material-ui/icons/Apartment';

import RunesIcon from '../icons/RunesIcon';
import MonstersIcon from '../icons/MonstersIcon';
import ArtifactsIcon from '../icons/ArtifactsIcon';
import DungeonsIcon from '../icons/DungeonsIcon';
import DimHoleIcon from '../icons/DimHoleIcon';

import {useMenuOpen} from './MenuOpenContext'


export default function Navbar() {
  const { navbarOpen, handleNavbarStateChange} = useMenuOpen();
  
  const theme = useTheme();
  const classes = useStyles();
  const location = useLocation()


  useEffect(() => {
    // close menu after page change only for mobile users
    if(window.innerWidth <= theme.breakpoints.values.sm){
      handleNavbarStateChange();
    }
  }, [location.pathname, theme.breakpoints.values.sm])

  const urls = [
    {
        'path': '/',
        'icon': <HomeIcon />,
        'text': 'Homepage',
    },
    {
        'path': '/upload',
        'icon': <BarChartIcon />,
        'text': 'Compare profile',
    },
    {
        'path': '/runes',
        'icon': <RunesIcon/>,
        'text': 'Runes',
    },
    {
        'path': '/monsters',
        'icon': <MonstersIcon />,
        'text': 'Monsters',
    },
    {
        'path': '/artifacts',
        'icon': <ArtifactsIcon />,
        'text': 'Artifacts',
    },
    {
        'path': '/dungeons',
        'icon': <DungeonsIcon />,
        'text': 'Dungeons',
    },
    {
        'path': '/dimhole',
        'icon': <DimHoleIcon />,
        'text': 'Dimension Hole',
    },
    {
        'path': '/siege',
        'icon': <SecurityIcon />,
        'text': 'Siege',
    },
    {
        'path': '/reports',
        'icon': <DataUsageIcon />,
        'text': 'Reports',
    },
    {
        'path': '/contribute',
        'icon': <FavoriteIcon />,
        'text': 'Contribute',
    },
    {
        'path': '/credits',
        'icon': <LoyaltyIcon />,
        'text': 'Credits',
    },
  ]

  const urlsDesktop = [
    {
        'path': '/profile',
        'icon': <PersonIcon />,
        'text': 'Profile',
    },
    {
        'path': '/towers',
        'icon': <ApartmentIcon />,
        'text': 'Towers Calculator',
    },
    {
        'path': '/dimholecalc',
        'icon': <DimHoleIcon />,
        'text': '2A Calculator',
    }
  ]

  return (
    <div>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: navbarOpen,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleNavbarStateChange}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: navbarOpen,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Summoners War Statistics Web
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: navbarOpen,
          [classes.drawerClose]: !navbarOpen,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: navbarOpen,
            [classes.drawerClose]: !navbarOpen,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleNavbarStateChange}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {urls.map(el => (
            <ListItem button component={Link} to={el.path} key={el.text} className={el.path === location.pathname ? classes.active : null}>
                <ListItemIcon className={el.path === location.pathname ? classes.active : null}>{ el.icon ? el.icon : <HelpIcon />}</ListItemIcon> {/* temp */}
                <ListItemText primary={el.text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {urlsDesktop.map(el => (
            <ListItem button component={Link} to={el.path} key={el.text} className={el.path === location.pathname ? classes.active : null}>
                
                <ListItemIcon className={el.path === location.pathname ? classes.active : null}>{ el.icon ? el.icon : <HelpIcon />}</ListItemIcon> {/* temp */}
                <ListItemText primary={el.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down('sm')]: {
        width: 0,
    }
  },
  menuButton: {
    marginRight: 36,
    [theme.breakpoints.down('sm')]: {
        marginRight: 0,
    }
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.down('sm')]: {
      width: 0,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  active: {
      color: theme.palette.secondary.main,
  }
}));
