import './App.css'
// import './Components/Header/Header.css'
// import './Pages/Home/Home.css'

import Heading from './Components/Header/Heading';
import RouteComp from './Utility/Routes'
import Nav from './Components/Header/Nav'
import Details from './Utility/Details';
function App() {
  return (
    <div className='Bodywrap'>
      <Details>
    <Heading/>
    <Nav/>    
    <RouteComp/>
    </Details>
    </div>
  );
}

export default App;
