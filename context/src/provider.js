import React, { createContext, useState } from 'react';

export const Context = createContext();

const Provider = ({ children }) => {
	const [output, setOutput] = useState('');
	const [outputList, setOutputList] = useState([]);

	const states = {
		output,
		outputList
	}

	const events = {
		_setOutput: text => {
			setOutput(text);
		},
		_setOutputList: text => {
			setOutputList([...outputList, text]);
			setOutput('');
		}
	}

	return (
		<>
			<Context.Provider value={{states, events}}>
				{children}
			</Context.Provider>
		</>
	)
}

export default Provider;
