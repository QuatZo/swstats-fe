import React from "react";

import RaidDetailData from '../components/raid/RaidDetailData';
import RiftDetailData from '../components/rift/RiftDetailData';

export default function RiftDetail(props){
    return (
        <>
            {props.match.params.cairosId === '1-rift_of_worlds' ? (
                <RaidDetailData 
                    cid={props.match.params.cairosId}
                    stage={props.match.params.stage}
                />
            ) : (
                <RiftDetailData 
                    cid={props.match.params.cairosId}
                    stage={props.match.params.stage}
                />
            )}
        </>
    )
}