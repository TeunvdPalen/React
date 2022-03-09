import ReactDOM from 'react-dom';
import Counter from './Counter'
import SearchInput from './SearchInput'

ReactDOM.render(
  <div>
    <SearchInput />
    <Counter start={5}/>
    <Counter start={3}/>
    <Counter start={0}/>
  </div>, document.getElementById('root'))
