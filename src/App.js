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
import Suzuki from './Components/Suzuki/Suzuki';
import Healthcare from './Components/Suzuki/Healthcare/Healthcare';
import Travel from './Components/Travel/Travel';

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
            <Route path="/project/1">
              <Suzuki></Suzuki>
            </Route>
            <Route path="/project/2">
              <Healthcare></Healthcare>
            </Route>
            <Route path="/project/3">
              <Travel></Travel>
            </Route>
            </Switch>
     <Footer></Footer>
        </BrowserRouter>
    </div>
  );
}

export default App;
