import React from 'react';
import {FormGroup,Label} from '@blueprintjs/core';

const FormGroups = () => {
	return(
		<div>
			<FormGroup
    helperText="Helper text with details..."
    label="Label A"
    labelFor="text-input"
    requiredLabel={true}
>
    <input id="text-input" placeholder="Placeholder text" />
</FormGroup>
<FormGroup
    helperText="Helper text with details..."
				label="Label A"
				labelFor="text-input"
				inline
    requiredLabel={true}
>
<Label text="button1"  />
    <input id="text-input" placeholder="Placeholder text" />
</FormGroup>
		</div>
	)
}
export default FormGroups;