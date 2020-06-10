import React from 'react';

const Button = ({state, eventHandler}) => {
	return (
		<input onClick={() => eventHandler._setOutputList(state.output)} type="submit" value="submit" />
	)
}

export default Button;
