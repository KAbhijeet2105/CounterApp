import { isDisabled } from '@testing-library/user-event/dist/utils';
import React, { Component } from 'react';


class Counter extends Component {

    componentDidUpdate(){
        console.log("counter component did update");
    }


    componentWillUnmount(){
        console.log("counter component will unmount ie. counter gets deleted.");
    }




    render() { 

        return (
            <div> 

<div className="container">
  <div className="row">

    <div className="col-1">

    <span className={this.getBadgeClasses()} > {this.ctr()} </span>
    </div>
    <div className="col">
    
    <button 
                onClick={ () => this.props.onIncrement(this.props.counter)  }
                className="btn btn-secondary btn-sm"
            > + </button>

             <button
                 disabled= {(this.props.counter.value === 0)}
                onClick={ () => this.props.onDecrement(this.props.counter)  }
                className="btn btn-secondary btn-sm m-2"
            > - </button>

            <button
            onClick={() => this.props.onDelete(this.props.counter.id) } 
            className="btn btn-danger btn-sm m-2 "
            
            >x</button>


    </div>
    
  </div>
</div>




          
           
     

            </div>
            );
    }



    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

//writing function 
     ctr(){
        const {value} = this.props.counter; 
        return (value === 0) ? "Zero" : value;
     }

}
 

export default Counter;