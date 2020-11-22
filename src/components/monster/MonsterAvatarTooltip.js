import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';

import MonsterCard from './MonsterCard';

export default function MonsterAvatarTooltip(props){
    return (
        <Tooltip
            title={
                <MonsterCard id={props.id}/>
            }
            interactive
            arrow
            placement="right"
        >
            <Avatar alt={props.id.toString()} src={props.img_url} />
        </Tooltip>
    )
}