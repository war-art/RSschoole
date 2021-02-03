import React, { useState, useEffect, useContext } from 'react'
import { useHttp } from '../../hooks/http.hook'
import { useMessage } from '../../hooks/message.hook'
import { AuthContext } from '../../context/AuthContext'

export const LoginPage = () => {
    const auth = useContext(AuthContext)
    const { loading, request, error , clearErrors } = useHttp()
    const message = useMessage()
    const [form, setForm] = useState({
        username: '',
        firstName: '',
        lastName: '',
        location: '',
        email: '',
        password: ''
    })

    useEffect(() => {
        message(error)
        clearErrors()
    }, [error, message, clearErrors])

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', { ...form })
            auth.login(data.token, data.userId, data.root)
            localStorage.setItem("email", form.email);
        } catch (e) {}
    }

    return (
        <div>
            <div className="row">
                <div className="col s6 offset-s3">
                    <h1>RS APP CLONE</h1>
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Login for students</span>
                            <div>
                                <div className="input-field">
                                    <i className="material-icons prefix">email</i>
                                    <input id="email" type="email" className="validate" autoComplete="off" name="email" onChange={ changeHandler } />
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="input-field">
                                <i className="material-icons prefix">lock_open</i>
                                    <input id="password" type="password" name="password" onChange={ changeHandler } />
                                    <label htmlFor="password">Password</label>
                                </div>
                            </div>
                        </div>
                        <div className="card-action right-align">
                            <button className="btn waves-effect waves-light" type="submit" name="action"  onClick={ loginHandler } disabled={ loading } >Login
                                <i className="material-icons right">login</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}