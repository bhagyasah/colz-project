import React, { Component } from 'react';
import {
	Button,
	Classes,
	InputGroup,
	Intent,
	Menu,
	MenuItem,
	Popover,
	Position,
	Spinner,
	Switch,
	Tag,
	Tooltip,
} from "@blueprintjs/core";

class InputGroups extends Component{
	constructor(props){
		super();

		this.state = {
			disable: false,
			filterValues: false,
			large: false,
			showPassword: false,
			tagValue: "",
		}

	}

	 handleLockClick = () => this.setState({ showPassword: !this.state.showPassword });

		handleDisableChange = () => {
			this.setState({disable: true})
		}
		handleFilterChange = (e) => {
			this.setState({filterValue: e.target.value})
		}
		handleLargeChange = () =>{
			this.setState({
				large: true,
			})
		}

		handleTagChange = (e) => {
			this.setState({
				tagValue: e.target.value,
			})
		}

	render(){
		const { disabled, filterValue, large, showPassword, tagValue } = this.state;

        const maybeSpinner = filterValue ? <Spinner className={Classes.SMALL} /> : undefined;

        const lockButton = (
            <Tooltip content={`${showPassword ? "Hide" : "Show"} Password`} disabled={disabled}>
                <Button
                    disabled={disabled}
                    icon={showPassword ? "unlock" : "lock"}
                    intent={Intent.WARNING}
                    minimal={true}
                    onClick={this.handleLockClick}
                />
            </Tooltip>
        );
        const permissionsMenu = (
            <Popover
                content={
                    <Menu>
                        <MenuItem text="can edit" />
                        <MenuItem text="can view" />
                    </Menu>
                }
                disabled={disabled}
                position={Position.BOTTOM_RIGHT}
            >
                <Button disabled={disabled} minimal={true} rightIcon="caret-down">
                    can edit
                </Button>
            </Popover>
        );
        const resultsTag = <Tag minimal={true}>{Math.floor(10000 / Math.max(1, Math.pow(tagValue.length, 2)))}</Tag>;
        return (
            <div className="docs-input-group-example docs-flex-row">
                <div className="docs-flex-column">
                    <InputGroup
                        disabled={disabled}
                        large={large}
                        leftIcon="filter"
                        onChange={this.handleFilterChange}
                        placeholder="Filter histogram..."
                        rightElement={maybeSpinner}
                        value={filterValue}
                    />
                    <InputGroup
                        disabled={disabled}
                        large={large}
                        placeholder="Enter your password..."
                        rightElement={lockButton}
                        type={showPassword ? "text" : "password"}
                    />
                </div>
                <div className="docs-flex-column">
                    <InputGroup
                        disabled={disabled}
                        large={large}
                        leftIcon="tag"
                        onChange={this.handleTagChange}
                        placeholder="Find tags"
                        rightElement={resultsTag}
                        value={tagValue}
                    />
                    <InputGroup
                        disabled={disabled}
                        large={large}
                        placeholder="Add people or groups..."
                        rightElement={permissionsMenu}
                    />
                </div>
            </div>
        );
}}
export default InputGroups;