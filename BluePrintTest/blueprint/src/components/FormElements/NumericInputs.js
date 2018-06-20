import React, { Component } from 'react';
import {NumericInput} from '@blueprintjs/core';

class NumeriInputs extends Component {
	constructor(props){
		super();
		this.state = {
			value: null,
		}
	}

	render(){
		return(
			<div>
				<NumericInput  />
			</div>
		)
	}
}
export default NumeriInputs;