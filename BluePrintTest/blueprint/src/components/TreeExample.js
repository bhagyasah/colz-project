import React, { Component } from 'react';
import { Classes, Icon, ITreeNode, Tooltip, Tree } from "@blueprintjs/core";


class TreeExlample extends Component {

	constructor(props){
		super();
		this.state = {
			nodes: this.INITIAL_STATE,

		}
	}
 INITIAL_STATE = [
		{
						id: 0,
						hasCaret: true,
						icon: "folder-close",
						label: "Folder 0",
		},
		{
						id: 1,
						icon: "folder-close",
						isExpanded: true,
						label: <Tooltip content="I'm a folder <3">Folder 1</Tooltip>,
						childNodes: [
										{
														id: 2,
														icon: "document",
														label: "Item 0",
														secondaryLabel: (
																		<Tooltip content="An eye!">
																						<Icon icon="eye-open" />
																		</Tooltip>
														),
										},
										{
														id: 3,
														icon: "tag",
														label: "Organic meditation gluten-free, sriracha VHS drinking vinegar beard man.",
										},
										{
														id: 4,
														hasCaret: true,
														icon: "folder-close",
													//	isExpanded:true,

														label: <Tooltip content="foo">Folder 2</Tooltip>,
														childNodes: [
																		{ id: 5, label: "No-Icon Item" },
																		{ id: 6, icon: "tag", label: "Item 1" },
																		{
																						id: 7,
																						hasCaret: false,
																						icon: "folder-close",
																						label: "Folder 3",
																						childNodes: [
																										{ id: 8, icon: "document", label: "Item 0" },
																										{ id: 9, icon: "tag", label: "Item 1" },
																						],
																		},
														],
										},
						],
		},
];


//  handleNodeClick = (nodeData: ITreeNode, _nodePath: number[], e: React.MouseEvent<HTMLElement>) => {
// 	const originallySelected = ITreeNode.isSelected;
// 	if (!e.shiftKey) {
// 					this.forEachNode(this.state.nodes, n => (n.isSelected = false));
// 	}
// 	nodeData.isSelected = originallySelected == null ? true : !originallySelected;
// 	this.setState(this.state);
// };
handleNodeClick = (value1)=> {
	console.log("incoming data",JSON.stringify(value1));
}

handleNodeExpand = (value) => {
	console.log(value);
	value.
	Tree.isExpanded=true
}
	render(){
		return(
			<div style={{width: 400}}>
			<Tree
						contents={this.state.nodes}
						onNodeClick={this.handleNodeClick}
						onNodeCollapse={this.handleNodeCollapse}
						onNodeExpand={this.handleNodeExpand}
						className={Classes.ELEVATION_0}
    />
				</div>
		)
	}
}

export default TreeExlample;