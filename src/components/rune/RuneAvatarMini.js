import React from 'react';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import {RuneBackgroundImages, RuneSlotImages, RuneQualityColors} from './RuneConstants';

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
            backgroundSize: "30px 30px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        },
        badge: {
            marginRight: 5,
            // display: "block",
        },
        badgeIcon: {
            color: RuneQualityColors(props.data.quality_original),
            backgroundColor: RuneQualityColors(props.data.quality_original),
            width: 10,
            height: 10,
            border: "1px solid rgba(0, 0, 0, 0.75)",
        },
      }));
    const classes = useStyles();
    return (
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
                        className={classes.runeSet}
                    >&nbsp; {/* Prevents Avatar from drawing default User Icon*/}
                    </Avatar>
                </Avatar>
            </Avatar>
        </Badge>
    )
}
