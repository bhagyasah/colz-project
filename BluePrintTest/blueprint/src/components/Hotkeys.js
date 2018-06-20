import React, { Component } from 'react';
import {HotkeysTarget,Hotkeys,Hotkey} from '@blueprintjs/core';

class HotkeyExample extends Component {
constructor(props){
	super();
	this.state={
		isOpen: false,
	}
}

renderHotkeys = () => {
	return <Hotkeys>
            <Hotkey
                global={true}
                combo="shift + a"
                label="Be awesome all the time"
																onKeyDown={() => console.log("Awesome!")}
																onKeyUp = {() => console.log("key down")}
            />
            <Hotkey
												    //global={true}
                group="Fancy shortcuts"
                combo="f"
                label="Be fancy only when focused"
                onKeyDown={() => console.log("So fancy!")}
            />
        </Hotkeys>;
}
render(){
	return(
		<div>
		custom contents..
		</div>
	)
}
}
export default HotkeysTarget(HotkeyExample);

