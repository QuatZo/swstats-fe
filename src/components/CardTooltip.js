import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';

const CTooltip = withStyles((theme) => ({
    tooltip: {
        // margin: 0,
        padding: 0,
    }
}))(Tooltip);


export default function CardTooltip(props){
    return (
        <CTooltip
            title={props.component}
            interactive
            arrow
            placement="right"
        >
            {props.children}
        </CTooltip>
    )
}