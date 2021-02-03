import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import React from 'react';
import './checklist.css'
import {useDispatch,useSelector} from 'react-redux'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {updatedPost} from './../../actions/posts'



export const CheckList=()=>{
    const dispatch = useDispatch()
    let unuqiue= 98798044;
    const posts = useSelector((state)=>state.posts)
    let students = posts.filter(item=>{
        return item.mentor === false;
     })
    const [label, setLabel] = React.useState('');
    const [studentName, setLink] = React.useState()
    const [mark, setMark] = React.useState()

    const handleChange=(event)=>{

        setLabel(event.target.value);
    }
    const changeHandler = (event)=>{
        setLink({ ...studentName, text: event.target.value })
    }
    const changeHandler2 = (event)=>{
        setMark({ ...mark, text: event.target.value })
    }

    const submit=()=>{
        students.forEach(student=>{

            if(student.username===studentName.text){
               
                student.tasks[0].forEach((item,i)=>{
                   
                    if(item === label){
                        
                       if(mark.text<=Number(posts[0].tasks[i][1])&&mark.text>=0){  
                            student.mark[i]=Number(mark.text)
                            dispatch(updatedPost(student._id,student))
                            alert('mark is added in score')
                        }
                        else{
                            alert('Write true mark')
                        }
                    }
                })
            }
            else{
                alert('Invalid username')
            }
        })

    }
    
   

   
    return(
        <>
         <div className='Submit-block'>
         <FormControl >
        <InputLabel id="select-label">Tasks</InputLabel>
        <Select
          labelId="select-label"
          id="simple-select"
          value={label}
          onChange={handleChange}
        >
         { posts[0].tasks.map((item)=>{
        return (
            <MenuItem key = {unuqiue++}value={item[0]}>{item[0]}</MenuItem> 
        )
    })}
        </Select>
      </FormControl>
       <form  noValidate autoComplete="off" onChange={ changeHandler }>
            <TextField   label='Write username of student'></TextField>
        </form> 
        <form  noValidate autoComplete="off" onChange={ changeHandler2 }>
            <TextField   label='Write score for task'></TextField>
        </form> 
        <Button variant="contained" onClick={submit} color="primary">Submit</Button>
    </div>
      
        <table className='CL-table'>
            <tbody>
                <tr className='CL-block'>
                    <th className='CL-item'>Username</th>
                    <th className='CL-item'>Mentor's name</th>
                    {posts[0].tasks.map(item=>{
                        return(
                        <th className='CL-item'>{item[0]}</th>
                        )
                    })}

                </tr>
                {students.map(item=>{
                    return(
                    <tr>
                        <th className='CL-item'>{item.username}</th>
                        <th className='CL-item'>{item.mentorName}</th>
                        {item.tasks.map(task=>{
                            return (
                                <th className='CL-item'> <a href={task[2]}>Url</a> </th>
                            )
                        })}
                    </tr>)
                })}
            </tbody>
        </table>
    </>
    )
}