import { makeStyles } from '@material-ui/core/styles';
import MUIDataTable from "mui-datatables";
import Typography from '@material-ui/core/Typography';

import {useMenuOpen} from '../MenuOpenContext'

import ArtifactAvatarMini from '../artifact/ArtifactAvatarMini';

export default function ArtifactTable(props){
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
        { label: 'ID', name: 'id', options: { display: 'excluded', filter: false, sort: false, }, },
        { 
            label: 'Artifact', 
            name: 'image', 
            options: { 
                filter: false, 
                sort: false, 
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (<ArtifactAvatarMini 
                        key={'artifact-' + value.id}
                        data={{
                            id: tableMeta.rowData[tableMeta.columnIndex - 1],
                            image: value,
                            quality: tableMeta.rowData[tableMeta.columnIndex + 1],
                            quality_original: tableMeta.rowData[tableMeta.columnIndex + 2],
                            rtype: tableMeta.rowData[tableMeta.columnIndex + 3],
                            primary: tableMeta.rowData[tableMeta.columnIndex + 5],
                            primary_value: tableMeta.rowData[tableMeta.columnIndex + 6],
                        }}
                    />)
                },
            }, 
        },
        { label: 'Quality', name: 'quality', options: { display: 'excluded', filter: false, sort: false, }, },
        { label: 'Quality Original', name: 'quality_original', options: { display: 'excluded', filter: false, sort: false, }, },
        { label: 'Type', name: 'rtype', options: { filter: true, sort: true, }, },
        { label: 'Level', name: 'level', options: { filter: true, sort: true, }, },
        { label: 'Mainstat', name: 'primary', options: { filter: true, sort: true, }, },
        { label: 'Mainstat Value', name: 'primary_value', options: { filter: true, sort: true, }, },
        { 
            label: 'Substats', 
            name: 'substats', 
            options: { 
                filter: false, 
                sort: false,
                customBodyRender: (value, tableMeta, updateValue) => {
                    if(value === undefined || value === null){
                        return(null)
                    }
                    return (<div>
                        {value.map(item => {
                            return <Typography variant="body2">{item}</Typography>
                        })}
                    </div>)
                },
            }, 
        },
        { label: 'Efficiency', name: 'efficiency', options: { filter: true, sort: true, }, },
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