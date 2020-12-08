import React, {useState, useEffect} from "react";
import axios from "axios";
import {useLocation} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import BarChart from '../components/chart/BarChart';

import APIEndpoints from "../exts/Endpoints";
import { GenerateAPIHeaders, HandleAPIError, ParseQueryToObject, ParseObjectToQuery, CleanObject  } from "../exts/Helpers";
import Loading from '../components/Loading';
import LoadingAbsolute from '../components/LoadingAbsolute';
import Error from '../components/Error';

import RaidDetailData from '../components/raid/RaidDetailData';

export default function RiftDetail(props){
    return (
        <>
            {props.match.params.cairosId === '1-rift_of_worlds' ? (
                <RaidDetailData 
                    cid={props.match.params.cairosId}
                    stage={props.match.params.stage}
                />
            ) : (
                // <RiftDetailData 
                //     data={data}
                //     handleMultiSelectChange={handleMultiSelectChange}
                //     handleMultiSelectDelete={handleMultiSelectDelete}
                //     handleSelectChange={handleSelectChange}
                //     handleSliderChange={handleSliderChange}
                //     handleReset={handleReset}
                //     handleSubmit={handleSubmit}
                //     filters={filters}
                //     classes={classes}
                // />
                null) // temp
            }
        </>
    )
}