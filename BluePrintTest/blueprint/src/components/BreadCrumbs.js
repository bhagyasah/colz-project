import React,{Component} from 'react';
import { Intent } from '@blueprintjs/core';

const BreadCrumbs = () => {
	return(
		<div >
			<ul class="pt-breadcrumbs" intent={Intent.DANGER}>
  <li><a class="pt-breadcrumbs-collapsed" href="#"></a></li>
  <li><a class="pt-breadcrumb pt-disabled">Folder one</a></li>
  <li><a class="pt-breadcrumb" href="#">Folder two</a></li>
  <li><a class="pt-breadcrumb" href="#">Folder three</a></li>
  <li><span class="pt-breadcrumb pt-breadcrumb-current">File</span></li>
</ul>
		</div>
	)
}
export default BreadCrumbs;