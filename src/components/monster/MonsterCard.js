import React, {useEffect, useState} from "react";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import {GenerateAPIHeaders, HandleAPIError} from '../../exts/Helpers';
import APIEndpoints from '../../exts/Endpoints';
import Loading from "../Loading";
import Error from "../Error";

export default function MonsterCard(props){
    const classes = useStyles();

    const [data, setData] = useState(null)
    const [err, setError] = useState(false);
    const [errorData, setErrorData] = useState({})


    useEffect(() => {
        axios.get(APIEndpoints.Monster + props.id + '/', {
            headers: GenerateAPIHeaders()
        })
        .then((resp) => {
            setData(resp.data);
            console.log(resp.data);
        })
        .catch((err_res) => {
            setErrorData(HandleAPIError(err_res));
            setError(true);
        })
    }, [])

    

    return (
        <div className={classes.root}>
            {err ? (<Error title={errorData.title} msg={errorData.msg} embed/>) : (
                 data === null ? <Loading embed /> : (
                    <Card className={classes.root}>
                        <CardHeader
                            avatar={<Avatar alt={data.base_monster.name} src={data.image} />}
                            title={data.base_monster.name}
                            subheader={data.base_monster.attribute + " " + data.base_monster.family}
                        />
                        <TableContainer component={CardContent}>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Stat</TableCell>
                                        <TableCell>Value</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>HP</TableCell>
                                        <TableCell>{data.hp}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Attack</TableCell>
                                        <TableCell>{data.attack}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Defense</TableCell>
                                        <TableCell>{data.defense}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Speed</TableCell>
                                        <TableCell>{data.speed}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Crit Rate</TableCell>
                                        <TableCell>{data.crit_rate}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Crit DMG</TableCell>
                                        <TableCell>{data.crit_dmg}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Accuracy</TableCell>
                                        <TableCell>{data.acc}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Resistance</TableCell>
                                        <TableCell>{data.res}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>E. HP</TableCell>
                                        <TableCell>{data.eff_hp}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        Runes: {data.runes}
                        Runes RTA: {data.runes_rta}
                        Artifacts: {data.artifacts}
                        Artifacts RTA: {data.artifacts_rta}
                    </Card>
                )
            )}
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minHeight: 300,
        minWidth: 300,
        width: 300,
        maxWidth: 300,
    },
  }));