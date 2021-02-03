import {useSelector} from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import React, { useState } from 'react'
import './task.css'
import {updatedPost} from '../../actions/posts'
import { useDispatch} from 'react-redux'
export const TaskCreator =()=>{

    const posts = useSelector((state)=>state.posts)
    const [taskname, setName] = useState()
    const [max, setMax] = useState()
    const dispatch = useDispatch()

    const changeHandler1 = (event) =>{
        event.preventDefault()
        setName({ ...taskname, text: event.target.value })
    }
    const changeHandler2 = (event) =>{
        event.preventDefault()
        setMax({ ...max, text: event.target.value })
    }
    const firstSubmit = () => {
        if(taskname !== undefined&&max !== undefined){
            posts.forEach((item)=>{
                item.tasks.push([taskname.text,max.text])
                dispatch(updatedPost(item._id,item))
               })
        }        
    }
    const delate = () => {
        if(posts[0].tasks.length===0){
            return
        }
        posts.forEach((item)=>{
            item.tasks.pop()
            dispatch(updatedPost(item._id,item))
           })
    }   
        let number =1
      const listCreate =()=>{
        return posts[0].tasks.map((task)=>{
            return (
                <div className='TC-container-item'> {number++}: {task[0]} ({task[1]} score) </div>
            )
        })
      }

    return(
        <div>
            <div className='TC-header'>There is only {posts[0].tasks.length} tasks for students</div>
            <div className='TC-list'>
            <div className='TC-container-item'>Tasks list</div>
                {listCreate()}
            </div>
            <div className='TC-container'>
                  <form  noValidate autoComplete="off" onChange={ changeHandler1 }>
                     <TextField className='input'  label='Write task name'></TextField>
                  </form> 
                  <form  noValidate autoComplete="off" onChange={ changeHandler2 }>
                     <TextField className='input'  label='Write max mark for task'></TextField>
                  </form> 
        </div>
            <div className = 'TC-buttons'>
            <Button variant="contained" onClick={firstSubmit} color="primary">Submit</Button>
            <Button variant="contained" onClick={delate} color="primary">Delate last task</Button>
            </div>
          
        </div>
    )
}