import React, {Component} from 'react';
import {Alert, Button, Intent, ITo} from '@blueprintjs/core';

class AlertDialogue extends Component  {
	constructor(props){
		super();
		this.state = {
			isOpen: false,
		}
	}
	clickHandler = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}
	render () {
		return(
			<div>
				<Button onClick= {this.clickHandler} text='Show Alert'></Button>
				<Alert
				icon='trash'
				cancelButtonText='cancel'
				confirmButtonText='Delete'
				intent={Intent.SUCCESS}
				onCancel={this.clickHandler}
				isOpen={this.state.isOpen}
				canEscapeKeyCancel={this.clickHandler}
				canOutsideClickCancel={this.clickHandler}
				transitionDuration={100000}
				>
				<form><h1>this is the header</h1>
				<p>this is the confirmation popup message.... </p>
				<Button >this is the test butoton</Button>
				<input type='text'></input></form>
				</Alert>
			</div>
		)
	}
}
export default AlertDialogue;

