import './App.css';
import Navbar from './components/Navbar';
import Title from './components/Title';
import About from './components/About';
import Mywork from './components/Mywork';
import Footer from './components/Footer';
import SkillsSection from './components/SkillsSection';
import Contact from './components/Contact';
import {BrowserRouter , Route, Switch} from "react-router-dom";
import {Link} from "react-router-dom";
import NotFound from './components/NotFound';
import Homepage from './components/Homepage';
import Projectpage from './components/Projectpage';
import Addproject from './components/Addproject';
import Qualification from './components/Qualification';
import {Provider} from './Context';
import Allproject from './components/Allproject';
import Addrecommendation from './components/Addrecommendation';
function App() {
  return(
    <Provider>
    <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route exact path={'/contact'} component={Contact}/>
      <Route exact path={'/project/:id'} component={Projectpage}/>
      <Route excat path={'/addproject'} component={Addproject}/>
      <Route exact path={'/allproject'} component={Allproject}/>
      <Route exact path={'/writerecommendation'} component={Addrecommendation}/>
      <Route exact path={'/qualification'} component={Qualification} />
      <Route component={NotFound}/>
    </Switch>
    <Footer/>
    </BrowserRouter>
    </Provider>
  )
}
export default App;
