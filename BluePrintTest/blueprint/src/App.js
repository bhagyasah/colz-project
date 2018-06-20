import React, { Component } from 'react';
import {Button, Alert,Intent} from '@blueprintjs/core';
import '../node_modules/@blueprintjs/core/lib/css/blueprint.css';
import '../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css';
import '../node_modules/@blueprintjs/datetime/lib/css/blueprint-datetime.css';
import '../node_modules/@blueprintjs/select/lib/css/blueprint-select.css';
import AlertDialogue from './components/Alert';
import BreadCrumbs from './components/BreadCrumbs';
import Buttons from './components/Buttons';
import ButtonsGroups from './components/ButtonGroups';
import Cards from './components/Cards';
import Collapse from './components/Collapse';
import Contextmenu from './components/ContextMenu';
import Dialogs from './components/Dialogos';
import EditableTexts from './components/EditTableText';
import Lables from './components/FormElements/Lable';
import FormGroup from './components/FormElements/FormGroups';
import Checkboxs from './components/FormElements/CheckBox';
import RadioGroups from './components/FormElements/RadioGroup';
import TextAreas from './components/FormElements/TextAreas';
import TextInputs from './components/FormElements/TextInputs';
import InputGroups from './components/FormElements/TextGroups';
import ControlGroups from './components/FormElements/ControlGroups';
import Selects from './components/FormElements/Selects';
import FileInput from './components/FormElements/FIleInputs';
import FileInpute from './components/FormElements/FIleInputs';
import NumericInputs from './components/FormElements/NumericInputs';
import HotkeysExample from './components/Hotkeys';
import Icons from './components/Icons';
import MemuExample from './components/Menus';
import MenusExample from './components/Menus';
import OverLays from './components/Overlays';
import PopoverExample from './components/Popover1';
import ProgressBarExample from './components/ProgressBarExample';
import SliderExample from './components/SliderExample';
import TabsExample from './components/TabsExample';
import TagExample from './components/TagExample';
import ToastExample from './components/ToastExample';
import TooltipExample from './components/ToolTipExample';
import TreeExample from './components/TreeExample';
import DatePickerExample from './components/DateAndTimePicker/DatePicker';
import DateRangePicker from './components/DateAndTimePicker/DateRangePicker';
import TimePickerExample from './components/DateAndTimePicker/TimePicker';
import DateTimePickerExample from './components/DateAndTimePicker/DateAndTImePicker';
import DateInputExample from './components/DateAndTimePicker/DateInput';
import DateRangeInputExample from './components/DateAndTimePicker/DateTimeRangeInput';
import SelectExample from './components/selectExamples/Select';
import HeighLightedTextExample from './components/selectExamples/HeighLightTextExample';
import SuggestExample from './components/selectExamples/Suggest';
import MultiSelectExample from './components/selectExamples/Multiselect';
import { ArrayExample1 } from './components/ArrayAndObjectExample/array1';
//import ArrayExample from './components/ArrayAndObjectExample/array1';
import {collectionExample} from './components/ArrayAndObjectExample/collection';


class App extends Component {
  render() {
    console.log(collectionExample());
    //console.log(ArrayExample1());
    return (
      <div>
      {/* <h1>Alert Example</h1>
      <AlertDialogue />
      <h1>BreadCrumbs Example</h1>
      <BreadCrumbs />
      <h1>Buttons Example</h1>
      <Buttons />
      <h1>ButtonGroups Example</h1>
      <ButtonsGroups />
      <h1>Cards....</h1>
      <Cards />
      <h1>Collapse type of sutter down style </h1>
      <Collapse />
      <h1>Context menu...</h1>
      <Contextmenu />
      <h1>Dialogs example</h1>
      <Dialogs />
      <h1>EditableText examples</h1>
      <EditableTexts /> */}
      {/* <FormGroup /> */}
      {/* <Checkboxs /> */}
      {/* <RadioGroups /> */}
      {/* <TextAreas /> */}
      {/* <TextInputs /> */}
      {/* <InputGroups /> */}
      {/* <ControlGroups /> */}
      {/* <Selects /> */}
      {/* <FileInpute /> */}
      {/* <NumericInputs /> */}
      {/* <HotkeysExample /> */}
      {/* <Icons /> */}
      {/* <MenusExample /> */}
      {/* <OverLays /> */}
      {/* <PopoverExample /> */}
      {/* <ProgressBarExample /> */}
      {/* <SliderExample /> */}
      {/* <TabsExample /> */}
      {/* <TagExample /> */}
      {/* <ToastExample /> */}
      {/* <TooltipExample /> */}
      {/* <TreeExample /> */}
      {/* <DatePickerExample /> */}
      {/* <DateRangePicker /> */}
      {/* <TimePickerExample /> */}
      {/* <DateTimePickerExample /> */}
      {/* <DateInputExample /> */}
      <DateRangeInputExample />
      {/* <SelectExample />
      <HeighLightedTextExample /> */}
      {/* <SelectExample /> */}
      {/* <SuggestExample /> */}
      {/* <MultiSelectExample/> */}

      </div>
    );
  }
}

export default App;
