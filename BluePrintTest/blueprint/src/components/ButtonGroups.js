import React from 'react';

const ButtonGroups = () => {
	return (
		<div>
			<div class="pt-button-group .modifier">
  <a class="pt-button pt-icon-database" tabindex="0" role="button">Queries</a>
  <a class="pt-button pt-icon-function" tabindex="0" role="button">Functions</a>
  <a class="pt-button" tabindex="0" role="button">
    Options <span class="pt-icon-standard pt-icon-caret-down pt-align-right"></span>
  </a>
</div>
<br /><br />
<div class="pt-button-group .modifier">
  <a class="pt-button pt-icon-chart" tabindex="0" role="button"></a>
  <a class="pt-button pt-icon-control" tabindex="0" role="button"></a>
  <a class="pt-button pt-icon-graph" tabindex="0" role="button"></a>
  <a class="pt-button pt-icon-camera" tabindex="0" role="button"></a>
  <a class="pt-button pt-icon-map" tabindex="0" role="button"></a>
  <a class="pt-button pt-icon-code" tabindex="0" role="button"></a>
  <a class="pt-button pt-icon-th" tabindex="0" role="button"></a>
  <a class="pt-button pt-icon-time" tabindex="0" role="button"></a>
  <a class="pt-button pt-icon-compressed" tabindex="0" role="button"></a>
</div>
<br /><br />
<div class="pt-button-group .modifier">
  <button type="button" class="pt-button pt-intent-success">Save</button>
  <button type="button" class="pt-button pt-intent-success pt-icon-caret-down"></button>
</div>
<div class="pt-button-group pt-vertical">
  <a class="pt-button pt-icon-search-template" role="button" tabindex="0"></a>
  <a class="pt-button pt-icon-zoom-in" role="button" tabindex="0"></a>
  <a class="pt-button pt-icon-zoom-out" role="button" tabindex="0"></a>
  <a class="pt-button pt-icon-zoom-to-fit" role="button" tabindex="0"></a>
</div>
<div class="pt-button-group pt-vertical">
  <button type="button" class="pt-button pt-active">Home</button>
  <button type="button" class="pt-button">Pages</button>
  <button type="button" class="pt-button">Blog</button>
  <button type="button" class="pt-button">Calendar</button>
</div>
<div class="pt-button-group pt-vertical pt-align-left pt-large">
  <button type="button" class="pt-button pt-intent-primary pt-icon-document">Text</button>
  <button type="button" class="pt-button pt-intent-primary pt-icon-media pt-active">Media</button>
  <button type="button" class="pt-button pt-intent-primary pt-icon-link">Sources</button>
</div>
		</div>
	)
}
export default ButtonGroups;