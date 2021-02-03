import React , {Component} from 'react';
import { NavLink } from 'react-router-dom'
import M from 'materialize-css';  

export class NavbarNoAuth extends Component {

    componentDidMount() {
        M.AutoInit();
    }

    render(){
        return (
            <nav>
                <ul id="dropdown1" className="dropdown-content">
                    <li><NavLink to="/login">Student</NavLink></li>
                    <li><NavLink to="/loginMentors">Mentor</NavLink></li>
                </ul>
                <ul id="dropdown2" className="dropdown-content">
                    <li><NavLink to="/register">Student</NavLink></li>
                    <li><NavLink to="/registerMentors">Mentor</NavLink></li>
                </ul>
                <div className="nav-wrapper blue-grey darken-1">
                    <NavLink to="/" className="brand-logo">Home</NavLink>
                    <ul className="right">
                        <li><a href='/#' className="dropdown-trigger"  data-target="dropdown1">Login<i className="material-icons right">arrow_drop_down</i></a></li>
                        <li><a href='/#' className="dropdown-trigger"  data-target="dropdown2">Register<i className="material-icons right">arrow_drop_down</i></a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}