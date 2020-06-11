import React, { useContext } from 'react';
import { Context } from '../provider';

const Button = () => {
	const { states, events } = useContext(Context);
	return(
		<>
			<input type="submit" value="submit" onClick={() => events._setOutputList(states.output)} />
		</>
	)
}

export default Button;
