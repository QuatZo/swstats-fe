import { makeStyles } from '@material-ui/core/styles';
import MUIDataTable from "mui-datatables";
import LazyLoad from 'react-lazyload';

import {useMenuOpen} from '../MenuOpenContext'

import ClearIcon from '@material-ui/icons/Clear';
import CheckIcon from '@material-ui/icons/Check';
import { Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

export default function MonsterReportTable(props){
    const classes = useStyles();
    const {navbarOpen} = useMenuOpen();
    
    const options = {
        filterType: 'multiselect',
        enableNestedDataAccess:	".",
        print: false,
        responsive: "standard",
        selectableRowsHeader: false,
        selectableRowsHideCheckboxes: true,
    }

    const columns = [
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
        { label: 'Skills', name: 'skills', options: { filter: true, sort: true, }, },
        { label: 'Sets', name: 'sets', options: { filter: true, sort: true, }, },
        { label: 'Rune 1', name: 'rune_1', options: { filter: true, sort: true, }, },
        { label: 'Rune 2', name: 'rune_2', options: { filter: true, sort: true, }, },
        { label: 'Rune 3', name: 'rune_3', options: { filter: true, sort: true, }, },
        { label: 'Rune 4', name: 'rune_4', options: { filter: true, sort: true, }, },
        { label: 'Rune 5', name: 'rune_5', options: { filter: true, sort: true, }, },
        { label: 'Rune 6', name: 'rune_6', options: { filter: true, sort: true, }, },
        { label: 'Artifact Type Main Stat', name: 'artifact_archetype', options: { filter: false, sort: false, }, },
        { label: 'Artifact Element Main Stat', name: 'artifact_attribute', options: { filter: false, sort: false, }, },
        { 
            label: 'Artifact Substats', 
            name: 'artifact_substats',
            options: { 
                 filter: false, 
                 sort: false, 
                 customBodyRender: (value, tableMeta, updateValue) => {
                     return value ? (
                         <div style={{display: "flex", flexWrap: "wrap", width: 300,}}>
                            {value.map(item => {
                            return <Typography variant="body2">{item}</Typography>
                        })}
                        </div>) : ''
                 },
            }, 
        },
        { 
            label: 'Locked', 
            name: 'locked', 
            options: { 
                filter: false, 
                sort: false, 
                customBodyRender: (value, tableMeta, updateValue) => (
                    value.length === 6 ? <CheckIcon /> : <ClearIcon />
                ),
            }, 
        },
        { 
            label: 'Storage', 
            name: 'storage', 
            options: { 
                filter: false, 
                sort: false, 
                customBodyRender: (value, tableMeta, updateValue) => (
                    value.length === 6 ? <CheckIcon /> : <ClearIcon />
                ),
            }, 
        },
        { 
            label: 'Transmog', 
            name: 'transmog', 
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
        <div className={navbarOpen ? classes.fullLazyLoad : classes.lazyLoad}>
            <LazyLoad 
                placeholder={<Skeleton variant="rect" className={classes.tableContainer} />}
                unmountIfInvisible
                debounce={100}
            >
                <div className={classes.tableContainer}>
                    <MUIDataTable
                        title="Raw Data"
                        data={props.data}
                        columns={columns}
                        options={options}

                    />
                </div>
            </LazyLoad>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    fullLazyLoad: {
        marginTop: 20,
        maxWidth: "calc(100vw - 300px)",
        width: "calc(100vw - 300px)",
        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;",
        marginBottom: 20,
    },
    lazyLoad: {
        marginTop: 20,
        maxWidth: "calc(100vw - 116px)",
        width: "calc(100vw - 116px)",
        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;",
        [theme.breakpoints.down('sm')]: {
            width: "calc(100vw - 20px)",
            maxWidth: "calc(100vw - 20px)",
        },
        marginBottom: 20,
    },
    tableContainer: {
        width: "100%",
        minHeight: "30vh",
    },
  }));