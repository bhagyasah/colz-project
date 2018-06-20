import React, { Component } from 'react';
import moment from 'moment';
import {DateRangeInput} from '@blueprintjs/datetime';

class DateRangeInputExample extends Component {
	constructor(props){
		super();
		this.state = {
			date: null ? "" : undefined,
		}
	}

	changeHandler =(value) => {
		console.log(value);
		this.setState({date: value});
	}

	render(){
		return (
			<div>
				<DateRangeInput
					onChange={this.changeHandler}
					formatDate={date => moment(date).format("YYYY/MM/DD")}
					parseDate={str => Date(str)}
					value={this.state.date}
				/>
			</div>
		)
	}
}
export default DateRangeInputExample;