import React from 'react';
import {Button} from '@blueprintjs/core';

const Buttons = () =>
{
	return(
		<div>
<Button  loading={true} type="button" active={false} class="pt-button pt-intent-success">
  Next step
  <span class="pt-icon-standard pt-icon-arrow-right pt-align-right"></span>
</Button>
<Button disabled={false} type="button" class="pt-button">
  <span class="pt-icon-standard pt-icon-user"></span>
  Profile settings
  <span class="pt-icon-standard pt-icon-caret-down pt-align-right"></span>
</Button>
<Button active={false} className='pt-button pt-intent-danger'>
  Reset
  <span class="pt-icon-standard pt-icon-refresh pt-align-right"></span>
</Button>
<Button type="button" className="pt-button pt-large">
  <span class="pt-icon-standard pt-icon-document"></span>
  upload.txt
  <span class="pt-icon-standard pt-icon-cross pt-align-right"></span>
</Button>
		</div>
	)
}
export default Buttons;