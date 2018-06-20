import React from 'react';
import {Card,Elevation,Button} from '@blueprintjs/core';


const Cards = () => {
	return (
		<div>
			<Card interactive={true} elevation={Elevation.TWO}>
    <h5><a href="#">Card heading</a></h5>
    <p>Card content</p>
    <Button>Submit</Button>
</Card>
		</div>
	)
}
export default Cards;