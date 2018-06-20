import React, { Component } from 'react';
import {ContextMenu,ContextMenuTarget,Menu,MenuItem,MenuDivider,Button} from '@blueprintjs/core';

class ContectextMenuFormRightMouseClick extends Component{
	constructor(props){
		super();
this.state={
	isOpen: false,
}
	}

	renderContextMenu() {
		// return a single element, or nothing to use default browser behavior
		return (
			<Menu>
			<MenuItem icon="search-around" text="Search around..." />
			<MenuItem icon="search" text="Object viewer" />
			<MenuItem icon="graph-remove" text="Remove" />
			<MenuItem icon="group-objects" text="Group" />
			<MenuDivider />
			<MenuItem disabled={true} text="Clicked on node" />
</Menu>
		);
}
 onContextMenuClose() {
		// Optional method called once the context menu is closed.
}

	render(){
		return(
			<div>
   <Button text="long right mouse click button"/>
			</div>
		)
	}
}
export default ContextMenuTarget(ContectextMenuFormRightMouseClick);