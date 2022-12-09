import './App.css';
import Navbar from './componets/Navbar/Navbar'
import {Route, Routes } from 'react-router-dom';
import Footer from './componets/Footer/Footer';
import Formulario from './componets/Formulario/Formulario'
import Contenido from './componets/Contenido/Phone';
import Phone from './componets/Contenido/Phone';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <Navbar titulopagina="KODAK SMART HOME" color="gray"/>
      <Routes>
      
      <Route path='/Phone' element={<Phone />}/>
      <Route path='/Formulario' element={<Formulario />}/>
      <Route path='/Contenido' element={<Contenido />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
