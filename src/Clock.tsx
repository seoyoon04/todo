import React from "react";
import './ClockStyle.css';

interface ClockProps{
}

interface ClockState {
    date: Date;
}

class Clock extends React.Component<ClockProps, ClockState> {
    private timerID? : NodeJS.Timeout;
    
    constructor (props : ClockProps) {
        super(props);

        this.state = {
            date : new Date(),
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000,
        )
    }

    componentWillMount() {
        if(this.timerID) {
            clearInterval(this.timerID);
        } 
    }

    tick() {
        this.setState({
            date: new Date(),
        })
    }
 
    render() {
        return (
            <div>
                <h2>현재 시각은 {this.state.date.toLocaleTimeString()} 입니다</h2>
            </div>
        )
    }
}

export default Clock

