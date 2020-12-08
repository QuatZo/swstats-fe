import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import CardTooltip from '../CardTooltip';

import MonsterCard from './MonsterCard';

export default function MonsterAvatarTooltip(props){
    return (
        <>
            {props.unknown ? (
                <Avatar alt={"Empty"} src="https://swstats.info/static/website/images/monsters/monster_unknown.png" />
            ) : (
                <Link to={"/monster/" + props.id}>
                    <CardTooltip
                        component={<MonsterCard id={props.id}/>}
                    >
                        <Avatar alt={props.id.toString()} src={props.img_url} />
                    </CardTooltip>
                </Link>
            )}
        </>
    )
}