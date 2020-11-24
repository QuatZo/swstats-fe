import React, {useEffect, useState} from "react";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import NumericLabel from 'react-pretty-numbers';

import {GenerateAPIHeaders, HandleAPIError} from '../../exts/Helpers';
import APIEndpoints from '../../exts/Endpoints';
import Loading from "../Loading";
import Error from "../Error";
import RuneAvatarMini from "../rune/RuneAvatarMini";
import ArtifactAvatarMini from "../artifact/ArtifactAvatarMini";
import { Typography } from "@material-ui/core";

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
            console.log(resp.data);
            setData(resp.data);
        })
        .catch((err_res) => {
            setErrorData(HandleAPIError(err_res));
            setError(true);
        })
    }, [])

    const PrettyTableCell = (val) => {
        const params={
            wholenumber: "ceil",
            justification: "L",
        }
        return (
            <TableCell>
                <NumericLabel
                    params={params}
                >
                    {val.children}
                </NumericLabel>
                {val.percentage ? "%" : null}
            </TableCell>
        )
    }
    
    const RuneRow = (runes) => {
        if (runes.children.length === 0) return null;

        return (
            <div className={classes.runeRow}>
                <Typography variant="subtitle1" color="secondary">Runes {runes.rta ? "RTA" : null }</Typography>
                <div className={classes.runes}>
                {runes.children.map(rune => (
                    <RuneAvatarMini 
                        data={rune}
                    />
                ))}
                </div>
            </div>
        )
    }
    
    const ArtifactRow = (artifacts) => {
        if (artifacts.children.length === 0) return null;

        return (
            <div className={classes.runeRow}>
                <Typography variant="subtitle1" color="secondary">Artifacts {artifacts.rta ? "RTA" : null }</Typography>
                <div className={classes.runes}>
                {artifacts.children.map(artifact => (
                    <ArtifactAvatarMini 
                        data={artifact}
                    />
                ))}
                </div>
            </div>
        )
    }

    return (
        <div className={classes.root}>
            {err ? (<Error title={errorData.title} msg={errorData.msg} embed/>) : (
                 data === null ? <Loading embed /> : (
                    <Card className={classes.card}>
                        <CardHeader
                            avatar={<Avatar alt={data.base_monster.name} src={data.image} />}
                            action={<Typography variant="body2" color="secondary">{data.level}</Typography>}
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
                                        <PrettyTableCell>{data.hp}</PrettyTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Attack</TableCell>
                                        <PrettyTableCell>{data.attack}</PrettyTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Defense</TableCell>
                                        <PrettyTableCell>{data.defense}</PrettyTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Speed</TableCell>
                                        <PrettyTableCell>{data.speed}</PrettyTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Crit Rate</TableCell>
                                        <PrettyTableCell percentage>{data.crit_rate}</PrettyTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Crit DMG</TableCell>
                                        <PrettyTableCell percentage>{data.crit_dmg}</PrettyTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Accuracy</TableCell>
                                        <PrettyTableCell percentage>{data.acc}</PrettyTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Resistance</TableCell>
                                        <PrettyTableCell percentage>{data.res}</PrettyTableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>E. HP</TableCell>
                                        <PrettyTableCell>{data.eff_hp}</PrettyTableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <RuneRow>{data.runes}</RuneRow>
                        <RuneRow rta>{data.runes_rta}</RuneRow>
                        <ArtifactRow>{data.artifacts}</ArtifactRow>
                        <ArtifactRow rta>{data.artifacts_rta}</ArtifactRow>
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
        maxWidth: 350,
    },
    card: {
        minHeight: 300,
        minWidth: 350,
        width: 350,
        maxWidth: 350,
    },
    runeRow: {
        margin: "0px 16px",
        width: "calc(100% - 32px)",
    },
    runes: {
        display: "flex",
        justifyContent: "left",
    },
  }));