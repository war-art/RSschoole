import { useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import './score.css'

 export const Score = () =>{
    const Data = useSelector((state)=>state.posts)
    let students = Data.filter((user)=>{
        return user.mentor === false
    })
    return(
        <table>
            <tbody>
                <tr className = 'SL-container' >
                <th className = 'SL-item score-item'>Username</th>
                <th className = 'SL-item score-item'>Total score</th>
                <th className = 'SL-item score-item'>Location</th>
                <th className = 'SL-item score-item'>Mentor name</th>
                <th className = 'SL-item score-item'>Telegram</th>
                </tr>
                {students.map((student)=>{
                    return(
                        <tr>
                            <th className = 'SL-item score-item'>{student.username}</th>
                            <th className = 'SL-item score-item'>{student.mark.reduce((a,b)=>a+b,0)}</th>
                            <th className = 'SL-item score-item'>{student.location}</th>
                            <th className = 'SL-item score-item'>{student.mentorName}</th>
                            <th className = 'SL-item score-item'>{student.telegram}</th> 
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}