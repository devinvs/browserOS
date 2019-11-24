import React from 'react'

import Terminal from '../programs/Terminal.js'
import '../css/Terminal.css'
import termIcon from '../terminal.png'

import HelloWorld from '../programs/HelloWorld.js'
import infoIcon from '../info.png'

import worldIcon from '../helloWorld.png'

import Blank from '../programs/Blank.js'
import Markdown from '../programs/Markdown.js'

export default function Launcher(props){

    return (
        <div className="Launcher">
            <div id="btn-hello" onClick={(e) => {props.addWindow(<HelloWorld />, "Hello World", 80, 80, 500, 300)}} >
                <img src={infoIcon} alt="Hello World" />
                <p>About</p>
            </div>
            <div id="btn-terminal" onClick={(e) => {props.addWindow(<Terminal />, "Terminal", 40, 40, 500, 300)}}>
                <img src={termIcon} alt="Terminal" draggable={false}/>
                <p>Terminal</p>
            </div>
            <div id="btn-browser" onClick={(e) => {props.addWindow(<Markdown source="# Coming Soon" />, "Web Browser", 100, 100, 500, 300)}} >
                <img src={worldIcon} alt="Web Browser"/>
                <p>Web Browser</p>
            </div>
        </div>
    )
}