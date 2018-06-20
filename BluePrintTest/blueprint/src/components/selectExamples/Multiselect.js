
import React, { Component } from 'react';
import {Select, Suggest,MultiSelect} from '@blueprintjs/select';
import {MenuItem,Button,Position,Intent} from '@blueprintjs/core';
import { TOP_100_FILMS, filmSelectProps} from './Films';

class MultiSelectExample extends Component {
	constructor(props){
		super();
		this.state = {
			films: [],
			hasInitialContent: false,
			intent: false,
			openOnKeyDown: false,
			popoverMinimal: true,
			resetOnSelect: false,
			tagMinimal: false,
		}
	}


  handleTagRemove = (_tag, index) => {
		this.deselectFilm(index);
};
 getSelectedFilmIndex(film) {
		return this.state.films.indexOf(film);
}
 isFilmSelected(film) {
		return this.getSelectedFilmIndex(film) !== -1;
}
selectFilm(film) {
		this.setState({ films: [...this.state.films, film] });
}
deselectFilm(index) {
		this.setState({ films: this.state.films.filter((_film, i) => i !== index) });
}
 handleFilmSelect = (film) => {
		if (!this.isFilmSelected(film)) {
						this.selectFilm(film);
		} else {
						this.deselectFilm(this.getSelectedFilmIndex(film));
		}
};
handleSwitchChange(prop) {
		return (event) => {
						this.setState({ [prop]: event.currentTarget.checked });
		};
}

	handleClear = () => this.setState({ films: [] });


  renderTag = (film) => film.title;
    // NOTE: not using Films.itemRenderer here so we can set icons.
    renderFilm = (film, { modifiers, handleClick }) => {
        if (!modifiers.matchesPredicate) {
            return null;
        }
					return (
						<MenuItem
										active={modifiers.active}
										icon={this.isFilmSelected(film) ? "tick" : "blank"}
										key={film.rank}
										label={film.year.toString()}
										onClick={handleClick}
										text={`${film.rank}. ${film.title}`}
										shouldDismissPopover={false}
						/>
					);
	};





	render(){
		const INTENTS = [Intent.NONE, Intent.PRIMARY, Intent.SUCCESS, Intent.DANGER, Intent.WARNING];
		const { films, hasInitialContent, tagMinimal, popoverMinimal, ...flags } = this.state;
		const getTagProps = (_value, index) => ({
		intent: this.state.intent ? INTENTS[index % INTENTS.length] : Intent.NONE,
		minimal: tagMinimal,
});

const initialContent = this.state.hasInitialContent ? (
			<MenuItem disabled={true} text={`${TOP_100_FILMS.length} items loaded.`} />
) : (
			// explicit undefined (not null) for default behavior (show full list)
			undefined
);
const clearButton = films.length > 0 ? <Button icon="cross" minimal={true} onClick={this.handleClear} /> : null;

return(
<div>
			<MultiSelect
				{...filmSelectProps}
				{...flags}
				//resetOnSelect={false}
				initialContent={initialContent}
				itemRenderer={this.renderFilm}
				noResults={<MenuItem disabled={true} text="No results." />}
				onItemSelect={this.handleFilmSelect}
				popoverProps={{ minimal: popoverMinimal }}
				tagRenderer={this.renderTag}
				tagInputProps={{ tagProps: getTagProps, onRemove: this.handleTagRemove, rightElement: clearButton }}
				selectedItems={this.state.films}
			/>
</div>
			)
		}
}
export default MultiSelectExample;