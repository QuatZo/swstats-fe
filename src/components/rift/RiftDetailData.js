import React, {useState, useEffect} from "react";
import axios from "axios";
import {useLocation} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import BarChart from '../chart/BarChart';

import APIEndpoints from "../../exts/Endpoints";
import { GenerateAPIHeaders, HandleAPIError, ParseQueryToObject, ParseObjectToQuery, CleanObject  } from "../../exts/Helpers";
import Loading from '../Loading';
import LoadingAbsolute from '../LoadingAbsolute';
import Error from '../Error';

import RiftDetailTable from './RiftDetailTable';
import RiftDetailFilterForm from './RiftDetailFilterForm';

export default function RiftDetailData(props){
    const initFilters = {
        monsters: [],
        leader: [],
        dmg_total: [null, null],
        cid: props.cid,
        stage: props.stage,
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

    function GetRiftDetailData(kwargs){
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
        
        axios.get(APIEndpoints.RiftDetail, options)
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
        GetRiftDetailData({params: clean});
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

    const handleSelectChange = (e) => {
        setFilters({...filters, [e.target.name]: e.target.value});
    }

    function handleReset(){
        setFilters(initFilters)
        let newurl = window.location.protocol + "//" + window.location.host + location.pathname
        window.history.replaceState({path: newurl}, '', newurl);
        GetRiftDetailData({filters: true, params: {cid: props.cid, stage: props.stage,}});
    }

    function handleSubmit(){
        let filters_clean = CleanObject(filters)
        let newurl = window.location.protocol + "//" + window.location.host + location.pathname + '?' + ParseObjectToQuery(filters_clean);
        window.history.replaceState({path: newurl}, '', newurl);
        GetRiftDetailData({params: filters_clean, filters: true});
    }

    return (
        <div className={classes.root}>
            { loading && <Loading />}
            { loadingAbsolute && <LoadingAbsolute />}
            { !loading && err && <Error title={errorData.title} msg={errorData.msg} />}
            { !loading && !err && data ? (
                <Grid container>
                    <Grid item md={12} xs={12} lg={12}>
                        <RiftDetailFilterForm 
                            data={data.filters}
                            handleMultiSelectChange={handleMultiSelectChange}
                            handleMultiSelectDelete={handleMultiSelectDelete}
                            handleSliderChange={handleSliderChange}
                            handleReset={handleReset}
                            handleSubmit={handleSubmit}
                            filters={filters}
                        />
                    </Grid>
                    <Grid item md={12} xs={12} lg={12}>
                        <BarChart 
                            title="Clear Time Distribution"
                            data={data.chart_data.rift_distribution}
                            indexBy="name"
                            keys={['count']}
                            layout={"vertical"}
                            full
                            XTickRotation={45}
                        />
                    </Grid>
                    <RiftDetailTable 
                        data={data.table}
                    />
                </Grid>
            ) : null }
        </div>
        
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
    },
}));