import React, { Component } from 'react';
import {RadioGroup,Radio} from '@blueprintjs/core'

class RadioGroups extends Component {
	constructor(props){
		super();
		this.state = {
			mealType: null,
		}
	}

	handleMealChange = (e) =>{
		console.log(e.target.value);
		this.setState({
			mealType: e.target.value
		})
	}

	render(){
		return(
			<div>
				<RadioGroup
    label="Meal Choice"
    onChange={this.handleMealChange}
    selectedValue={this.state.mealType}
				>
    <Radio disable defaultChecked label="Soup" value="one" />
    <Radio label="Salad" value="two" />
    <Radio label="Sandwich" value="three" />
</RadioGroup>
			</div>
		)
	}
}

export default RadioGroups;