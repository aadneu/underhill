import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';




function App() {
  
  return (
    <div >
      <div><Navbar/></div>
      <div className="content-wrapper"><Content/></div>
      <div><Footer/></div>
         
    </div>
  )
}

export default App
