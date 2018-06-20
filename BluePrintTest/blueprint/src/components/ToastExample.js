import React, { Component } from 'react';
import {
	Button,
	Classes,
	Intent,
	IToasterProps,
	IToastProps,
	Position,
	ProgressBar,
	Switch,
	Toaster,
	ToasterPosition,
} from "@blueprintjs/core";

const  tosatElement = (<div>
	{/* <ProgressBar
	//	className={classNames("docs-toast-progress", { [Classes.PROGRESS_NO_STRIPES]: amount >= 100 })}
		intent={Intent.SUCCESS}
		value={0.5}
		inline
/> */}
<h4>Darling...</h4>
<img alt="Avatar" src={require('../components/FormElements/sdk.jpg')} width='20' height="20" />
<p> says..</p>
hi...
</div>)
//const appToaster =  Toaster.create();
const appToaster = Toaster.create({position: Position.RIGHT_BOTTOM});
class ToastExample extends Component {
	constructor(props){
		super();
		this.state= {
			isOpen: false,
		}
	}
 otherClickHandler = () => {
		console.log("this is click toast");
	}
	changeHandler = (color) => {
	appToaster.show({
		message:(tosatElement),//"This is Toast ajslkfjsalfjlasfjklaf fslkj kjfsad f ajf a;df ",
		intent: Intent.PRIMARY,
		icon: "tick",
		timeout: 5000,
		className: "recipe-toaster",
		position: Position.TOP_RIGHT,
		action: {
			onClick: () =>appToaster.show ({ message: "Isn't parting just the sweetest sorrow?" }),
			text: "Adieu",
},

button: "procure test"
	});
	}

	render(){
		return(
			<div>
				<Button intent = {Intent.SUCCESS} text="Show Toast" onClick={this.changeHandler} />

				{/* <Toast timeout={5000} message="hi i m a cool toast !" /> */}
			</div>
		)
	}
}
export default ToastExample;
