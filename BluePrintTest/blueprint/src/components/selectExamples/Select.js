import React, { Component } from 'react';
import {Select} from '@blueprintjs/select';
import {MenuItem,Button,Position} from '@blueprintjs/core';
import { TOP_100_FILMS, filmSelectProps} from './Films';
class SelectExample extends Component {
	constructor(props){
		super()
		this.state = {
			disabled: false,
			film: TOP_100_FILMS[0],
			filterable: true,
			hasInitialContent: false,
			minimal: false,
			resetOnClose: false,
			resetOnSelect: false,
		}
	}

 handleValueChange = (film) => this.setState({ film });

	render(){
		//console.log(JSON.stringify(TOP_100_FILMS));
		const { disabled, film, minimal, ...flags } = this.state;

		const initialContent = this.state.hasInitialContent ? (
			<MenuItem disabled={true} text={`${TOP_100_FILMS.length} items loaded.`} />
) : (
			undefined
);

		return (
			<div>
					<Select
					{...filmSelectProps}
					{...flags}
					disabled={disabled}
					initialContent={initialContent}
					noResults={<MenuItem disabled={true} text="No results." />}
					onItemSelect={this.handleValueChange}
					popoverProps={{ minimal:false, position: Position.TOP }}
					>
						<Button rightIcon="caret-down" text={film ? film.title : "(No selection)"} disabled={disabled} />
			</Select>
			</div>
		)
	}
}
export default SelectExample;
