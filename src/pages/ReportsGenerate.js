import React, { useState, useEffect } from 'react';
import axios from "axios";

import { makeStyles } from '@material-ui/core/styles';

import Loading from '../components/Loading';
import LoadingAbsolute from '../components/LoadingAbsolute';
import Error from '../components/Error';
import APIEndpoints from '../exts/Endpoints';
import {GenerateAPIHeaders, HandleAPIError} from '../exts/Helpers';
import SelectAuto from "../components/formfields/SelectAuto";
import RadarChart from '../components/chart/RadarChart';
import BarChart from '../components/chart/BarChart';
import PieChart from '../components/chart/PieChart';
import MonsterOverview from '../components/monster/MonsterOverview';
import MonsterReportTable from '../components/monster/MonsterReportTable';

import '../assets/css/style.css'

export default function ReportsGenerate() {
    const classes = useStyles();

    const [loading, setLoading] = useState(true);
    const [loadingAbsolute, setLoadingAbsolute] = useState(false);
    const [err, setError] = useState(false);
    const [errorData, setErrorData] = useState({title: "Unknown Error", msg: "Unknown error has occured. Please contact administrator!"})
    const [monsters, setMonsters] = useState([]);
    const [monster, setMonster] = useState(null);
    const [data, setData] = useState(null);
    const [taskId, setTaskId] = useState(null);

    useEffect(() => {
        axios.get(APIEndpoints.ReportsGenerate, {
            headers: GenerateAPIHeaders() 
        })
        .then((resp) => {
            setMonsters(resp.data);
        })
        .catch((err_res) => {
            setErrorData(HandleAPIError(err_res))
            
            setError(true);
        })
        .finally(() => {
            setLoading(false);
        })
    }, [])

    useEffect(() => {
        if(monster === null) return;
        setLoadingAbsolute(true);

        axios.get(APIEndpoints.ReportsGenerateMonster + monster.id + '/', {
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
    }, [monster])

    useEffect(() => {
        let axiosIntervalID = setInterval(() => {
            if(taskId){
                axios.get(APIEndpoints.Status + taskId + '/', {
                    headers: GenerateAPIHeaders()
                })
                .then((resp) => {
                    if(resp.data.status === 'SUCCESS'){
                        if(loading) setLoading(false);
                        if(loadingAbsolute) setLoadingAbsolute(false);
                        setTaskId(null);
                        console.log(resp.data.step);
                        setData(resp.data.step);
                    }
                    if(resp.data.status === 'FAILURE'){
                        setErrorData(HandleAPIError(resp));
                        setError(true);
                        if(loading) setLoading(false);
                        if(loadingAbsolute) setLoadingAbsolute(false);
                        setTaskId(null);
                    }
                })
                .catch((err_res) => {
                    setErrorData(HandleAPIError(err_res));
                    setError(true);
                    if(loading) setLoading(false);
                    if(loadingAbsolute) setLoadingAbsolute(false);
                    setTaskId(null);
                })
            }
        }, 250)

        return (() => {
            if(axiosIntervalID) clearInterval(axiosIntervalID);
        })
    }, [taskId])

    const handleSelectAutoChange = (e, newValue) => {
        setMonster(newValue);
    }

    return (
        <div className={classes.root}>
            { loading && <Loading />}
            { loadingAbsolute && <LoadingAbsolute />}
            { !loading && err && <Error title={errorData.title} msg={errorData.msg} />}
            { monsters.length && !err ? (
                <SelectAuto
                    name="monster"
                    title="Monsters (amount of 6*)"
                    data={monsters}
                    handleChange={handleSelectAutoChange}
                />
            ) : null}
            { data && !err ? (
                <div className={classes.dataContainer}>
                    <MonsterOverview 
                        monster={data.monster}
                        family={data.family}
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
                    />
                </div>
            ) : null}
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    dataContainer: {
        display: "flex",
        flexWrap: "wrap",
    }
}));