import React from 'react';
import WindowTopBar from './WindowTopBar.js'


class Window extends React.Component{

    constructor(props){
        super(props)

        this.props = props
    }

    render(){
        return (
            <div className="WindowFrame"
                style={{
                    left: this.props.x,
                    top: this.props.y,
                    width: this.props.width,
                    height:this.props.height
                }}
            >
                <div className="resizeN" onMouseDown={(e) => {this.props.setResize(e, this.props.id, "N")}}/>
                <div className="resizeE" onMouseDown={(e) => {this.props.setResize(e, this.props.id, "E")}}/>
                <div className="resizeS" onMouseDown={(e) => {this.props.setResize(e, this.props.id, "S")}}/>
                <div className="resizeW" onMouseDown={(e) => {this.props.setResize(e, this.props.id, "W")}}/>

                <div className="resizeNE" onMouseDown={(e) => {this.props.setResize(e, this.props.id, "NE")}}/>
                <div className="resizeSE" onMouseDown={(e) => {this.props.setResize(e, this.props.id, "SE")}}/>
                <div className="resizeSW" onMouseDown={(e) => {this.props.setResize(e, this.props.id, "SW")}}/>
                <div className="resizeNW" onMouseDown={(e) => {this.props.setResize(e, this.props.id, "NW")}}/>

                <WindowTopBar 
                    title={this.props.title} 
                    onMouseDown={(e) => {this.props.setGrab(e,this.props.id)}}
                    maximize={this.props.maximize}
                    minimize={this.props.minimize}
                    id={this.props.id}
                    close={this.props.close}/>
                {this.props.children}
            </div>
        );
    }
}

export default Window;
