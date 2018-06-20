import React, { Component } from 'react';
import {Tooltip,Popover,Button,Position} from '@blueprintjs/core';

class TooltipExample extends Component{
	render(){
		return(
			<Popover content={<h1>Popover!</h1>} position={Position.RIGHT}>
    <Tooltip content="I has a popover!" position={Position.RIGHT}>
        <Button>Hover and click me</Button>
    </Tooltip>
</Popover>
		)
	}
}
export default TooltipExample;