import './App.css';
import NavBar from './components/navbar';
import Counter from './components/counter';
import Counters from './components/counters';
import React, { Component } from 'react';


class App extends Component {


  state = { 
    counters: [
        {id: 1 , value: 2},
        {id: 2 , value: 3},
        {id: 3 , value: 0},
        {id: 4 , value: 1},
    ]
 };

 constructor(){
  super(); 
  console.log('App - constructor'); // get called at app initialization 
 }

 componentDidMount(){
   console.log('App - componentDidMount'); // get called after render method executed.
 }


 handleDelete = counterId => {
    //console.log("event handleDelete called",counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);

    this.setState({
        counters 
    });
 };

 handleIncrement = counter => {
   // console.log("event increment called",counter);

   const counters = [...this.state.counters];
    const index = counters.indexOf(counter);

    counters[index] = { ...counter };
    counters[index].value++;

     this.setState({counters});
 };

 handleDecrement = counter => {
  // console.log("event increment called",counter);

  const counters = [...this.state.counters];
   const index = counters.indexOf(counter);

   counters[index] = { ...counter };
   counters[index].value--;

    this.setState({counters});
};


 handleReset =  () =>{
   const counters =  this.state.counters.map( c => {
        c.value = 0;
        return c;
    });

    this.setState({counters});
 }




 render(){
  return (
    <React.Fragment>
      <NavBar 
         totalCounters = {this.state.counters.filter( c => c.value>0).length }
       />

     <main className="container">
          <Counters  
          counters = {this.state.counters}
          onReset= {this.handleReset} 
          onIncrement= {this.handleIncrement}
          onDelete= {this.handleDelete}
          onDecrement= {this.handleDecrement}
        
          />
          
      </main>
    </React.Fragment>

  );
 }
}

export default App;
