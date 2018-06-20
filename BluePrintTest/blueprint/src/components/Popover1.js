import React, { Component } from 'react';
import {Popover,Button,PopoverInteractionKind} from  '@blueprintjs/core';
import './App.css';

class PopoverExample extends Component
{
	constructor(props){
		super();
		this.state={
			isOpen: false,
		}
	}
	clickHandler = () => {
		console.log("button clicked");
	}

	popoverContent = (
		 <div className='popover-content'>
				<h1>this is the contennt</h1>
				<Button text="writ on console" onClick={this.clickHandler}/>
			</div>
	)
popoverTarget = (
<div>
	<Button text="show Popover"/>
	<h1>this is the long content to display popover</h1>
	</div>);
render(){
	return(
		<Popover
		minimal={false}
		inheritDarkTheme={true}
		hoverOpenDelay="1000"
		className='popover-content'
		content={this.popoverContent}
		target={this.popoverTarget}
  //isOpen={false}
		interactionKind={PopoverInteractionKind.HOVER}
	/	>
	)
}
}
export default PopoverExample ;
