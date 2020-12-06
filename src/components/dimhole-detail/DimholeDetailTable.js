import { makeStyles } from '@material-ui/core/styles';

import MUIDataTable from "mui-datatables";

import {useMenuOpen} from '../MenuOpenContext'

import MonsterAvatarTooltip from '../monster/MonsterAvatarTooltip';

export default function CairosDetailTable(props){
    const classes = useStyles();
    const {navbarOpen} = useMenuOpen();

    const options = {
        filterType: 'multiselect',
        enableNestedDataAccess:	".",
        print: false,
        responsive: "standard",
        selectableRowsHeader: false,
        selectableRowsHideCheckboxes: true,
        count: props.data.count ?? 0,
        sortOrder: {
            name: 'points',
            direction: 'desc'
        },
        viewColumns: false,
    }

    const columns = [
        { 
            label: 'Monsters', 
            name: 'team', 
            options: { 
                filter: false, 
                sort: false, 
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <div className={classes.flexRow}>
                            {value.map(v => {
                                return <MonsterAvatarTooltip id={v.id} img_url={v.image}/>
                        })}
                        </div>
                    )
                }
            }, 
        },
        { label: 'Average Time', name: 'clear_time', options: { filter: false, sort: false, }, },
        { label: 'Wins', name: 'wins', options: { filter: true, sort: true, }, },
        { label: 'Records', name: 'count', options: { filter: true, sort: true, }, },
        { label: 'Success rate', name: 'ratio', options: { filter: true, sort: true, }, },
        { 
            label: 'Points', 
            name: 'points', 
            options: { 
                filter: true, 
                sort: true,
                hint: "Calculated by given formula: sqrt(3)(wins) * success_rate / exp(avg_time / fastest_run)",
            }, 
        },
    ]

    return (
        <div className={navbarOpen ? classes.fullWidthWithMenu : classes.fullWidthWithoutMenu}>
            <MUIDataTable
                title="Records"
                data={props.data}
                columns={columns}
                options={options}

            />
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    flexRow: {
        display: "flex",
    },
    fullWidthWithMenu: {
        marginTop: 20,
        maxWidth: "calc(100vw - 300px)",
        width: "calc(100vw - 300px)",
        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;",
    },
    fullWidthWithoutMenu: {
        marginTop: 20,
        maxWidth: "calc(100vw - 116px)",
        width: "calc(100vw - 116px)",
        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;",
        [theme.breakpoints.down('sm')]: {
            width: "calc(100vw - 20px)",
            maxWidth: "calc(100vw - 20px)",
        },
    },
  }));