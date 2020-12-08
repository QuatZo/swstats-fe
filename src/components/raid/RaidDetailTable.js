import { makeStyles } from '@material-ui/core/styles';

import MUIDataTable from "mui-datatables";

import {useMenuOpen} from '../MenuOpenContext'

import MonsterAvatarTooltip from '../monster/MonsterAvatarTooltip';

export default function RaidDetailTable(props){
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
            label: 'Frontline', 
            name: 'frontline', 
            options: { 
                filter: false, 
                sort: false, 
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <div className={classes.flexRow}>
                            {value.map(v => {
                                return <MonsterAvatarTooltip id={v ? v.id : null} img_url={v ? v.image : null} unknown={v ? false : true}/>
                        })}
                        </div>
                    )
                }
            }, 
        },
        { 
            label: 'Backline', 
            name: 'backline', 
            options: { 
                filter: false, 
                sort: false, 
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <div className={classes.flexRow}>
                            {value.map(v => {
                                return <MonsterAvatarTooltip id={v ? v.id : null} img_url={v ? v.image : null} unknown={v ? false : true}/>
                        })}
                        </div>
                    )
                }
            }, 
        },
        { 
            label: 'Leader', 
            name: 'leader', 
            options: { 
                filter: false, 
                sort: false, 
                customBodyRender: (value, tableMeta, updateValue) => (
                    <MonsterAvatarTooltip id={value ? value.id : null} img_url={value ? value.image : null} unknown={value ? false : true}/>
                )
            }
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
                hint: "Calculated by given formula: cube_root(wins) * success_rate / exp(avg_time / fastest_run)",
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