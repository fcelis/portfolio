import React from 'react';
import { About, Testimonial, Footer, Header, Skills, Work} from "./container";
import {Navbar} from './components';
import './App.scss';
const App = () => {
  return (
     <div className="App">
         <Navbar/>
       <Header />
       <About />
       <Work />
       <Skills/>
       <Testimonial/>
       <Footer/>
     </div>
  );
}

export default App;