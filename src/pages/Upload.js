import React, {useState, useEffect} from "react";
import Dropzone from '../components/Dropzone';
import axios from "axios";

import {GenerateAPIHeaders} from '../exts/Helpers';
import APIEndpoints from '../exts/Endpoints';

export default function Upload(){
    const [profile, setProfile] = useState(null)
    const [taskId, setTaskId] = useState(null)

    function handleChange(files) {
        if(files.length){
            const reader = new FileReader()
            reader.onload = async (e) => { 
                const text = (e.target.result)
                setProfile(JSON.parse(text))
            };
            reader.readAsText(files[0])
        }
        else if(profile !== null){
            setProfile(null)
        }
    }

    useEffect(() => {
        if(profile){
            axios.post(APIEndpoints.Upload, profile, {
                headers: GenerateAPIHeaders(),
            })
            .then((resp) => {
                setTaskId(resp.data.task_id)
                console.log(resp.data)
            })
        }
    }, [profile])

    useEffect(() => {
        if(taskId){
            axios.get(APIEndpoints.Status, profile, {
                headers: GenerateAPIHeaders(),
                params: {'task_id': taskId}
            })
            .then((resp) => {
                console.log(resp.data)
            })
        }
    }, [taskId])

    return (
        <Dropzone 
            handleChange={handleChange}
        />
    )
}