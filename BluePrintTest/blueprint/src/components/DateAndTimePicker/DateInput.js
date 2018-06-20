import React, { Component } from 'react';
import {DateInput} from '@blueprintjs/datetime';
import { Label, Button } from '@blueprintjs/core';
//import moment from 'react-moment';
//import Moment from 'react-moment';
import moment from 'moment';


const rightElement = () => {
	return (
		<div><Label text="select date" /><Button text="jpt"/></div>
	)
	}

class DateInputExample extends Component {
	constructor(props){
		super();
		this.state = {
			date: Date("DD-MM-YYYY"),
			}
	}
changeHandler = (value) => {
	//console.log(value);
	this.setState({date: value})
}

	render(){
		console.log(this.state.date)
		return (
			<div>
				<DateInput
    formatDate={date => moment(date).format("YYYY/MM/DD, HH:MM:SS")}
    onChange={this.changeHandler}
    parseDate={str => Date(str)}
				placeholder={"M/D/YYYY"}
				rightElement={rightElement}
		 	value={this.state.date}
				timePickerProps={undefined}

/>
			</div>
		)
	}
}
export default DateInputExample;