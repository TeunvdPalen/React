import { Routes, Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Nav from './Nav';


function App() {
    return (
        <div>
            <h1>My awesome website</h1>
            <Nav />
            <Routes>
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/' element={<Home />} />
            </Routes>
        </div>
    )
}

export default App