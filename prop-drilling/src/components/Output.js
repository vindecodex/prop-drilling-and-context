import React from 'react';

const Output = ({state}) => {
	return (
		<>
			<ul>
				{ state.outputList.map(item => <li>{item}</li>) }
			</ul>
		</>
	)
}

export default Output;
