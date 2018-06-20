import React, { Component } from 'react';
import {Input} from '@blueprintjs/core';

class TextInputs extends Component {
	constructor(props){
		super();
		this.state = {
			value: null,
		}
	}

	render(){
		return(
			<div>
<input
		class="pt-input pt-intent-success pt-round"
		type="text"
		placeholder="Text input"
		dir="auto"
/>
<div class="pt-input-group .modifier">
  <span class="pt-icon pt-icon-search"></span>
  <input class="pt-input"  type="search" placeholder="Search input" dir="auto" />
</div>

			</div>
		)
	}
}
export default TextInputs;