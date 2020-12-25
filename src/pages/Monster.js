import React, {useState, useEffect} from "react";
import axios from "axios";

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import APIEndpoints from "../exts/Endpoints";
import { GenerateAPIHeaders, HandleAPIError, } from "../exts/Helpers";
import Loading from '../components/Loading';
import Error from '../components/Error';
import { Grid } from "@material-ui/core";
import MonsterCard from "../components/monster/MonsterCard";
import RuneCard from "../components/rune/RuneCard";
import ArtifactCard from "../components/artifact/ArtifactCard";

export default function Monster(props){
    const classes = useStyles();

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [err, setError] = useState(false);
    const [errorData, setErrorData] = useState({title: "Unknown Error", msg: "Unknown error has occured. Please contact administrator!"})

    useEffect(() => {
        if(!props.match.params.monsterId){
            setErrorData({title: "Invalid URL", msg: "No Monster ID given, make sure URL is correct"})
            setError(true)
        }
        axios.get(APIEndpoints.Monster + props.match.params.monsterId + '/', {
            headers: GenerateAPIHeaders()
        })
        .then((resp) => {
            if(loading) setLoading(false);
            setData(resp.data)
        })
        .catch((err_res) => {
            setErrorData(HandleAPIError(err_res))
            setError(true);
            if(loading) setLoading(false);
        })
    }, [props.match.params.monsterId])

    return (
        <>
            { loading && <Loading />}
            { !loading && err && <Error title={errorData.title} msg={errorData.msg} />}
            { !loading && !err && data ? (
                <div className={classes.root}>
                    <Grid container>
                        <Grid item md={4} xs={12}>
                            <MonsterCard 
                                data={data}
                            />
                        </Grid>
                        <Grid item md={8} xs={12}>
                            <Typography variant="h4" color="secondary" align="center">Runes</Typography>
                            {data.runes.length ? (
                                <Grid container>
                                    {data.runes.map(rune => (
                                        <Grid item md={4} xs={12}>
                                            <RuneCard data={rune} />
                                        </Grid>
                                    ))}
                                </Grid>
                            ) : <Typography variant="h6" align="center">No equipped runes </Typography>}
                            <Typography variant="h4" color="secondary" align="center">Artifacts</Typography>
                            {data.artifacts.length ? (
                                <Grid container>
                                    {data.artifacts.map(artifact => (
                                        <Grid item md={6} xs={12}>
                                            <ArtifactCard data={artifact} />
                                        </Grid>
                                    ))}
                                </Grid>
                            ) : <Typography variant="h6" align="center">No equipped artifacts </Typography>}
                            
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <Typography variant="h4" color="secondary" align="center">Runes (RTA)</Typography>
                            {data.runes_rta.length ? (
                                <Grid container>
                                    {data.runes_rta.map(rune => (
                                        <Grid item md={4} xs={12}>
                                            <RuneCard data={rune} />
                                        </Grid>
                                    ))}
                                </Grid>
                            ) : <Typography variant="h6" align="center">No equipped runes (RTA)</Typography>}
                            <Typography variant="h4" color="secondary" align="center">Artifacts (RTA)</Typography>
                            {data.artifacts_rta.length ? (
                                <Grid container>
                                    {data.artifacts_rta.map(artifact => (
                                        <Grid item md={6} xs={12}>
                                            <ArtifactCard data={artifact} />
                                        </Grid>
                                    ))}
                                </Grid>
                            ) : <Typography variant="h6" align="center">No equipped artifacts (RTA)</Typography>}
                            
                        </Grid>
                    </Grid>
                </div>
            ) : null}
        </>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        marginBottom: 10,
    },
}));