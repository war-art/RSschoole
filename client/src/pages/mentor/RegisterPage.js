import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useHttp } from '../../hooks/http.hook'
import { useMessage } from '../../hooks/message.hook'
import { useDispatch} from 'react-redux'
import {createPost} from '../../actions/posts'


export const RegisterPageMentors = () => {
    const { loading, request, error , clearErrors } = useHttp()
    const history = useHistory()
    const message = useMessage()
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        username: '',
        firstName: '',
        lastName: '',
        location: '',
        email: '',
        password: ''
    })
    const [form2, setForm2] = useState({
        username: '',
        firstName: '',
        lastName: '',
        location: '',
        email: '',
        mentor: true,
        telegram:'Not given',
        phoneNumber:'Not given',
        about:`About info isn't written`,
        english:'Not given',
        education:'Empty',
        mark:[],
        tasks:[],
        mentorName:''  ,
        submitedTasks:[]
       
    })
    useEffect(() => {
        message(error)
        clearErrors()
    }, [error, message, clearErrors])

    const changeHandler = event => {
        event.preventDefault()
        setForm({ ...form, [event.target.name]: event.target.value })
        setForm2({ ...form2, [event.target.name]: event.target.value })
        
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/registerMentor', 'POST', { ...form })
            message(data.message)
            setTimeout(() => {
                history.push('/loginMentors')
            }, 1000) 
            dispatch(createPost(form2))
            localStorage.setItem("email", form2.email);
        } catch (e) {}
    }

    return (
        <div>
            <div className="row">
                <div className="col s6 offset-s3">
                    <h1>RS APP CLONE</h1>
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Registration for mentors</span>
                            <div>
                                <div className="input-field">
                                    <i className="material-icons prefix">account_circle</i>
                                    <input id="username" type="text" autoComplete="off" name="username" onChange={ changeHandler } />
                                    <label htmlFor="username">Username</label>
                                </div>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input id="first_name" type="text" autoComplete="off" name="firstName" onChange={ changeHandler } />
                                        <label htmlFor="first_name">First Name</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input id="last_name" type="text" autoComplete="off" name="lastName" onChange={ changeHandler } />
                                        <label htmlFor="last_name">Last Name</label>
                                    </div>
                                </div>
                                <div className="input-field">
                                <i className="material-icons prefix">place</i>
                                    <input id="location" type="text" name="location" autoComplete="off" onChange={ changeHandler } />
                                    <label htmlFor="location">Location</label>
                                </div>
                                <div className="input-field">
                                    <i className="material-icons prefix">email</i>
                                    <input id="email" type="email" className="validate" autoComplete="off" name="email" onChange={ changeHandler } />
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="input-field">
                                <i className="material-icons prefix">lock_open</i>
                                    <input placeholder="Ask your personal password from administration" id="password" type="password" name="password" disabled={true} />
                                </div>
                            </div>
                        </div>
                        <div className="card-action right-align">
                            <button className="btn waves-effect waves-light" type="submit" name="action"  onClick={ registerHandler } disabled={ loading } >Create account
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}