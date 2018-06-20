import React, { Component } from 'react';
import {FileInput} from '@blueprintjs/core';

class FileInpute extends Component {
	constructor(props){
		super();
		this.state ={
			value: null
		}
	}
	onInputChange= (e) =>{
		console.log(e.target.value);
		this.setState({
			value: e.target.value,
		})
	}
	render(){
		return(
		<FileInput text="Choose file......" onInputChange={this.changeHandler}/>
		)
	}
}
export default FileInpute;