import React, { Component } from 'react';
import {Dialog,Button,Intent} from '@blueprintjs/core';

class Dialogs extends Component {
	constructor(props){
		super();
		this.state = {
			isOpen: false,
		}
	}
	clickHander = () => {
		this.setState({isOpen: !this.state.isOpen})
	}

	render(){
		return(
			<div>
				<Button text="click me to show dialog" onClick={this.clickHander} />
				<Dialog
								icon="inbox"
								isCloseButtonShown
								transitionDuration={1000}
								lazy={false}
								usePortal={true}
								isOpen={this.props.isOpen}
								onClose={this.clickHander}
								title="Dialog header"
								>
									<div className="pt-dialog-body">Some content</div>
									<div className="pt-dialog-footer">
													<div className="pt-dialog-footer-actions">
																	<Button text="Secondary" />
																	<Button
																		intent={Intent.PRIMARY}
																		onClick={this.clickHander}
																		text="Primary"
																	/>
													</div>
									</div>
					</Dialog>
			</div>
		)
	}
}
export default Dialogs;