import React from 'react';
import {ProgressBar,Intent,Spinner} from '@blueprintjs/core';

const ProgressBarExample = () => {
	return(
		<div>
		<ProgressBar stripes={true} value="0.5" intent={Intent.SUCCESS} />
		<Spinner value="0.3" intent={Intent.SUCCESS}/>
		</div>
	)
}
export default ProgressBarExample;