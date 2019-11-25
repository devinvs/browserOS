import React from 'react'
import * as Disk from '../os/disk.js'
import ReactMarkdown from 'react-markdown'

export default class HelloWorld extends React.Component{
    
    render(){
        let md = ""

        try {
            md = Disk.read("/home/hello.md").contents
        } catch (error) {
            md = "## /home/hello.md does not exist"
        }   

        return (
            <div style={{backgroundColor: "#ffffff", padding:20}}>
                <ReactMarkdown source={md} />
            </div>
        )
    }
}