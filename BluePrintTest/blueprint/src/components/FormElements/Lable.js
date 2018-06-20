import React from 'react';
import {Label} from '@blueprintjs/core';

const Labels = () => {
	return(
		<Label
    helperText="Helper text with details..."
				text="Label A"
				inline
			>
    <input className="pt-input" id="text-input" placeholder="Placeholder text" />
</Label>
	)
}
export default Labels;