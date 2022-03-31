import { useState } from "react";

function AppHooks() {

	const [visible, setVisible] = useState(false);
	const [input, setInput] = useState('');

	return <div>
		<button onClick={() => setVisible(!visible)}>{visible ? 'Hide' : 'Show'}</button>
		{visible && <div>
			<input value={input} onChange={(e) => setInput(e.target.value)} />
			<p>This is jus another text with input: {input}</p>
		</div>}
	</div>
}

export default AppHooks;