import React from 'react';
import { useSelector } from 'react-redux';
import './styles.css';


const StudentSchedule=()=>{
    let size = 25;
    let unique = 574845;
    const posts = useSelector((state) => state.posts);
    let table = []
    if(posts.length===0){
        for(let i=0;i<size;i++){
            table.push(
           <tr key={unique++} >
             <td className='rrow1' key={unique++}></td>
             <td className='rrow2' key={unique++}></td>
             <td className='rrow3' key={unique++}></td>
             <td className='rrow4' key={unique++}></td>
             <td className='rrow5' key={unique++}></td>
           </tr>)}
    }else{
            for(let i = 0;i<size;i++){
                table[i]=[posts[posts.length-1].date[i],posts[posts.length-1].time[i],posts[posts.length-1].place[i],posts[posts.length-1].topic[i],posts[posts.length-1].teacher[i]]
            }
            table =  table.map((item)=>{
                return <tr key={unique++}>
               <td  className='rrow1' >{item[0]}</td>
               <td  className='rrow2' >{item[1]}</td>
               <td  className='rrow3' >{item[2]}</td>
               <td  className='rrow4' >{item[3]}</td>
               <td  className='rrow5' >{item[4]}</td>
              </tr>
               })
              
    }

    return (
        <table className='students'>
          <tbody>
        {table}
        </tbody>

        </table>
    )
}
export default StudentSchedule