import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import C2U from '../assets/avatars/c2u.png'
import Xzandro from '../assets/avatars/xzandro.png'
import Porksmash from '../assets/avatars/porksmash.png'
import MUIAvatar from '../assets/avatars/materialui.svg'
import SW from '../assets/sw.png'
import SWEX from '../assets/swex.png'
import SWARFARM from '../assets/swarfarm.png'
import MUI from '../assets/materialui.png'

export default function Credits() {
  const classes = useStyles();

  const data = [
    {
      title: "Com2us",
      subheader: "Summoners War Creator",
      avatar: C2U,
      alt: "Com2us",
      img: SW,
      desc: "All data collected by Summoners War Statistics Web and game-related media belongs to creator of Summoners War mobile game - Com2us"
    },
    {
      title: "Xzandro",
      subheader: "SWEX, SWOP Creator",
      avatar: Xzandro,
      alt: "Xzandro",
      img: SWEX,
      desc: "Every data collected by Summoners War Statistics Web is possible because of Summoners War Exporter existence"
    },
    {
      title: "Porksmash",
      subheader: "SWARFARM Creator",
      avatar: Porksmash,
      alt: "Porksmash",
      img: SWARFARM,
      desc: "Every game data used by Summoners War Statistics Web has been parsed from SWARFARM"
    },
    {
      title: "Material UI",
      subheader: "React Framework",
      avatar: MUIAvatar,
      alt: "Material UI",
      img: MUI,
      desc: "React components for faster and easier web development based on Google Material Design"
    },
  ]

  return (
    <div className={classes.root}>
        <Grid container spacing={3} className={classes.grid}>
            {data.map((item) => (
                <Grid item container md={6} lg={3} xs={12} key={item.title}>
                    <Card>
                        <CardHeader
                            avatar={
                                <Avatar alt={item.alt} src={item.avatar} className={classes.avatar} />
                            }
                            title={item.title}
                            subheader={item.subheader}
                        />
                        <CardMedia
                            className={classes.media}
                            image={item.img}
                            title={item.alt}
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {item.desc}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
  </div>
)}

const useStyles = makeStyles((theme) => ({
    grid: {
        [theme.breakpoints.down('sm')]: {
            width: "inherit",
            margin: 0,
        }
    },
    cardRoot: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  }));
  