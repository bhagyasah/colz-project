import React from 'react';
import {Tag,Intent, Button} from '@blueprintjs/core';

const TagExample = () => {
	return (
	<div>
		<Tag intent={Intent.SUCCESS} >jpt tag</Tag>
		<Tag intent={Intent.DANGER}  round>jpt tag</Tag><br />
	{/* <Button /> */}

	</div>
	)
}
export default TagExample;