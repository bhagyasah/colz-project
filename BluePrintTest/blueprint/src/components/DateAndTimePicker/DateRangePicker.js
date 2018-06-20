import React, { Component } from 'react';
import {Tag, Intent,Icon} from '@blueprintjs/core';
import {DateRange, DateRangePicker} from '@blueprintjs/datetime';
import Moment from 'react-moment';
import { ICON } from '@blueprintjs/core/lib/esm/common/classes';

class DateRangePickerExample extends Component{
	constructor(props){
		super();
		this.state = {
			date: ["no date","no date"],
		}
	}

	changeHangler =([start,end]) => {
	 console.log(start);
		this.setState({date: [start,end] })
	}

	render(){
		const start = this.state.date[0];
		const end = this.state.date[1];
		const format="dddd,LL"

		return(
			<div>
				<DateRangePicker
				onChange={this.changeHangler}
				shortcuts={true}
				allowSingleDayRange

				/>
			<Tag intent={Intent.PRIMARY}>
			<Moment date={start} format={format} />
        <Icon icon="arrow-right" />
        <Moment date={end} format={format} />
			</Tag>
			</div>
		)
	}
}
export default DateRangePickerExample;