import React, { Component } from 'react';
import {TextArea,Intent} from '@blueprintjs/core';

class TextAreas extends Component{
	constructor(props){
		super();
		this.state ={
			textareaVlaue: null,
		}
	}

	handleChange = (e) => {
		console.log(e.target.value);
this.setState({
	textareaVlaue: e.target.value,
})
	}

	render(){
		return(
			<div>
				<TextArea
				className='pt-fill'
    large={true}
    intent={Intent.PRIMARY}
    onChange={this.handleChange}
    value={this.state.textareaVlaue}
/>
			</div>
		)
	}
}
export default TextAreas;