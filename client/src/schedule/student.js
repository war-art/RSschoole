import React,{useEffect} from 'react';
import StudentSchedule from './components/Posts/studentSide'

import {
    Container,
    Grow,
} from '@material-ui/core'
import {useDispatch} from 'react-redux'
import {getPosts} from './actions/posts'

const StudentTable = () => {

  

    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(getPosts())
    },[dispatch])
    return ( 
    <Container maxWidth = 'lg'>
        <Grow in>
        <div>
            <div  justify="center">
                    <div   xs={12} sm={4}>
                    <StudentSchedule />
                    </div>
            </div>
        </div>
        </Grow>
    </Container>
    )
}
export default StudentTable
