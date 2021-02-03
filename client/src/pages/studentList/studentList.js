import {useSelector} from 'react-redux'
import './studentList.css'
import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch} from 'react-redux'
import {updatedPost} from './../../actions/posts'

export const StudentList=  () =>{

    const Data = useSelector((state)=>state.posts)
    const dispatch = useDispatch()
    let students = Data.filter((student)=>{
        return (student.mentor===false)&&(student.mentorName==='')
    })
    const [form, setForm] = useState()

    const changeHandler=(event)=>{
        event.preventDefault()
        setForm({ ...form, text: event.target.value })
    }
    const submit = ()=>{
        students.forEach((item)=>{
            
            if(item.username===form.text){
                let data = item
                data.mentorName = localStorage.getItem('email')
                
                dispatch(updatedPost(item._id,data))
            }else{
                alert('There is not this kind of student')
            }
        })
    }
    return(

        <> 
        <div className='SL-input-container'>
        <form  noValidate autoComplete="off" onChange={ changeHandler }>
            <TextField className='input'  label='Write username of student who you want to teach'></TextField>
        </form> 
        <Button variant="contained" onClick={submit} color="primary">Submit</Button>
        </div>
        
       
        <table>
            <tbody>
            <tr className = 'SL-container'>
                 <th className = 'SL-item'>Username</th>
                 <th className = 'SL-item'>Location</th>
                 <th className = 'SL-item'>Student's mentor</th>
                 <th className = 'SL-item'>Telegram of student</th>
             </tr>
                {students.map((item) => {
                    return(
                    <tr className = 'SL-container'>
                        <th>{item.username}</th>
                        <th>{item.location}</th>
                        <th>{item.mentorName}</th>
                        <th>{item.telegram}</th>
                    </tr>)
                })}
            </tbody>
        </table>
        </>
    )
}