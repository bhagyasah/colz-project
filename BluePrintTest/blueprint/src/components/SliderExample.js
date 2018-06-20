import React, { Component } from 'react';
import {Slider,RangeSlider} from '@blueprintjs/core';
import { SLIDER } from '@blueprintjs/core/lib/esm/common/classes';

class SliderExample extends Component {
	constructor(){
	super();
	this.state={
		value: 0,
		range: [0,0],
	}
	}
changeHandler = (value1) => {
	console.log(value1);
	this.setState({
		value: value1
	})
}
rangeChangeHandler = (range)=>{
	console.log(range);
	this.setState({range})
}

renderLabel = (value) => {
	return `${Math.round(value * 100)}%`;
}
	render(){
		return(
			<div>
				<Slider
				 // min={0}
					// max={0.7}
			//	labelStepSize={0.5}
				labelRenderer={this.renderLabel}
			//	initialValue={5}
				onChange={this.changeHandler}
				value={this.state.value}
				/>
				<RangeSlider
				value={this.state.range}
				onChange={this.rangeChangeHandler}
				/>
			</div>
		)
	}
}
export default SliderExample;