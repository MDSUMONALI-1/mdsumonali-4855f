import logo from './logo.svg';
import './App.css';
import './../src/Firebase/Firebase.config'
import Home from './Components/Home/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';
import Blog from './Components/Blogs/Blog';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/projects">
              <Projects></Projects>
            </Route>
            <Route path="/blogs">
              <Blog></Blog>
            </Route>
            </Switch>
     <Footer></Footer>
        </BrowserRouter>
    </div>
  );
}

export default App;
