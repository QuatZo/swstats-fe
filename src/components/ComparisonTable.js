import { makeStyles } from '@material-ui/core/styles';
import MUIDataTable from "mui-datatables";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

import {useMenuOpen} from './MenuOpenContext'
import { CallReceived } from '@material-ui/icons';
import { useEffect } from 'react';

export default function ComparisonTable(props){
    const classes = useStyles();
    const {navbarOpen} = useMenuOpen();

    const monsterColumns = [
        { label: 'Monster', name: 'monster.name', options: { filter: true, sort: true, }, }, // Custom component here
        { label: 'HP Value', name: 'monster.hp', options: { filter: true, sort: true, }, },
        { label: 'HP Top', name: 'rank.hp.top', options: { filter: true, sort: true, }, },
        { label: 'HP Average', name: 'rank.hp.avg', options: { filter: true, sort: true, }, },
        { label: 'ATK Value', name: 'monster.attack', options: { filter: true, sort: true, }, },
        { label: 'ATK Top', name: 'rank.attack.top', options: { filter: true, sort: true, }, },
        { label: 'ATK Average', name: 'rank.attack.avg', options: { filter: true, sort: true, }, },
        { label: 'DEF Value', name: 'monster.defense', options: { filter: true, sort: true, }, },
        { label: 'DEF Top', name: 'rank.defense.top', options: { filter: true, sort: true, }, },
        { label: 'DEF Average', name: 'rank.defense.avg', options: { filter: true, sort: true, }, },
        { label: 'SPD Value', name: 'monster.speed', options: { filter: true, sort: true, }, },
        { label: 'SPD Top', name: 'rank.speed.top', options: { filter: true, sort: true, }, },
        { label: 'SPD Average', name: 'rank.speed.avg', options: { filter: true, sort: true, }, },
        { label: 'CRATE Value', name: 'monster.crit_rate', options: { filter: true, sort: true, }, },
        { label: 'CRATE Top', name: 'rank.crit_rate.top', options: { filter: true, sort: true, }, },
        { label: 'CRATE Average', name: 'rank.crit_rate.avg', options: { filter: true, sort: true, }, },
        { label: 'CDMG Value', name: 'monster.crit_dmg', options: { filter: true, sort: true, }, },
        { label: 'CDMG Top', name: 'rank.crit_dmg.top', options: { filter: true, sort: true, }, },
        { label: 'CDMG Average', name: 'rank.crit_dmg.avg', options: { filter: true, sort: true, }, },
        { label: 'ACC Value', name: 'monster.acc', options: { filter: true, sort: true, }, },
        { label: 'ACC Top', name: 'rank.acc.top', options: { filter: true, sort: true, }, },
        { label: 'ACC Average', name: 'rank.acc.avg', options: { filter: true, sort: true, }, },
        { label: 'RES Value', name: 'monster.res', options: { filter: true, sort: true, }, },
        { label: 'RES Top', name: 'rank.res.top', options: { filter: true, sort: true, }, },
        { label: 'RES Average', name: 'rank.res.avg', options: { filter: true, sort: true, }, },
        { label: 'E.HP Value', name: 'monster.eff_hp', options: { filter: true, sort: true, }, },
        { label: 'E.HP Top', name: 'rank.eff_hp.top', options: { filter: true, sort: true, }, },
        { label: 'E.HPHP Average', name: 'rank.eff_hp.avg', options: { filter: true, sort: true, }, },
        { label: 'EFF Value', name: 'monster.avg_eff_total', options: { filter: true, sort: true, }, },
        { label: 'EFF Top', name: 'rank.avg_eff_total.top', options: { filter: true, sort: true, }, },
        { label: 'EFF Average', name: 'rank.avg_eff_total.avg', options: { filter: true, sort: true, }, },
    ]
    const runesColumns = []
    
    const options = {
        filterType: 'multiselect',
        enableNestedDataAccess:	".",
        print: false,
        responsive: "vertical",
        selectableRowsHeader: false,
        selectableRowsHideCheckboxes: true,
    }

    return (
        <div className={navbarOpen ? classes.fullWidthWithMenu : classes.fullWidthWithoutMenu}>
            <MUIDataTable
                title={props.title}
                data={props.data}
                columns={props.title.includes("Monsters") ? monsterColumns : runesColumns}
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
        },
    },
  }));