import React from 'react';
import Input from './Input';
import Button from './Button';
import Output from './Output';

const Form = ({state, eventHandler}) => {
	return (
		<>
		<Input state={state} eventHandler={eventHandler} />
		<Button state={state} eventHandler={eventHandler} />
		<Output state={state} />
		</>
	)
}

export default Form;
