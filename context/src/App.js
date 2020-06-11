import React from 'react';
import Form from './components/Form'
import Provider from './provider.js'

const App = () => {
	return (
		<>
			<Provider>
				<Form />
			</Provider>
		</>
	)
};

export default App;
