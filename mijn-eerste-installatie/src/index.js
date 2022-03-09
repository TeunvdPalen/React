import React from 'react'
import ReactDOM from 'react-dom'
import Welcome from './Welcome'


ReactDOM.render(
	<Welcome />,	
	document.getElementById('root')
)

import ReactDOM from 'react-dom';
import Counter from './Counter'

ReactDOM.render(<div>
	<Counter />
	<Counter />
	<Counter />
</div>)