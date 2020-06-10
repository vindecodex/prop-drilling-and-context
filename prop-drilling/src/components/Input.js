import React from 'react';

const Input = ({state, eventHandler}) => {
	return (
		<input 
		type="text" 
		onChange={(e) => eventHandler._setOutput(e.target.value)} 
		value={state.output} 
		placeholder="enter anything..." 
		/>
	)
}

export default Input;
