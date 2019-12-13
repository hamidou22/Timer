import React, { Component } from 'react'

export default class StateTimer extends Component {

    
  state={
        second : 0
    }


   timer = (sec) =>{
    var x=Math.floor(sec/3600);
    var y=Math.floor((sec%3600)/60);
    var z=(sec%3600)%60;
    if(x<10){x="0"+x};
    if(y<10){y="0"+y};
    if(z<10){z="0"+z};
        return x+":"+y+":"+z
    }

 handletime = () =>{
 this.hh=setInterval(()=>{
        this.setState({
            second : this.state.second +1
        })
    },1000)
 };

handlereset = () =>{
this.setState({
    second : 0
})
clearInterval(this.hh)
};


    render() {
        return (
            <div>
                <h1>{this.timer(this.state.second)}</h1>
                <button onClick={this.handletime}>Start</button>
                <button onClick={this.handlereset}>Reset</button>
            </div>
        )
    }
}


