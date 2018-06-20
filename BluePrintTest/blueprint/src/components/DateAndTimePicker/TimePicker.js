import React, { Component } from 'react';
import {TimePicker, TimePickerPrecision} from '@blueprintjs/datetime';
import Moment from 'react-moment';

class TimePickerExample extends Component{
	constructor(props){
		super();
		this.state = {
			time: null,
		}
	}

	changeHandler = (value) => {
		console.log(value);
		this.setState({time: value})
	}

	render(){

		return(
			<div>
				<TimePicker
				onChange = {this.changeHandler}
					value={this.state.time}
					precision={TimePickerPrecision.SECOND}
					showArrowButtons
					selectAllOnFocus
					useAmPm
				/>
				<Moment date={this.state.time} format="hh-mm-ss-a" />
			</div>
		)
	}
}
export default TimePickerExample;