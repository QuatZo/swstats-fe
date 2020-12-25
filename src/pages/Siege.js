import React, {useState, useEffect} from "react";
import axios from "axios";
import {useLocation} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import RadarChart from '../components/chart/RadarChart';

import APIEndpoints from "../exts/Endpoints";
import { GenerateAPIHeaders, HandleAPIError, ParseQueryToObject, ParseObjectToQuery, CleanObject  } from "../exts/Helpers";
import Loading from '../components/Loading';
import LoadingAbsolute from '../components/LoadingAbsolute';
import Error from '../components/Error';
import SiegeFilterForm from '../components/siege/SiegeFilterForm';
import SiegeTable from '../components/siege/SiegeTable';

export default function Siege(){
    const initFilters = {
        monsters__base_monster: [],
        leader__base_monster: [],
        wizard__guild__siege_ranking: [],
        ratio: [null, null],
        win: [null, null],
        lose: [null, null],
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

    function GetSiegeData(kwargs){
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
        
        axios.get(APIEndpoints.Siege, options)
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
        GetSiegeData({params: clean});
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

    const handleMultiSelectChange = (e) => {
        setFilters({...filters, [e.target.name]: e.target.value})
    }
    const handleMultiSelectDelete = (field, value) => {
        let vals = {...filters}[field]
        let index = vals.indexOf(value)
        if(index !== -1) vals.splice(index, 1)
        setFilters({...filters, [field]: vals})
    }

    const handleSliderChange = (field, e, val) => {
        setFilters({...filters, [field]: val})
    }

    function handleReset(){
        setFilters(initFilters)
        let newurl = window.location.protocol + "//" + window.location.host + location.pathname
        window.history.replaceState({path: newurl}, '', newurl);
        GetSiegeData({filters: true});
    }

    function handleSubmit(){
        let filters_clean = CleanObject(filters)
        let newurl = window.location.protocol + "//" + window.location.host + location.pathname + '?' + ParseObjectToQuery(filters_clean);
        window.history.replaceState({path: newurl}, '', newurl);
        GetSiegeData({params: filters_clean, filters: true});
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
            s_o += sortOrder.name.replaceAll('substats.', '')
            filters_clean.sort_order = s_o
        }
        options = {
            headers: GenerateAPIHeaders(),
            params: filters_clean,
            paramsSerializer: params => {
                return qs.stringify(params)
            }
        }
        
        axios.get(APIEndpoints.SiegeTable, options)
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
        <>
            { loading && <Loading />}
            { loadingAbsolute && <LoadingAbsolute />}
            { !loading && err && <Error title={errorData.title} msg={errorData.msg} />}
            { !loading && !err && data ? (
            <div className={classes.root}>
                <Grid container>
                    <Grid item md={9} xs={12} lg={9}>
                        <SiegeFilterForm 
                            data={data.filters}
                            handleMultiSelectChange={handleMultiSelectChange}
                            handleMultiSelectDelete={handleMultiSelectDelete}
                            handleSliderChange={handleSliderChange}
                            handleReset={handleReset}
                            handleSubmit={handleSubmit}
                            filters={filters}
                        />
                    </Grid>
                    <Grid item md={3} xs={12} lg={3}>
                        <RadarChart 
                            title="Ranking"
                            data={data.chart_data.siege_rankings}
                            indexBy="name"
                            keys={['count']}
                            longText
                            full
                        />
                    </Grid>
                    <SiegeTable 
                        data={data.table}
                        handleTableChange={handleTableChange}
                    />
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