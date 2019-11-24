import React from 'react'
import * as Disk from '../os/disk.js'
import ReactMarkdown from 'react-markdown'

export default class HelloWorld extends React.Component{
    
    render(){
        let md = Disk.read("/home/hello.md").contents
        console.log(md)

        return (
            <div style={{backgroundColor: "#ffffff", padding:20}}>
                <ReactMarkdown source={md} />
            </div>
        )
    }
}