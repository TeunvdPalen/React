import ReactDOM from 'react-dom';
import App from './App';
import AppHooks from './AppHooks';
import Clock from './Clock';
import KanyeQuote from './KanyeQuote';

ReactDOM.render(<div>
	<App />
	<AppHooks />
	<KanyeQuote />
	<Clock />
</div>,document.getElementById('root'));