
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Pufi from './componentes/Pufi';
import './index.css';


function App() {
  return (
    <BrowserRouter>
      <div >
      <Routes>
        <Route exact path ='/' element={<Pufi/>} />
      </Routes> 
    </div>
    </BrowserRouter>
    
  );
}

export default App;
