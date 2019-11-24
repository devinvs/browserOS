import React from 'react';
import '../css/Root.css';
import Window from './Window.js';
import '../css/Window.css';
import Launcher from './Launcher.js'
import '../css/Launcher.css'

import HelloWorld from '../programs/HelloWorld.js'
import Terminal from '../programs/Terminal.js'
import '../css/Terminal.css'

function program(code, title, x, y, width, height){
    return {
        program: code,
        title: title,
        x: x,
        y: y,
        width: width,
        height: height,
        clickX: 0,
        clickY: 0
    }
}

export default class Root extends React.Component{

    constructor(props){
        super(props)

        this.props = props
        this.state = {
            windows: [program(<HelloWorld/>, "Hello World", 200,100,500,300)],
            width: 0,
            height: 0
        }

        this.grabbed = -1
        this.resize = -1

        this.mouseXLast = 0
        this.mouseYLast = 0

        this.clickX = 0
        this.clickY = 0

        this.offsetX = 0
        this.offsetY = 0

        this.resizeDirection = "E"
        this.resizeX = 0
        this.resizeY = 0
        this.resizeHeight = 0
        this.resizeWidth = 0

        this.mouseMove = this.mouseMove.bind(this)
        this.setGrabbed = this.setGrabbed.bind(this)
        this.setResize = this.setResize.bind(this)
        this.maximizeWindow = this.maximizeWindow.bind(this)
        this.closeWindow =this.closeWindow.bind(this)
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
        this.addWindow = this.addWindow.bind(this)
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    mouseMove = (e) => {
        if (this.grabbed >= 0){
            this.moveWindow(e, this.grabbed)
        }else if(this.resize >= 0){
            this.resizeWindow(e, this.resize)
        }
    }

    moveWindow(e, id){
        const windows = this.state.windows.slice()

        windows[id].x = e.clientX + this.offsetX
        windows[id].y  = e.clientY + this.offsetY

        this.mouseXLast = e.clientX
        this.mouseYLast = e.clientY

        this.setState({
            windows: windows
        })
    }

    resizeWindow(e, id){
        const windows = this.state.windows.slice()

        if (this.resizeDirection === "N"){
            windows[id].height = this.resizeHeight + this.clickY - e.clientY
            windows[id].y = this.resizeY - (this.clickY - e.clientY)
        }else if (this.resizeDirection === "E"){
            windows[id].width = this.resizeWidth + e.clientX - this.clickX
        }else if (this.resizeDirection === "S"){
            windows[id].height = this.resizeHeight - (this.clickY - e.clientY)
        }else if (this.resizeDirection === "W"){
            windows[id].width = this.resizeWidth + this.clickX - e.clientX
            windows[id].x = this.resizeX + (e.clientX - this.clickX)
        }else if (this.resizeDirection === "NE"){
            windows[id].height = this.resizeHeight + this.clickY - e.clientY
            windows[id].y = this.resizeY - (this.clickY - e.clientY)
            windows[id].width = this.resizeWidth + e.clientX - this.clickX
        }else if (this.resizeDirection === "SE"){
            windows[id].height = this.resizeHeight - (this.clickY - e.clientY)
            windows[id].width = this.resizeWidth + e.clientX - this.clickX
        }else if (this.resizeDirection === "SW"){
            windows[id].height = this.resizeHeight - (this.clickY - e.clientY)
            windows[id].width = this.resizeWidth + this.clickX - e.clientX
            windows[id].x = this.resizeX + (e.clientX - this.clickX)
        }else if (this.resizeDirection === "NW"){
            windows[id].height = this.resizeHeight + this.clickY - e.clientY
            windows[id].y = this.resizeY - (this.clickY - e.clientY)
        }

        this.setState({windows: windows})
    }

    setGrabbed = (e, id) => {
        this.grabbed = id

        this.clickX = e.clientX
        this.clickY = e.clientY

        this.offsetX = this.state.windows[id].x - this.clickX
        this.offsetY = this.state.windows[id].y - this.clickY
    }

    setResize = (e, id, direction) => {
        this.resize = id

        this.clickX = e.clientX
        this.clickY = e.clientY

        this.resizeDirection = direction
        this.resizeX = this.state.windows[id].x
        this.resizeY = this.state.windows[id].y
        this.resizeWidth = this.state.windows[id].width
        this.resizeHeight = this.state.windows[id].height
    }

    unsetGrabbed = (e) => {
        this.grabbed = -1
        this.resize = -1
    }

    maximizeWindow(id){
        const windows = this.state.windows.slice()
        windows[id].height = this.state.height
        windows[id].width = this.state.width
        windows[id].x = 0
        windows[id].y = 0

        this.setState({windows: windows})
    }

    closeWindow(id){
        const windows = this.state.windows.slice()
        windows.splice(id, 1)

        this.setState({windows:windows})
    }

    addWindow(name, title, x, y, width, height){
        const new_program = program(name, title, x, y, width, height)
        const windows = this.state.windows.slice()
        windows.push(new_program)

        this.setState({windows: windows})
    }

    render(){
        return (
            <div id="Root" onMouseMove={this.mouseMove} onMouseDown={this.onMouseDown} onMouseUp={this.unsetGrabbed}>
                <Launcher addWindow={this.addWindow}/>
                {this.state.windows.map((value, index) => {
                    return (
                    <Window
                        key={index}
                        id={index}
                        title={value.title}
                        x={value.x}
                        y={value.y}
                        width={value.width}
                        height={value.height} 
                        setGrab={this.setGrabbed}
                        setResize={this.setResize}
                        maximize={this.maximizeWindow}
                        minimize={this.closeWindow}
                        close={this.closeWindow}
                        >{value.program}
                    </Window>
                )})}
            </div>
        );
    }
}