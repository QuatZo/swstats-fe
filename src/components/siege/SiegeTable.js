import { makeStyles } from '@material-ui/core/styles';
import MUIDataTable from "mui-datatables";
import Typography from '@material-ui/core/Typography';

import {useMenuOpen} from '../MenuOpenContext'

import MonsterAvatarTooltip from '../monster/MonsterAvatarTooltip';

export default function SiegeTable(props){
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
            label: 'Monsters', 
            name: 'monsters', 
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
        { 
            label: 'Leader', 
            name: 'leader', 
            options: { 
                filter: false, 
                sort: false, 
                customBodyRender: (value, tableMeta, updateValue) => (
                    <MonsterAvatarTooltip id={value.id} img_url={value.image}/>
                ),
            }, 
        },
        { label: 'Wins', name: 'win', options: { filter: true, sort: true, }, },
        { label: 'Loses', name: 'lose', options: { filter: true, sort: true, }, },
        { label: 'Success rate', name: 'ratio', options: { filter: true, sort: true, }, },
        { label: 'Rank', name: 'ranking', options: { filter: false, sort: false, }, },
    ]

    return (
        <div className={navbarOpen ? classes.fullWidthWithMenu : classes.fullWidthWithoutMenu}>
            <MUIDataTable
                title="Runes"
                data={props.data.data}
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