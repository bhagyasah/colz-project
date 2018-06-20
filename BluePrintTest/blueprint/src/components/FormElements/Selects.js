import React, { Component } from 'react';
import {Selection,Option} from '@blueprintjs/core';

class Selects extends Component {
	constructor(props){
		super();
		this.state = {
			vlaue: null,
		}
	}
	changeHandler = (e) => {
		console.log(e.target.value);
		this.setState({vlaue: e.target.vlaue})
	}
	render(){
		return(
			<div>
		<div class="pt-select pt-inline">
  <select onChange={this.changeHandler} >
    <option selected>Choose an item...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
    <option value="4">Four</option>
  </select>
</div>
			</div>
		)
	}
}
export default Selects;