import { makeStyles } from '@material-ui/core/styles';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

export default function MultiSelect(props){
    const classes = useStyles();

    return (
        <FormControl className={classes.formControl}>
            <InputLabel id={props.name + "-label"} color="secondary">{props.title}</InputLabel>
            <Select
                labelId={props.name + "-label"}
                id={props.name}
                name={props.name}
                multiple
                value={props.value}
                onChange={props.handleChange}
                input={<Input id={props.name} />}
                renderValue={(selected) => (
                    <div className={classes.chips}>
                        {selected.map((value) => (
                            <Chip 
                                key={value} 
                                label={value} 
                                className={classes.chip} 
                                onClick={() => props.handleDelete(props.name, value)}
                                onDelete={() => props.handleDelete(props.name, value)}
                                onMouseDown={(event) => {
                                    event.stopPropagation();
                                }}
                            />
                        ))}
                    </div>
                )}
                MenuProps={MenuProps}
            >
            {props.data.map((item) => (
                <MenuItem key={item.id} value={item.name}>
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