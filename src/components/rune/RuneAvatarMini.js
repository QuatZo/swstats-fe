import React from 'react';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import {RuneBackgroundImages, RuneSlotImages, RuneQualityColors} from './RuneConstants';

import '../../assets/css/runes.css'

export default function RuneAvatarMini(props){
    const useStyles = makeStyles((theme) => ({
        runeBackground: {
            background: "url(" + RuneBackgroundImages(props.data.quality) + ")",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        },
        runeSlot: {
            background: "url(" + RuneSlotImages(props.data.slot) + ")",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        },
        runeSet: {
            background: "url(" + props.data.image + ")",
            backgroundSize: "25px 25px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        },
        badgeIcon: {
            color: RuneQualityColors(props.data.quality_original),
            backgroundColor: RuneQualityColors(props.data.quality_original),
            width: 10,
            height: 10,
            border: "1px solid rgba(0, 0, 0, 0.75)",
        },
        container: {
            maxWidth: 50,
        },
        primary: {
            textAlign: "center",
            display: "block",
            width: 40,
            marginRight: 10,
            fontSize: "0.65rem",
        },
        link: {
            textDecoration: "none",
        },
      }));
    
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Badge
                overlap="circle"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                badgeContent={<Avatar className={classes.badgeIcon}>&nbsp;</Avatar>}
                className={classes.badge}
            >
                <Avatar
                    variant="square"
                    alt={["quality ", props.data.quality].join(' ')}
                    className={classes.runeBackground}
                >
                    <Avatar
                        variant="square"
                        alt={["quality ", props.data.quality].join(' ')}
                        className={classes.runeSlot}
                    >
                        <Avatar 
                            variant="rounded"
                            size="small"
                            alt={[props.data.quality, props.data.primary, props.data.primary_value, "Slot", props.data.slot].join(' ')} 
                            className={classes.runeSet + " rune-slot-" + props.data.slot}
                        >&nbsp; {/* Prevents Avatar from drawing default User Icon*/}
                        </Avatar>
                    </Avatar>
                </Avatar>
            </Badge>
            {props.embed && <Typography variant="caption" className={classes.primary}>{props.data.primary}</Typography>}
        </div>
    )
}