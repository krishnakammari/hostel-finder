import React, { Component } from 'react';
import './Navbar.css';
import hostel from './hostel.png'
import { Link } from 'react-router-dom';
import { FaAlignRight } from "react-icons/fa";
//import DisplayHostel from './DisplayHostel';

class Navbar extends Component {
    constructor(){
        super()
        this.state={
            isopen:false
        }
    }
    toggling = ()=>{
        this.setState({isopen:!this.state.isopen})
    }
    render() {
        return (
            <div >
                <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                    <Link to="/">
                        <img className="image" src={hostel} alt="logo" ></img>
                    </Link> 
                    <button type="button" className="nav-btn" onClick={this.toggling}>
                        <FaAlignRight className="nav-icon" />
                    </button>
                    </div>
                    <ul className={this.state.isopen?"nav-links show-nav":"nav-links" }>
                        
                        <li>
                            <Link to="/signin">
                                Signin
                            </Link>
                        </li>
                        <li>
                            <Link to="/register">
                                Register
                            </Link>
                        </li>
                        <li>
                            <Link to="/hostellist">
                                HostelList
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                    </ul>
                </div>
                    
                </nav>
                
            </div>

        );
    }
}

export default Navbar;