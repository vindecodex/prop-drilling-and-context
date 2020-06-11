import React, { useContext } from 'react';
import { Context } from '../provider'

const Output = () => {
	const { states } = useContext(Context);
	return(
		<>
			<ul>
				{ states.outputList.map(item => <li>{item}</li> )}
			</ul>
		</>
	)
}

export default Output;
