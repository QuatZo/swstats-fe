import React, {useState, useEffect} from "react";
import axios from "axios";
import {useLocation} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import RadarChart from '../components/chart/RadarChart';

import APIEndpoints from "../exts/Endpoints";
import { GenerateAPIHeaders, HandleAPIError, ParseQueryToObject, ParseObjectToQuery, CleanObject  } from "../exts/Helpers";
import Loading from '../components/Loading';
import LoadingAbsolute from '../components/LoadingAbsolute';
import Error from '../components/Error';
import MonsterFilterForm from "../components/monster/MonsterFilterForm";
import MonsterTable from "../components/monster/MonsterTable";

export default function Monsters(){
    const initFilters = {
        base_monster__name: "",
        stars: [],
        base_monster__base_class: [],
        base_monster__attribute: [],
        base_monster__archetype: [],
        base_monster__awaken: [],
        base_monster__family: [],
        hp: [null, null],
        attack: [null, null],
        defense: [null, null],
        speed: [null, null],
        res: [null, null],
        acc: [null, null],
        crit_rate: [null, null],
        crit_dmg: [null, null],
        eff_hp: [null, null],
        avg_eff_total: [null, null],
        locked: '',
    }
    const classes = useStyles();
    const location = useLocation()

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loadingAbsolute, setLoadingAbsolute] = useState(false);
    const [taskId, setTaskId] = useState(null);
    const [err, setError] = useState(false);
    const [errorData, setErrorData] = useState({title: "Unknown Error", msg: "Unknown error has occured. Please contact administrator!"})
    const [filters, setFilters] = useState(initFilters)

    function GetMonstersData(kwargs){
        const qs = require('query-string')
        if(kwargs.filters){
            setLoadingAbsolute(true);
        }
        let options = {
            headers: GenerateAPIHeaders(),
        }
        if(kwargs.params) {
            options = {
                headers: GenerateAPIHeaders(),
                params: kwargs.params,
                paramsSerializer: params => {
                    return qs.stringify(params)
                }
            }
        }
        
        axios.get(APIEndpoints.Monsters, options)
        .then((resp) => {
            setTaskId(resp.data.task_id)
        })
        .catch((err_res) => {
            setErrorData(HandleAPIError(err_res))
            setError(true);
            if(loading) setLoading(false);
            if(loadingAbsolute) setLoadingAbsolute(false);
        })

    }

    useEffect(() => {
        const f = ParseQueryToObject(location.search, filters)
        setFilters(f)
        const clean = CleanObject(f)
        GetMonstersData({params: clean});
    }, [])

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

    const handleTextChange = (e) => {
        setFilters({...filters, [e.target.name]: e.target.value})
    }

    const handleMultiSelectChange = (e) => {
        setFilters({...filters, [e.target.name]: e.target.value})
    }

    const handleMultiSelectDelete = (field, value) => {
        let vals = {...filters}[field]
        let index = vals.indexOf(value)
        if(index !== -1) vals.splice(index, 1)
        setFilters({...filters, [field]: vals})
    }

    const handleSelectChange = (e) => {
        setFilters({...filters, [e.target.name]: e.target.value});
    }

    const handleSliderChange = (field, e, val) => {
        setFilters({...filters, [field]: val})
    }

    function handleReset(){
        setFilters(initFilters)
        let newurl = window.location.protocol + "//" + window.location.host + location.pathname
        window.history.replaceState({path: newurl}, '', newurl);
        GetMonstersData({filters: true});
    }

    function handleSubmit(){
        let filters_clean = CleanObject(filters)
        let newurl = window.location.protocol + "//" + window.location.host + location.pathname + '?' + ParseObjectToQuery(filters_clean);
        window.history.replaceState({path: newurl}, '', newurl);
        GetMonstersData({params: filters_clean, filters: true});
    }

    function handleTableChange(page, sortOrder){
        const qs = require('query-string')
        setLoadingAbsolute(true);
        let filters_clean = CleanObject(filters)
        let options = {
            headers: GenerateAPIHeaders(),
        }
        filters_clean.page = page + 1;
        filters_clean.sort_order = null;
        if(sortOrder.name){
            let s_o = ""
            if(sortOrder.direction === "desc") s_o += "-"
            s_o += sortOrder.name
            filters_clean.sort_order = s_o
        }
        options = {
            headers: GenerateAPIHeaders(),
            params: filters_clean,
            paramsSerializer: params => {
                return qs.stringify(params)
            }
        }
        
        axios.get(APIEndpoints.MonstersTable, options)
        .then((resp) => {
            setData({...data, "table": resp.data})
            setLoadingAbsolute(false);
        })
        .catch((err_res) => {
            setErrorData(HandleAPIError(err_res))
            setError(true);
            setLoadingAbsolute(false);
        })
    }

    return (
        <div className={classes.root}>
            { loading && <Loading />}
            { loadingAbsolute && <LoadingAbsolute />}
            { !loading && err && <Error title={errorData.title} msg={errorData.msg} />}
            { !loading && !err && data ? (
                <>
                    <MonsterFilterForm 
                        data={data.filters}
                        handleTextChange={handleTextChange}
                        handleMultiSelectChange={handleMultiSelectChange}
                        handleMultiSelectDelete={handleMultiSelectDelete}
                        handleSelectChange={handleSelectChange}
                        handleSliderChange={handleSliderChange}
                        handleReset={handleReset}
                        handleSubmit={handleSubmit}
                        filters={filters}
                    />
                    <RadarChart 
                        title="Element"
                        data={data.chart_data.monster_elements}
                        indexBy="name"
                        keys={['count']}
                    />
                    <RadarChart 
                        title="Archetype"
                        data={data.chart_data.monster_archetypes}
                        indexBy="name"
                        keys={['count']}
                    />
                    <RadarChart 
                        title="Awaken"
                        data={data.chart_data.monster_awakens}
                        indexBy="name"
                        keys={['count']}
                    />
                    <RadarChart 
                        title="Stars"
                        data={data.chart_data.monster_stars}
                        indexBy="name"
                        keys={['count', 'natural']}
                    />
                    <MonsterTable 
                        data={data.table}
                        handleTableChange={handleTableChange}
                    />
                </>
            ) : null}
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
    },
}));