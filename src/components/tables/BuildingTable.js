import { makeStyles } from '@material-ui/core/styles';
import MUIDataTable from "mui-datatables";

import {useMenuOpen} from '../MenuOpenContext'


export default function BuildingTable(props){
    const classes = useStyles();
    const {navbarOpen} = useMenuOpen();
    
    const options = {
        filterType: 'multiselect',
        print: false,
        responsive: "standard",
        selectableRowsHeader: false,
        selectableRowsHideCheckboxes: true,
        count: props.data.length ?? 0,
        pagination: false,
    }

    const columns = [
        { label: 'Area', name: 'area', options: { filter: true, sort: true, }, },
        { label: 'Name', name: 'name', options: { filter: true, sort: true, }, },
        { label: 'Bonus', name: 'bonus', options: { filter: true, sort: true, }, },
        { label: 'Level', name: 'level', options: { filter: true, sort: true, }, },
        { label: 'Points to upgrade', name: 'nextUpgrade', options: { filter: true, sort: true, }, },
        { label: 'Days to upgrade', name: 'daysToUpgrade', options: { filter: true, sort: true, }, },
        { label: 'Points to max', name: 'pointsToMax', options: { filter: true, sort: true, }, },
        { label: 'Days to max', name: 'daysToMax', options: { filter: true, sort: true, }, },
    ]

    return (
        <div className={navbarOpen ? classes.fullWidthWithMenu : classes.fullWidthWithoutMenu}>
            <MUIDataTable
                title="Runes"
                data={props.data}
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