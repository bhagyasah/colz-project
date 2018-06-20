import React, { Component } from 'react';
import {Checkbox, Alert,Intent,Switch} from '@blueprintjs/core';

class  checkboxs extends Component {
	constructor(props){
		super();
		this.state = {
			isChecked: false,
		}
	}
	changeHandler = () => {
		console.log("change handler called");
		this.setState({isChecked: !this.state.isChecked})
	}
	render(){
		console.log("jpsoajfas");
		return (
			<div>
				<Checkbox  onChange={this.changeHandler}  />
				<Alert
				icon='trash'
				cancelButtonText='cancel'
				confirmButtonText='Delete'
				intent={Intent.SUCCESS}
				//onCancel={this.clickHandler}
				isOpen={this.state.isChecked}
				//canEscapeKeyCancel={this.clickHandler}
				//canOutsideClickCancel={this.clickHandler}
				transitionDuration={100000}
				>
				{/* <form><h1>this is the header</h1>
				<p>this is the confirmation popup message.... </p>
				<Button >this is the test butoton</Button>
				<input type='text'></input></form> */}
				</Alert>
			</div>
		)
	}
}
export default checkboxs;

