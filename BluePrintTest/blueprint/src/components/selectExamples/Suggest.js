import React, { Component } from 'react';
import {Suggest} from '@blueprintjs/select';
import {MenuItem} from '@blueprintjs/core';
import { TOP_100_FILMS, filmSelectProps} from './Films';

class SuggestExample extends Component{
	constructor(props){
		super();
		this.state={
			closeOnSelect: true,
			film: TOP_100_FILMS[0],
			minimal: true,
			openOnKeyDown: false,
		}
	}

	handleValueChange = (value) => {
		console.log(value);
	}
	renderInputValue = (film) => {
		return film.title;
	}

	handleValueChange =(film) => {
		this.setState({film})
	}

	render(){
		const { film, minimal, ...flags } = this.state;
		return(
			<div>
				<Suggest
    {...filmSelectProps}
				{...flags}
				inputValueRenderer={this.renderInputValue}
				noResults={<MenuItem disabled={true} text="No results." />}
				onItemSelect={this.handleValueChange}
				popoverProps={{ minimal }}
				/>
			</div>
		)
	}
}
export default SuggestExample;