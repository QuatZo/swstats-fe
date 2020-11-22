import { Typography } from '@material-ui/core';

import ComparisonTable from './ComparisonTable';
import ComparisonTableCellTooltip from './ComparisonTableCellTooltip';

import MonsterAvatarTooltip from '../monster/MonsterAvatarTooltip';

export default function MonsterComparisonTable(props){
    const columns = [
        { 
            label: 'Monster', 
            name: 'id', 
            options: { 
                filter: true, 
                sort: true, 
                customBodyRender: (value, tableMeta, updateValue) => (
                    <MonsterAvatarTooltip id={value} img_url={tableMeta.rowData[tableMeta.columnIndex + 1]}/>
                ),
            }, 
        },
        {
            name: 'img_url',
            options: {
                display: 'excluded',
                filter: false,
                sort: false,
            }
        },
        { 
            label: 'HP', 
            name: 'rank.hp.top', 
            options: { 
                filter: true, 
                sort: true, 
                customBodyRender: (value, tableMeta, updateValue) => (
                    <ComparisonTableCellTooltip tableMeta={tableMeta}>
                        { value === 0 ? (
                            <Typography variant="body2" color="secondary">Best</Typography>
                        ) : 
                        (
                            <Typography variant="body2">{value}</Typography>
                        )
                        }
                    </ComparisonTableCellTooltip>
                ),
                sortCompare: (order) => {
                    return (obj1, obj2) => {
                        let order_b = (order === 'asc' ? 1 : -1)
                        if(obj1.data === "Best") return -1 * order_b
                        if(obj2.data === "Best") return 1 * order_b

                        let val1 = parseFloat(obj1.data, 10);
                        let val2 = parseFloat(obj2.data, 10);
                        if(isNaN(val1)) return 1 * order_b
                        if(isNaN(val2)) return -1 * order_b
                        return (val1 - val2) * order_b;
                    };
                },
            }, 
        },
        { 
            name: 'rank.hp.avg', 
            options: { 
                display: 'excluded',
                filter: false,
                sort: false,
            }, 
        },
        { 
            name: 'rank.hp.val', 
            options: { 
                display: 'excluded',
                filter: false,
                sort: false,
            }, 
        },
        { 
            label: 'ATK', 
            name: 'rank.attack.top', 
            options: { 
                filter: true, 
                sort: true, 
                customBodyRender: (value, tableMeta, updateValue) => (
                    <ComparisonTableCellTooltip tableMeta={tableMeta}>
                        { value === 0 ? (
                            <Typography variant="body2" color="secondary">Best</Typography>
                        ) : 
                        (
                            <Typography variant="body2">{value}</Typography>
                        )
                        }
                    </ComparisonTableCellTooltip>
                ),
                sortCompare: (order) => {
                    return (obj1, obj2) => {
                        let order_b = (order === 'asc' ? 1 : -1)
                        if(obj1.data === "Best") return -1 * order_b
                        if(obj2.data === "Best") return 1 * order_b

                        let val1 = parseFloat(obj1.data, 10);
                        let val2 = parseFloat(obj2.data, 10);
                        if(isNaN(val1)) return 1 * order_b
                        if(isNaN(val2)) return -1 * order_b
                        return (val1 - val2) * order_b;
                    };
                },
            }, 
        },
        { 
            name: 'rank.attack.avg', 
            options: { 
                display: 'excluded',
                filter: false,
                sort: false,
            }, 
        },
        { 
            name: 'rank.attack.val', 
            options: { 
                display: 'excluded',
                filter: false,
                sort: false,
            }, 
        },
        { 
            label: 'DEF', 
            name: 'rank.defense.top', 
            options: { 
                filter: true, 
                sort: true, 
                customBodyRender: (value, tableMeta, updateValue) => (
                    <ComparisonTableCellTooltip tableMeta={tableMeta}>
                        { value === 0 ? (
                            <Typography variant="body2" color="secondary">Best</Typography>
                        ) : 
                        (
                            <Typography variant="body2">{value}</Typography>
                        )
                        }
                    </ComparisonTableCellTooltip>
                ),
                sortCompare: (order) => {
                    return (obj1, obj2) => {
                        let order_b = (order === 'asc' ? 1 : -1)
                        if(obj1.data === "Best") return -1 * order_b
                        if(obj2.data === "Best") return 1 * order_b

                        let val1 = parseFloat(obj1.data, 10);
                        let val2 = parseFloat(obj2.data, 10);
                        if(isNaN(val1)) return 1 * order_b
                        if(isNaN(val2)) return -1 * order_b
                        return (val1 - val2) * order_b;
                    };
                },
            }, 
        },
        { 
            name: 'rank.defense.avg', 
            options: { 
                display: 'excluded',
                filter: false,
                sort: false,
            }, 
        },
        { 
            name: 'rank.defense.val', 
            options: { 
                display: 'excluded',
                filter: false,
                sort: false,
            }, 
        },
        { 
            label: 'SPD', 
            name: 'rank.speed.top', 
            options: { 
                filter: true, 
                sort: true, 
                customBodyRender: (value, tableMeta, updateValue) => (
                    <ComparisonTableCellTooltip tableMeta={tableMeta}>
                        { value === 0 ? (
                            <Typography variant="body2" color="secondary">Best</Typography>
                        ) : 
                        (
                            <Typography variant="body2">{value}</Typography>
                        )
                        }
                    </ComparisonTableCellTooltip>
                ),
                sortCompare: (order) => {
                    return (obj1, obj2) => {
                        let order_b = (order === 'asc' ? 1 : -1)
                        if(obj1.data === "Best") return -1 * order_b
                        if(obj2.data === "Best") return 1 * order_b

                        let val1 = parseFloat(obj1.data, 10);
                        let val2 = parseFloat(obj2.data, 10);
                        if(isNaN(val1)) return 1 * order_b
                        if(isNaN(val2)) return -1 * order_b
                        return (val1 - val2) * order_b;
                    };
                },
            }, 
        },
        { 
            name: 'rank.speed.avg', 
            options: { 
                display: 'excluded',
                filter: false,
                sort: false,
            }, 
        },
        { 
            name: 'rank.speed.val', 
            options: { 
                display: 'excluded',
                filter: false,
                sort: false,
            }, 
        },
        { 
            label: 'CRATE', 
            name: 'rank.crit_rate.top', 
            options: { 
                filter: true, 
                sort: true, 
                customBodyRender: (value, tableMeta, updateValue) => (
                    <ComparisonTableCellTooltip tableMeta={tableMeta}>
                        { value === 0 ? (
                            <Typography variant="body2" color="secondary">Best</Typography>
                        ) : 
                        (
                            <Typography variant="body2">{value}</Typography>
                        )
                        }
                    </ComparisonTableCellTooltip>
                ),
                sortCompare: (order) => {
                    return (obj1, obj2) => {
                        let order_b = (order === 'asc' ? 1 : -1)
                        if(obj1.data === "Best") return -1 * order_b
                        if(obj2.data === "Best") return 1 * order_b

                        let val1 = parseFloat(obj1.data, 10);
                        let val2 = parseFloat(obj2.data, 10);
                        if(isNaN(val1)) return 1 * order_b
                        if(isNaN(val2)) return -1 * order_b
                        return (val1 - val2) * order_b;
                    };
                },
            }, 
        },
        { 
            name: 'rank.crit_rate.avg', 
            options: { 
                display: 'excluded',
                filter: false,
                sort: false,
            }, 
        },
        { 
            name: 'rank.crit_rate.val', 
            options: { 
                display: 'excluded',
                filter: false,
                sort: false,
            }, 
        },
        { 
            label: 'CDMG', 
            name: 'rank.crit_dmg.top', 
            options: { 
                filter: true, 
                sort: true, 
                customBodyRender: (value, tableMeta, updateValue) => (
                    <ComparisonTableCellTooltip tableMeta={tableMeta}>
                        { value === 0 ? (
                            <Typography variant="body2" color="secondary">Best</Typography>
                        ) : 
                        (
                            <Typography variant="body2">{value}</Typography>
                        )
                        }
                    </ComparisonTableCellTooltip>
                ),
                sortCompare: (order) => {
                    return (obj1, obj2) => {
                        let order_b = (order === 'asc' ? 1 : -1)
                        if(obj1.data === "Best") return -1 * order_b
                        if(obj2.data === "Best") return 1 * order_b

                        let val1 = parseFloat(obj1.data, 10);
                        let val2 = parseFloat(obj2.data, 10);
                        if(isNaN(val1)) return 1 * order_b
                        if(isNaN(val2)) return -1 * order_b
                        return (val1 - val2) * order_b;
                    };
                },
            }, 
        },
        { 
            name: 'rank.crit_dmg.avg', 
            options: { 
                display: 'excluded',
                filter: false,
                sort: false,
            }, 
        },
        { 
            name: 'rank.crit_dmg.val', 
            options: { 
                display: 'excluded',
                filter: false,
                sort: false,
            }, 
        },
        { 
            label: 'ACC', 
            name: 'rank.acc.top', 
            options: { 
                filter: true, 
                sort: true, 
                customBodyRender: (value, tableMeta, updateValue) => (
                    <ComparisonTableCellTooltip tableMeta={tableMeta}>
                        { value === 0 ? (
                            <Typography variant="body2" color="secondary">Best</Typography>
                        ) : 
                        (
                            <Typography variant="body2">{value}</Typography>
                        )
                        }
                    </ComparisonTableCellTooltip>
                ),
                sortCompare: (order) => {
                    return (obj1, obj2) => {
                        let order_b = (order === 'asc' ? 1 : -1)
                        if(obj1.data === "Best") return -1 * order_b
                        if(obj2.data === "Best") return 1 * order_b

                        let val1 = parseFloat(obj1.data, 10);
                        let val2 = parseFloat(obj2.data, 10);
                        if(isNaN(val1)) return 1 * order_b
                        if(isNaN(val2)) return -1 * order_b
                        return (val1 - val2) * order_b;
                    };
                },
            }, 
        },
        { 
            name: 'rank.acc.avg', 
            options: { 
                display: 'excluded',
                filter: false,
                sort: false,
            }, 
        },
        { 
            name: 'rank.acc.val', 
            options: { 
                display: 'excluded',
                filter: false,
                sort: false,
            }, 
        },
        { 
            label: 'RES', 
            name: 'rank.res.top', 
            options: { 
                filter: true, 
                sort: true, 
                customBodyRender: (value, tableMeta, updateValue) => (
                    <ComparisonTableCellTooltip tableMeta={tableMeta}>
                        { value === 0 ? (
                            <Typography variant="body2" color="secondary">Best</Typography>
                        ) : 
                        (
                            <Typography variant="body2">{value}</Typography>
                        )
                        }
                    </ComparisonTableCellTooltip>
                ),
                sortCompare: (order) => {
                    return (obj1, obj2) => {
                        let order_b = (order === 'asc' ? 1 : -1)
                        if(obj1.data === "Best") return -1 * order_b
                        if(obj2.data === "Best") return 1 * order_b

                        let val1 = parseFloat(obj1.data, 10);
                        let val2 = parseFloat(obj2.data, 10);
                        if(isNaN(val1)) return 1 * order_b
                        if(isNaN(val2)) return -1 * order_b
                        return (val1 - val2) * order_b;
                    };
                },
            }, 
        },
        { 
            name: 'rank.res.avg', 
            options: { 
                display: 'excluded',
                filter: false,
                sort: false,
            }, 
        },
        { 
            name: 'rank.res.val', 
            options: { 
                display: 'excluded',
                filter: false,
                sort: false,
            }, 
        },
        { 
            label: 'EHP', 
            name: 'rank.eff_hp.top', 
            options: { 
                filter: true, 
                sort: true, 
                customBodyRender: (value, tableMeta, updateValue) => (
                    <ComparisonTableCellTooltip tableMeta={tableMeta}>
                        { value === 0 ? (
                            <Typography variant="body2" color="secondary">Best</Typography>
                        ) : 
                        (
                            <Typography variant="body2">{value}</Typography>
                        )
                        }
                    </ComparisonTableCellTooltip>
                ),
                sortCompare: (order) => {
                    return (obj1, obj2) => {
                        let order_b = (order === 'asc' ? 1 : -1)
                        if(obj1.data === "Best") return -1 * order_b
                        if(obj2.data === "Best") return 1 * order_b

                        let val1 = parseFloat(obj1.data, 10);
                        let val2 = parseFloat(obj2.data, 10);
                        if(isNaN(val1)) return 1 * order_b
                        if(isNaN(val2)) return -1 * order_b
                        return (val1 - val2) * order_b;
                    };
                },
            }, 
        },
        { 
            name: 'rank.eff_hp.avg', 
            options: { 
                display: 'excluded',
                filter: false,
                sort: false,
            }, 
        },
        { 
            name: 'rank.eff_hp.val', 
            options: { 
                display: 'excluded',
                filter: false,
                sort: false,
            }, 
        },
        { 
            label: 'EFF', 
            name: 'rank.avg_eff_total.top', 
            options: { 
                filter: true, 
                sort: true, 
                customBodyRender: (value, tableMeta, updateValue) => (
                    <ComparisonTableCellTooltip tableMeta={tableMeta}>
                        { value === 0 ? (
                            <Typography variant="body2" color="secondary">Best</Typography>
                        ) : 
                        (
                            <Typography variant="body2">{value}</Typography>
                        )
                        }
                    </ComparisonTableCellTooltip>
                ),
                sortCompare: (order) => {
                    return (obj1, obj2) => {
                        let order_b = (order === 'asc' ? 1 : -1)
                        if(obj1.data === "Best") return -1 * order_b
                        if(obj2.data === "Best") return 1 * order_b

                        let val1 = parseFloat(obj1.data, 10);
                        let val2 = parseFloat(obj2.data, 10);
                        if(isNaN(val1)) return 1 * order_b
                        if(isNaN(val2)) return -1 * order_b
                        return (val1 - val2) * order_b;
                    };
                },
            }, 
        },
        { 
            name: 'rank.avg_eff_total.avg', 
            options: { 
                display: 'excluded',
                filter: false,
                sort: false,
            }, 
        },
        { 
            name: 'rank.avg_eff_total.val', 
            options: { 
                display: 'excluded',
                filter: false,
                sort: false,
            }, 
        },
    ]

    return (
        <ComparisonTable 
            title={"Top % Monsters (grouped by base monster, shows % of better builds)"}
            data={props.data}
            columns={columns}
        />
    )
}