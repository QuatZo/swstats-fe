import { Typography } from '@material-ui/core';

import ComparisonTable from './ComparisonTable';
import ComparisonTableCellTooltip from './ComparisonTableCellTooltip';
import RuneAvatarMini from '../rune/RuneAvatarMini';

export default function RuneComparisonTable(props){
    const columns = [
        { 
            label: 'Rune', 
            name: 'img_url', 
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
        { label: 'Mainstat', name: 'mainstat', options: { filter: true, sort: true, }, },
        { 
            label: 'HP', 
            name: 'rank.sub_hp.top', 
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
            name: 'rank.sub_hp.avg', 
            options: { 
                display: 'excluded',
                filter: false,
                sort: false,
            }, 
        },
        { 
            name: 'rank.sub_hp.val', 
            options: { 
                display: 'excluded',
                filter: false,
                sort: false,
            }, 
        },
        { 
            label: 'HP F', 
            name: 'rank.sub_hp_flat.top', 
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
            name: 'rank.sub_hp_flat.avg', 
            options: { 
                display: 'excluded',
                filter: false,
                sort: false,
            }, 
        },
        { 
            name: 'rank.sub_hp_flat.val', 
            options: { 
                display: 'excluded',
                filter: false,
                sort: false,
            }, 
        },
        { 
            label: 'ATK', 
            name: 'rank.sub_atk.top', 
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
            name: 'rank.sub_atk.avg', 
            options: { 
                display: 'excluded',
                filter: false,
                sort: false,
            }, 
        },
        { 
            name: 'rank.sub_atk.val', 
            options: { 
                display: 'excluded',
                filter: false,
                sort: false,
            }, 
        },
        { 
            label: 'ATK F', 
            name: 'rank.sub_atk_flat.top', 
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
            name: 'rank.sub_atk_flat.avg', 
            options: { 
                display: 'excluded',
                filter: false,
                sort: false,
            }, 
        },
        { 
            name: 'rank.sub_atk_flat.val', 
            options: { 
                display: 'excluded',
                filter: false,
                sort: false,
            }, 
        },
        { 
            label: 'DEF', 
            name: 'rank.sub_def.top', 
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
            name: 'rank.sub_def.avg', 
            options: { 
                display: 'excluded',
                filter: false,
                sort: false,
            }, 
        },
        { 
            name: 'rank.sub_def.val', 
            options: { 
                display: 'excluded',
                filter: false,
                sort: false,
            }, 
        },
        { 
            label: 'DEF F', 
            name: 'rank.sub_def_flat.top', 
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
            name: 'rank.sub_def_flat.avg', 
            options: { 
                display: 'excluded',
                filter: false,
                sort: false,
            }, 
        },
        { 
            name: 'rank.sub_def_flat.val', 
            options: { 
                display: 'excluded',
                filter: false,
                sort: false,
            }, 
        },
        { 
            label: 'SPD', 
            name: 'rank.sub_speed.top', 
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
            name: 'rank.sub_speed.avg', 
            options: { 
                display: 'excluded',
                filter: false,
                sort: false,
            }, 
        },
        { 
            name: 'rank.sub_speed.val', 
            options: { 
                display: 'excluded',
                filter: false,
                sort: false,
            }, 
        },
        { 
            label: 'CRATE', 
            name: 'rank.sub_crit_rate.top', 
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
            name: 'rank.sub_crit_rate.avg', 
            options: { 
                display: 'excluded',
                filter: false,
                sort: false,
            }, 
        },
        { 
            name: 'rank.sub_crit_rate.val', 
            options: { 
                display: 'excluded',
                filter: false,
                sort: false,
            }, 
        },
        { 
            label: 'CDMG', 
            name: 'rank.sub_crit_dmg.top', 
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
            name: 'rank.sub_crit_dmg.avg', 
            options: { 
                display: 'excluded',
                filter: false,
                sort: false,
            }, 
        },
        { 
            name: 'rank.sub_crit_dmg.val', 
            options: { 
                display: 'excluded',
                filter: false,
                sort: false,
            }, 
        },
        { 
            label: 'ACC', 
            name: 'rank.sub_acc.top', 
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
            name: 'rank.sub_acc.avg', 
            options: { 
                display: 'excluded',
                filter: false,
                sort: false,
            }, 
        },
        { 
            name: 'rank.sub_acc.val', 
            options: { 
                display: 'excluded',
                filter: false,
                sort: false,
            }, 
        },
        { 
            label: 'RES', 
            name: 'rank.sub_res.top', 
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
            name: 'rank.sub_res.avg', 
            options: { 
                display: 'excluded',
                filter: false,
                sort: false,
            }, 
        },
        { 
            name: 'rank.sub_res.val', 
            options: { 
                display: 'excluded',
                filter: false,
                sort: false,
            }, 
        },
        { 
            label: 'EFF', 
            name: 'rank.efficiency.top', 
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
            name: 'rank.efficiency.avg', 
            options: { 
                display: 'excluded',
                filter: false,
                sort: false,
            }, 
        },
        { 
            name: 'rank.efficiency.val', 
            options: { 
                display: 'excluded',
                filter: false,
                sort: false,
            }, 
        },
    ]

    return (
        <ComparisonTable 
            title={"Top % Runes (grouped by rune set, slot and main stat, shows % of better builds)"}
            data={props.data}
            columns={columns}
        />
    )
}