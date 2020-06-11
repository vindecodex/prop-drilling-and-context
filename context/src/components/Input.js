import React, { useContext } from 'react';
import { Context } from '../provider';

const Input = () => {
	const { states, events } = useContext(Context)
	return(
		<>
			<input type="text" value={states.output} onChange={(e) => events._setOutput(e.target.value)} placeholder="input anything" />
		</>
	)
}

export default Input;
