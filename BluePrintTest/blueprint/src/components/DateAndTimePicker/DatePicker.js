
import React, { Component } from 'react';
import { Classes,Tag, Intent } from '@blueprintjs/core';
import { DatePicker } from '@blueprintjs/datetime';
import Moment from 'react-moment';

const date = new Date();
export default class DatePickerExample extends Component {
	constructor(props) {
		super();
		const date = new Date();
		this.state = {
			date,
		}
	}

	changeHandler = (value) => {
		console.log(this.state.date);
		this.setState({ date: value })
	}

	render() {
		console.log(this.state.date)
		return (
			<div className="docs-datetime-example" style={{ width: 250 }}>
				<DatePicker
					className={Classes.ELEVATION_1}
					showActionsBar
					onChange={this.changeHandler}
					value={this.state.date}
				/>
		<Tag intent={Intent.PRIMARY}>		<Moment format="dddd,LL" >{this.state.date}</Moment></Tag>
				{/* / <h1>{this.state.date}</h1> */}
			</div>
		)
	}
}