import React from 'react'
import {Switch , Route, Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Aboutus from './components/AboutUs/Aboutus';
import Products from './components/Products/Products';
import Carousel from './components/Carousel/Carousel'
import './App.css';

const App = () => {
  return (
    <>        
      <Header/>  
      <br/>
      <hr className='col-10 mx-auto line'/>     
      <Aboutus/>
      <hr className='col-10 mx-auto text-white my-4'/>
      <Products/>
      <hr className='col-10 mx-auto text-white my-4'/>
      <Carousel/>
      <hr className='col-10 mx-auto text-white my-4'/>
      <Switch>                    
          <Redirect to='/'/>
      </Switch>        
      <Footer/> 

           
    </>
  )
}

export default App
