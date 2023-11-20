import './App.css';
import { HashRouter,Route,Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { NotFound } from './components/NotFound';
import { DefaultViewProjects } from './components/DefaultViewProjects';

function App() {
  return (
    <>
    <HashRouter>
        <Routes>
          <Route path='/' element={<Home/>}>
          <Route path='/' element={<DefaultViewProjects/>}/>
              <Route path=':slug' element={<Projects/>}/>
          </Route>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
    </HashRouter>
    </>
  );
}

export default App;
