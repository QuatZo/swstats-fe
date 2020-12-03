import { makeStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


export default function MultiSelect(props){
    const classes = useStyles();

    return (
        <FormControl className={classes.formControl}>
           <Typography id={props.name + "-slider"} color="textSecondary" gutterBottom>
                {props.title}
            </Typography>
            <Slider
                value={props.value}
                onChange={(e, val) => props.handleChange(props.name, e, val)}
                min={props.data ? props.data[0] : 1}
                step={props.step}
                max={props.data ? props.data[1] : 100}
                color="secondary"
                valueLabelDisplay="auto"
                aria-labelledby={props.name + "-slider"}
                name={props.name}
            />
        </FormControl>
    )
}

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: "100%",
        maxWidth: "100%",
      },
      chips: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      chip: {
        margin: 2,
      },
      noLabel: {
        marginTop: theme.spacing(3),
      },
  }));