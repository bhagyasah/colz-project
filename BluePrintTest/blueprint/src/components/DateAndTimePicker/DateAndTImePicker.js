import React, { Component } from 'react';
import {DateTimePicker} from '@blueprintjs/datetime';
import { Tag, Intent } from '@blueprintjs/core';
import Moment from 'react-moment';

class DateTimePickerExample extends Component{
	constructor(props){
		super();
		this.state = {
			date: null,
			time: null,
		}
	}

	changeHandler = (datetime) => {
		console.log(datetime);
		this.setState({date: datetime})
	}
	render(){
		return(
			<div>
				<DateTimePicker
				onChange={this.changeHandler}
				/>
				<Tag intent={Intent.PRIMARY}>selected date=<Moment date={this.state.date} format="dddd, LL"/></Tag><br /> <br />
				<Tag intent={Intent.PRIMARY}>selected time=<Moment date={this.state.date} format="hh-mm-ss-a"/></Tag>
			</div>
		)
	}
}
export default DateTimePickerExample;