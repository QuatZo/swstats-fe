import { makeStyles } from '@material-ui/core/styles';
import MUIDataTable from "mui-datatables";

import {useMenuOpen} from '../MenuOpenContext'

import RuneAvatarMini from '../rune/RuneAvatarMini';

export default function RuneTable(props){
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
            label: 'Rune', 
            name: 'image', 
            options: { 
                filter: false, 
                sort: false, 
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (<RuneAvatarMini 
                        data={value}
                    />)
                },
            }, 
        },
        { label: 'Level', name: 'upgrade_curr', options: { filter: true, sort: true, }, },
        { label: 'Mainstat', name: 'primary', options: { filter: true, sort: true, }, },
        { label: 'Mainstat Value', name: 'primary_value', options: { filter: true, sort: true, }, },
        { label: 'Innate', name: 'innate', options: { filter: true, sort: true, }, },
        { label: 'Innate Value', name: 'innate_value', options: { filter: true, sort: true, }, },
        { label: 'HP', name: 'substats.sub_hp', options: { filter: true, sort: true, }, },
        { label: 'HP F', name: 'substats.sub_hp_flat', options: { filter: true, sort: true, }, },
        { label: 'ATK', name: 'substats.sub_atk', options: { filter: true, sort: true, }, },
        { label: 'ATK F', name: 'substats.sub_atk_flat', options: { filter: true, sort: true, }, },
        { label: 'DEF', name: 'substats.sub_def', options: { filter: true, sort: true, }, },
        { label: 'DEF F', name: 'substats.sub_def_flat', options: { filter: true, sort: true, }, },
        { label: 'SPD', name: 'substats.sub_speed', options: { filter: true, sort: true, }, },
        { label: 'CRATE', name: 'substats.sub_crit_rate', options: { filter: true, sort: true, }, },
        { label: 'CDMG', name: 'substats.sub_crit_dmg', options: { filter: true, sort: true, }, },
        { label: 'RES', name: 'substats.sub_res', options: { filter: true, sort: true, }, },
        { label: 'ACC', name: 'substats.sub_acc', options: { filter: true, sort: true, }, },
        { label: 'Eff', name: 'efficiency', options: { filter: true, sort: true, }, },
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