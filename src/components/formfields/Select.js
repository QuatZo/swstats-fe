import { makeStyles } from '@material-ui/core/styles';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


export default function MultiSelect(props){
    const classes = useStyles();

    return (
        <FormControl className={classes.formControl}>
            <InputLabel id={props.name + "-label"} color="secondary">{props.title}</InputLabel>
            <Select
                labelId={props.name + "-label"}
                id={props.name}
                name={props.name}
                color="secondary"
                value={props.value}
                onChange={props.handleChange}
                input={<Input id={props.name} />}
            >
            {props.data.map((item) => (
                <MenuItem key={item.name} value={item.id}>
                    {item.name}
                </MenuItem>
            ))}
            </Select>
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