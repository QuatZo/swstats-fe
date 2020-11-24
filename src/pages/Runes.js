import React, {useState, useEffect} from "react";
import axios from "axios";


import APIEndpoints from "../exts/Endpoints";
import { GenerateAPIHeaders, HandleAPIError } from "../exts/Helpers";
import Loading from '../components/Loading';
import Error from '../components/Error';

export default function Runes(){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [err, setError] = useState(false);
    const [errorData, setErrorData] = useState({title: "Unknown Error", msg: "Unknown error has occured. Please contact administrator!"})

    useEffect(() => {
        axios.get(APIEndpoints.Runes, {
            headers: GenerateAPIHeaders(),
        })
        .then((resp) => {
            setData(resp.data)
        })
        .catch((err_res) => {
            setErrorData(HandleAPIError(err_res))
            setError(true);
        })
        .finally(() => {
            setLoading(false);
        })
    }, [])

    return (
        <>
            { loading && <Loading />}
            { !loading && err && <Error title={errorData.title} msg={errorData.msg} />}
            { !loading && !err && data ? (
                <p>{JSON.stringify(data)}</p>
            ) : null}
        </>
    )
}