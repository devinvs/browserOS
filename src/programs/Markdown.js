import React from 'react'
import ReactMarkdown from 'react-markdown'

export default function Markdown(props){

    return (
        <div style={{backgroundColor: "#ffffff", padding:20}}>
            <ReactMarkdown source={props.source} />
        </div>
    )
}