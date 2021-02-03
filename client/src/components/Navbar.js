import React, { useContext,useState,useEffect, useRef } from 'react'
import { NavLink, useHistory, } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'


import M from 'materialize-css'
 
export const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)
    let [status1,setStatus1] = useState('flex');
    let [status2,setStatus2] = useState('none');
    let menuRef = useRef()
    useEffect(()=>{
        document.addEventListener('mousedown',(e)=>{
            if(menuRef.current=== null){
                return
            }
      
          if(!menuRef.current.contains(e.target)){
            setStatus1('flex')
            setStatus2('none')
          }
        })
    })
    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    M.AutoInit();

    return (
        <nav> 
            
            <div className="nav-wrapper blue-grey darken-1">
                    <NavLink to="/" className="brand-logo">Home</NavLink>
                    <ul className="right">
                         <li onClick={()=>{ setStatus1('none'); setStatus2('flex'); }} className = {status1}><div className='pointer' >My Profile<i className="material-icons right">arrow_drop_down</i></div></li>
                         <ul ref = {menuRef} className = {[status2,'drop'].join(' ')} >
                              <li><NavLink to="profile"><i className="material-icons left">visibility</i>View</NavLink></li>
                              <li><NavLink to="#"><i className="material-icons left">border_color</i>Edit</NavLink></li>
                              <li className="divider"></li>
                              <li><a href="/#" onClick={logoutHandler}><i className="material-icons left">exit_to_app</i>Logout</a></li>
                        </ul>
                    </ul>
                    
            </div>
        </nav>
    )
}