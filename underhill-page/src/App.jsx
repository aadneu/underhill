import 'bootstrap/dist/css/bootstrap.min.css';
import './components/styles.css'
import './components/Content/Projects/Games.css'
import Navbar from './components/Navbar';
import Content from './components/Content';

import {BrowserRouter} from 'react-router-dom'
import Footer from './components/Content/Footer';






function App() {
  
  return (
    <BrowserRouter>
    
      <div className="app-background">
        <Navbar/>
        <Content/>
        {/* <Footer/> */}
      </div>
    </BrowserRouter>

  )
}

export default App
