import React from 'react'

class WindowTopBar extends React.Component{

    constructor(props){
        super(props)

        this.props = props
    }
    render(){
        return (
            <div 
                className="WindowTopBar" 
                onMouseDown={this.props.onMouseDown} 
                onMouseUp={this.props.onMouseUp}
            >
                <div style={{minWidth: "70px"}}></div>
                <div className="WindowTopBarTitle">
                    {this.props.title}
                </div>
                <div className="WindowTopBarButtons">
                    <div className="WindowTopBarButton" id="maximize" onClick={(e) => {this.props.maximize(this.props.id)}}></div>
                    <div className="WindowTopBarButton" id="minimize" onClick={(e) => {this.props.minimize(this.props.id)}}></div>
                    <div className="WindowTopBarButton" id="close" onClick={(e) => {this.props.close(this.props.id)}}></div>
                    
                </div>
            </div>
        )
    }
}

export default WindowTopBar;