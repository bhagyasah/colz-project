import React from 'react';
import {Icon,Intent} from '@blueprintjs/core';
import {IconNames} from '../../node_modules/@blueprintjs/icons';


 const handleAddKey = () => {
	console.log("jalkfjlasasjld");
}
const Icons = () => {
	return(
<div>
<Icon icon="cross" />
<Icon icon="globe" intent={Intent.SUCCESS} iconSize={100} onClick={handleAddKey} onKeyDown={handleAddKey} />
<Icon icon={IconNames.GRAPH} iconSize={Icon.SIZE_LARGE} iconSize={150} intent={Intent.PRIMARY} />
<Icon icon="add"  iconSize={200} onClick={this.handleAdd} onKeyDown={handleAddKey}/>
</div>
	)
}
export default Icons;