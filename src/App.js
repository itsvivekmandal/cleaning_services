import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import { Outlet, createBrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

const router = createBrowserRouter([
  {
    'path': "/",
    'element': <App />,
    'children': [
      {
        'path': "/",
        'element': <Home />
      },
      {
        'path': "/services",
        'element': <Services />
      },
      {
        'path': '/about',
        'element': <About />
      },
      {
        'path': '/contact',
        'element': <Contact />
      }
    ]
  }
]);

export default router;
