import React from "react";
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

export default function ComparisonTableCellTooltip(props){
    return (
        <Tooltip
            title={
                <React.Fragment>
                    <Typography variant="body1">Value: {props.tableMeta.rowData[props.tableMeta.columnIndex + 2] ? props.tableMeta.rowData[props.tableMeta.columnIndex + 2] : '-'}</Typography>
                    <Typography variant="body1">Avg Diff: {props.tableMeta.rowData[props.tableMeta.columnIndex + 1] ? props.tableMeta.rowData[props.tableMeta.columnIndex + 1] : '-'}</Typography>
                </React.Fragment>
            }
        >
            {props.children}
        </Tooltip>
    )
}