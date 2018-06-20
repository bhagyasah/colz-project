import React, { Component } from 'react';
import {Tabs,Tab,TabId,Navbar,Classes} from '@blueprintjs/core';
import './App.css'
class TabsExample extends Component {
	constructor(props){
		super();
		this.state = {
			navbarTabId: "HOME",
		}
	}
	changeHandler = (tabId) => {
		console.log(tabId);
		this.setState({navbarTabId:tabId})
	}


	 ReactPanel= (
		<div>
						<h3>Example panel: React</h3>
						<p className={Classes.RUNNING_TEXT}>
										Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology
										stack, it's easy to try it out on a small feature in an existing project.
						</p>
		</div>
);

 AngularPanel=(
		<div>
						<h3>Example panel: Angular</h3>
						<p className={Classes.RUNNING_TEXT}>
										HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic
										views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting
										environment is extraordinarily expressive, readable, and quick to develop.
						</p>
		</div>
);

EmberPanel= (
		<div>
						<h3>Example panel: Ember</h3>
						<p className={Classes.RUNNING_TEXT}>
										Ember.js is an open-source JavaScript application framework, based on the model-view-controller (MVC)
										pattern. It allows developers to create scalable single-page web applications by incorporating common idioms
										and best practices into the framework. What is your favorite JS framework?
						</p>
						<input className={Classes.INPUT} type="text" />
		</div>
);

BackbonePanel=(
		<div>
						<h3>Backbone</h3>
		</div>
);


	render(){
		return (
			<div className="docs-tabs-example">
				<Navbar>
			  <Navbar.Group>
							{/* controlled mode & no panels (see h1 below): */}
							<Tabs
											animate={true}
											id="navbar"
											large={true}
											onChange={this.changeHandler}
											selectedTabId={this.state.navbarTabId}
							>
											<Tab id="Home" title="Home" />
											<Tab id="Files" title="Files" />
											<Tab id="Builds" title="Builds" />
							</Tabs>
			</Navbar.Group>
	</Navbar>
	<h1 style={{ marginTop: 30, marginBottom: 30 }}>{this.state.navbarTabId}</h1>
	<Tabs

						animate={this.state.animate}
						id="TabsExample"
						key={this.state.vertical ? "vertical" : "horizontal"}
						onChange={this.handleTabChange}
						renderActiveTabPanelOnly={this.state.activePanelOnly}
						vertical={true}
		>
						<Tab id="rx" title="React" panel={this.ReactPanel} />
						<Tab id="ng" title="Angular" panel={this.AngularPanel} />
						<Tab id="mb" title="Ember" panel={this.EmberPanel} />
						<Tab id="bb" disabled={true} title="Backbone" panel={this.BackbonePanel} />

						<Tabs.Expander className="popover-content" />
						<input className={Classes.INPUT} type="text" placeholder="Search..." />

		</Tabs>
			</div>
		)
	}
}
export default TabsExample