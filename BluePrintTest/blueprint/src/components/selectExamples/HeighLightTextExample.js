import React, { Component } from 'react';
import { SIGURG } from 'constants';

class HeighLightTextExample extends Component {
	constructor(props){
		super();
		this.state = {
			text: [],
		}
	}

	render(){
		const fulltext = "my name is bhagya";
		const query = "bhagya";
		const tokens=[];
		const words=fulltext.split(/\s+/);
		const regexp = new RegExp(query,"gi");
		const match= regexp.exec(fulltext);
		const before = fulltext.slice(0,fulltext.length-match[0].length);
		tokens.push(before);
		console.log(match[0]);
		tokens.push(<strong key={1}>{match[0]}</strong>);
		console.log(tokens);

		//console.log(match);
		//console.log(words);

		return(
			<div>
  {tokens.map(str => <div>{str}</div>)}
			</div>
		)
	}
}
export default HeighLightTextExample;


