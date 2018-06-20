import React, { Component } from 'react';
import { Button, Classes, Intent, Overlay, Switch } from "@blueprintjs/core";
import classNames from "classnames";

class Overlays extends Component {
	constructor(props){
		super();
		this.state = {
			isOpen: false,
			hasBackdrop: true,
			autoFocus: true,
			canEscapeKeyClose: true,
			canOutsideClickClose: true,
			enforceFocus: true,
			hasBackdrop: true,
		//	isOpen: false,
			usePortal: true,
		}
	}
	handleClose = () => this.setState({ isOpen: false });
	handleOpen = () => {
		this.setState({
			isOpen: !this.state.isOpen,
			hasBackdrop: !this.state.hasBackdrop,
		})
	}

	refHandlers = {
		button: (ref) => (this.button = ref),
};
	render(){
		const OVERLAY_EXAMPLE_CLASS = "docs-overlay-example-transition";
		const classes = classNames(Classes.CARD, Classes.ELEVATION_4, OVERLAY_EXAMPLE_CLASS, this.props.themeName);
		return(
			<div className="docs-dialog-example">
			<Button  elementRef={this.refHandlers.button} onClick={this.handleOpen} text="Show overlay" />
			<Overlay onClose={this.handleClose} className={Classes.OVERLAY_SCROLL_CONTAINER} {...this.state}>
							<div className={classes}>
											<h3>I'm an Overlay!</h3>
											<p>
															This is a simple container with some inline styles to position it on the screen. Its CSS
															transitions are customized for this example only to demonstrate how easily custom
															transitions can be implemented.
											</p>
											<p>
															Click the right button below to transfer focus to the "Show overlay" trigger button outside
															of this overlay. If persistent focus is enabled, focus will be constrained to the overlay.
															Use the <code>tab</code> key to move to the next focusable element to illustrate this
															effect.
											</p>
											<br />
											<Button intent={Intent.DANGER} onClick={this.handleOpen}>
															Close
											</Button>
											<Button onClick={this.focusButton} style={{ float: "right" }}>
															Focus button
											</Button>
							</div>
			</Overlay>
</div>
		)
	}
}

export default Overlays;