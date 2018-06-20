import React, { Component } from 'react';
import {Button, Collapse} from '@blueprintjs/core';
import { CONTEXT_MENU_POPOVER_TARGET } from '@blueprintjs/core/lib/esm/common/classes';

class Collapses extends Component {
	constructor(props){
		super();
		this.state = {
			isOpen: false
		}
	}
	clickHandler = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})

	}

	render() {
		return(
			<div>
			<Button onClick={this.clickHandler} text="Open Sutter" />
	  <Collapse isOpen={this.state.isOpen} ><h1>hwjerlkejrlwjrrwj rjwlkrjwl  rjwlkrj</h1></Collapse>
			</div>
		)
	}
}
export default Collapses;