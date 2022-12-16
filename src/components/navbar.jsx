import React, { Component } from 'react';


//Stateless Functional Component. 

const NavBar = ({totalCounters}) => {

    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <a href="#" className="navbar-brand">

                    Navbar{" "}
                    
                     <span className="badge badge-pill badge-secondary">
                        { totalCounters}
                    </span>
                </a>
            </nav>
        </div>
    );
};



// class Component. 
/*
class NavBar extends Component {
    
    render() { 
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <a href="#" className="navbar-brand">

                        Navbar{" "}
                        
                         <span className="badge badge-pill badge-secondary">
                            {this.props.totalCounters}
                        </span>
                    </a>
                </nav>
            </div>
        );
    }
}
 */


export default NavBar;
