import ReactDOM from 'react-dom';

import AppHooks from './AppHooks';
import KanyeQuote from './KanyeQuote';
import Clock from './Clock'


ReactDOM.render(<div>
    <AppHooks />
    <KanyeQuote />
    <Clock />
</div>, document.getElementById('root'));
