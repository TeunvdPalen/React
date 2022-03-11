import ReactDOM from 'react-dom';
import Counter from './Counter'
import Leerlingen from './Leerlingen';
import SearchInput from './SearchInput'
import SharedCounter from './SharedCounter';

ReactDOM.render(
  <div>
    <Leerlingen />
    <hr />
    <SharedCounter />
    <hr />
    <SearchInput />
    <hr />
    <Counter start={5}/>
    <Counter start={3}/>
    <Counter start={0}/>
  </div>, document.getElementById('root')
)
