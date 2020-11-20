import React from 'react'
import {DropzoneArea} from 'material-ui-dropzone'

export default function Dropzone(props){
    return (
        <DropzoneArea
            onChange={props.handleChange}
            filesLimit={1}
            acceptedFiles={["application/json"]}
            maxFileSize={999999999}
            showFileNames={true}
            showFileNamesInPreview={true}
            useChipsForPreview={true}
            showAlerts={false}
            dropzoneText="Upload JSON file"
        />
    )
}