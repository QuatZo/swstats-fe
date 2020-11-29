import { makeStyles } from '@material-ui/core/styles';
import MUIDataTable from "mui-datatables";

import {useMenuOpen} from '../MenuOpenContext'

import MonsterAvatarTooltip from '../monster/MonsterAvatarTooltip';
import ClearIcon from '@material-ui/icons/Clear';
import CheckIcon from '@material-ui/icons/Check';

export default function MonsterTable(props){
    const classes = useStyles();
    const {navbarOpen} = useMenuOpen();
    
    const options = {
        filterType: 'multiselect',
        enableNestedDataAccess:	".",
        print: false,
        responsive: "standard",
        selectableRowsHeader: false,
        selectableRowsHideCheckboxes: true,
        serverSide: true,
        count: props.data.count ?? 0,
        rowsPerPage: 10,
        rowsPerPageOptions: [],
        onTableChange: (action, tableState) => {
            switch (action) {
              case 'changePage':
                props.handleTableChange(tableState.page, tableState.sortOrder);
                break;
              case 'sort':
                props.handleTableChange(tableState.page, tableState.sortOrder);
                break;
              default: break;
            }
          },
    }

    const columns = [
        { 
            label: 'Monster', 
            name: 'id', 
            options: { 
                filter: false, 
                sort: false, 
                customBodyRender: (value, tableMeta, updateValue) => (
                    <MonsterAvatarTooltip id={value} img_url={tableMeta.rowData[tableMeta.columnIndex + 1]}/>
                ),
            }, 
        },
        {
            name: 'image',
            options: {
                display: 'excluded',
                filter: false,
                sort: false,
            }
        },
        { label: 'Stars', name: 'stars', options: { filter: true, sort: true, }, },
        { label: 'Nat', name: 'base_monster.base_class', options: { filter: true, sort: true, }, },
        { label: 'Family', name: 'base_monster.family', options: { filter: false, sort: false, }, },
        { label: 'Name', name: 'base_monster.name', options: { filter: true, sort: true, }, },
        { label: 'Level', name: 'level', options: { filter: true, sort: true, }, },
        { label: 'HP', name: 'hp', options: { filter: true, sort: true, }, },
        { label: 'ATK', name: 'attack', options: { filter: true, sort: true, }, },
        { label: 'DEF', name: 'defense', options: { filter: true, sort: true, }, },
        { label: 'SPD', name: 'speed', options: { filter: true, sort: true, }, },
        { label: 'C RATE', name: 'crit_rate', options: { filter: true, sort: true, }, },
        { label: 'C DMG', name: 'crit_dmg', options: { filter: true, sort: true, }, },
        { label: 'RES', name: 'res', options: { filter: true, sort: true, }, },
        { label: 'ACC', name: 'acc', options: { filter: true, sort: true, }, },
        { label: 'E HP', name: 'eff_hp', options: { filter: true, sort: true, }, },
        { label: 'Eff', name: 'avg_eff_total', options: { filter: true, sort: true, }, },
        { 
            label: 'Runes', 
            name: 'runes', 
            options: { 
                filter: false, 
                sort: false, 
                customBodyRender: (value, tableMeta, updateValue) => (
                    value.length === 6 ? <CheckIcon /> : <ClearIcon />
                ),
            }, 
        },
        { 
            label: 'Runes RTA', 
            name: 'runes_rta', 
            options: { 
                filter: false, 
                sort: false, 
                customBodyRender: (value, tableMeta, updateValue) => (
                    value.length === 6 ? <CheckIcon /> : <ClearIcon />
                ),
            }, 
        },
        { 
            label: 'Artifacts', 
            name: 'artifacts', 
            options: { 
                filter: false, 
                sort: false, 
                customBodyRender: (value, tableMeta, updateValue) => (
                    value.length === 2 ? <CheckIcon /> : <ClearIcon />
                ),
            }, 
        },
        { 
            label: 'Artifacts RTA', 
            name: 'artifacts_rta', 
            options: { 
                filter: false, 
                sort: false, 
                customBodyRender: (value, tableMeta, updateValue) => (
                    value.length === 2 ? <CheckIcon /> : <ClearIcon />
                ),
            }, 
        },
    ]

    return (
        <div className={navbarOpen ? classes.fullWidthWithMenu : classes.fullWidthWithoutMenu}>
            <MUIDataTable
                title="Monsters"
                data={props.data.data}
                columns={columns}
                options={options}

            />
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
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