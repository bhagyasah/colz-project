import React, { Component } from 'react';
import {ControlGroup,Button,InputGroup} from '@blueprintjs/core';

class ControlGroups extends Component {
	constructor(props){
		super();
		this.state= {
			value: null,
		}
	}

	render(){
		return(
			<div>
<ControlGroup fill={false} vertical={false}>
    <Button icon="filter">Filter</Button>
    <InputGroup placeholder="Find filters..." />
				<div class="pt-select">
    <select>
      <option selected>Filter...</option>
      <option value="1">Issues</option>
      <option value="2">Requests</option>
      <option value="3">Projects</option>
    </select>
  </div>
</ControlGroup>
			</div>
		)
	}
}
export default ControlGroups;