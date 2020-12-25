import React, { useState, useEffect } from 'react';
import axios from "axios";

import { makeStyles } from '@material-ui/core/styles';

import Loading from '../../components/Loading';
import LoadingAbsolute from '../../components/LoadingAbsolute';
import Error from '../../components/Error';
import APIEndpoints from '../../exts/Endpoints';
import {GenerateAPIHeaders, HandleAPIError} from '../../exts/Helpers';
import RadarChart from '../../components/chart/RadarChart';
import BarChart from '../../components/chart/BarChart';
import PieChart from '../../components/chart/PieChart';
import MonsterOverview from '../../components/monster/MonsterOverview';
import MonsterReportTable from '../../components/monster/MonsterReportTable';
import MonsterStatsTable from '../../components/monster/MonsterStatsTable';

import '../../assets/css/style.css'

export default function BotMonsters(props){
    const classes = useStyles();

    const [loadingAbsolute, setLoadingAbsolute] = useState(true);
    const [err, setError] = useState(false);
    const [errorData, setErrorData] = useState({title: "Unknown Error", msg: "Unknown error has occured. Please contact administrator!"})
    const [data, setData] = useState(null);
    const [taskId, setTaskId] = useState(null);

    useEffect(() => {
        if(!loadingAbsolute) setLoadingAbsolute(true);

        if(props.match.params.monsterId === null){
            setError(true);
            setLoadingAbsolute(false);
            return;
        }
        axios.get(APIEndpoints.ReportsGenerateMonster + props.match.params.monsterId + '/', {
            headers: GenerateAPIHeaders() 
        })
        .then((resp) => {
            setTaskId(resp.data.task_id);
        })
        .catch((err_res) => {
            setErrorData(HandleAPIError(err_res))
            
            setError(true);
            setLoadingAbsolute(false);
        })
    }, [props.match.params.monsterId])

    useEffect(() => {
        let axiosIntervalID = setInterval(() => {
            if(taskId){
                axios.get(APIEndpoints.Status + taskId + '/', {
                    headers: GenerateAPIHeaders()
                })
                .then((resp) => {
                    if(resp.data.status === 'SUCCESS'){
                        if(loadingAbsolute) setLoadingAbsolute(false);
                        setTaskId(null);
                        if(resp.data.step){
                            setData(resp.data.step);
                        }
                        else{
                            setErrorData({title: "Monster", msg: "Unknown monster!"})
                            setError(true);
                        }
                    }
                    if(resp.data.status === 'FAILURE'){
                        setErrorData(HandleAPIError(resp));
                        setError(true);
                        if(loadingAbsolute) setLoadingAbsolute(false);
                        setTaskId(null);
                    }
                })
                .catch((err_res) => {
                    setErrorData(HandleAPIError(err_res));
                    setError(true);
                    if(loadingAbsolute) setLoadingAbsolute(false);
                    setTaskId(null);
                })
            }
        }, 250)

        return (() => {
            if(axiosIntervalID) clearInterval(axiosIntervalID);
        })
    }, [taskId])


    return (
        <div className={classes.root}>
            { loadingAbsolute && <LoadingAbsolute />}
            { !loadingAbsolute && err && <Error title={errorData.title} msg={errorData.msg} />}
            { data && !err ? (
                <div className={classes.dataContainer}>
                    <MonsterOverview 
                        monster={data.monster}
                        family={data.family}
                        bot
                    />
                    <MonsterStatsTable
                        data={data.desc}
                    />
                    <BarChart 
                        title="Sets"
                        data={data.chart_data.vc_sets}
                        indexBy="name"
                        groupBy="index"
                        keys={['count']}
                        layout="horizontal"
                        longText
                    />
                    <BarChart 
                        title="Most Common Builds"
                        data={data.chart_data.vc_rune_builds}
                        indexBy="name"
                        groupBy="index"
                        keys={['count']}
                        layout="horizontal"
                        longText
                    />
                    <BarChart 
                        title="4-Set Distribution"
                        data={data.chart_data.vc_sets_4}
                        indexBy="name"
                        groupBy="index"
                        keys={['count']}
                        layout="vertical"
                    />
                    <RadarChart 
                        title="Rune Main Stat"
                        data={data.chart_data.vc_rune_slots}
                        indexBy="name"
                        keys={['Slot 2', 'Slot 4', 'Slot 6']}
                    />
                    <RadarChart 
                        title="Artifact Main Stat"
                        data={data.chart_data.vc_artifact_primary}
                        indexBy="name"
                        keys={['Element', 'Archetype']}
                    />
                    <BarChart 
                        title="Artifact Substats"
                        data={data.chart_data.vc_artifact_substats}
                        indexBy="name"
                        groupBy="index"
                        keys={['count']}
                        layout="horizontal"
                        veryLongText
                    />
                    <BarChart 
                        title="Speed"
                        data={data.chart_data.dist_speed}
                        indexBy="name"
                        groupBy="name"
                        keys={['count']}
                        layout="vertical"
                    />
                    <BarChart 
                        title="HP"
                        data={data.chart_data.dist_hp}
                        indexBy="name"
                        groupBy="name"
                        keys={['count']}
                        layout="vertical"
                    />
                    <BarChart 
                        title="Effective HP"
                        data={data.chart_data.dist_eff_hp}
                        indexBy="name"
                        groupBy="name"
                        keys={['count']}
                        layout="vertical"
                    />
                    <BarChart 
                        title="Attack"
                        data={data.chart_data.dist_attack}
                        indexBy="name"
                        groupBy="name"
                        keys={['count']}
                        layout="vertical"
                    />
                    <BarChart 
                        title="Defense"
                        data={data.chart_data.dist_defense}
                        indexBy="name"
                        groupBy="name"
                        keys={['count']}
                        layout="vertical"
                    />
                    <BarChart 
                        title="Critical Rate"
                        data={data.chart_data.dist_crit_rate}
                        indexBy="name"
                        groupBy="name"
                        keys={['count']}
                        layout="vertical"
                    />
                    <BarChart 
                        title="Critical Damage"
                        data={data.chart_data.dist_crit_dmg}
                        indexBy="name"
                        groupBy="name"
                        keys={['count']}
                        layout="vertical"
                    />
                    <BarChart 
                        title="Average Build Efficiency"
                        data={data.chart_data.dist_avg_eff_total}
                        indexBy="name"
                        groupBy="name"
                        keys={['count']}
                        layout="vertical"
                    />
                    <BarChart 
                        title="Resistance"
                        data={data.chart_data.dist_res}
                        indexBy="name"
                        groupBy="name"
                        keys={['count']}
                        layout="vertical"
                    />
                    <BarChart 
                        title="Accuracy"
                        data={data.chart_data.dist_acc}
                        indexBy="name"
                        groupBy="name"
                        keys={['count']}
                        layout="vertical"
                    />
                    <PieChart 
                        title="Skilled up"
                        data={data.chart_data.pie_skilled_up}
                        id="name"
                        value="count"
                    />
                    <PieChart 
                        title="Storage"
                        data={data.chart_data.pie_storage}
                        id="name"
                        value="count"
                    />
                    <PieChart 
                        title="Locked"
                        data={data.chart_data.pie_locked}
                        id="name"
                        value="count"
                    />
                    <PieChart 
                        title="Transmogrified"
                        data={data.chart_data.pie_transmog}
                        id="name"
                        value="count"
                    />
                    <MonsterReportTable
                        data={data.table}
                        bot
                    />
                </div>
            ) : null}
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "90%",
        margin: "auto",
        marginTop: 20,
        marginBottom: 10,
    },
    dataContainer: {
        display: "flex",
        flexWrap: "wrap",
    }
}));