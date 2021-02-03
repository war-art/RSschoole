import React,{useState} from 'react';
import {Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux'
import './styles.css';
import {createPost,updatePost} from '../../actions/posts'

const Posts = () => {
  let items = [];
  let size = 25
  let unique = 100;

  const dispatch = useDispatch();
  
  const postData ={
    data:[],
    time:[],
    Place:[],
    topic:[],
    teacher:[],

}

  const posts = useSelector((state) => state.posts);
  const [editable,Edit] = useState(false);
  function table(size){
    for(let i=0;i<size;i++){
      items.push(
     <tr key={unique++} >
       <td className='rrow1' key={unique++} suppressContentEditableWarning={true} contentEditable={editable}></td>
       <td className='rrow2' key={unique++} suppressContentEditableWarning={true} contentEditable={editable}></td>
       <td className='rrow3' key={unique++} suppressContentEditableWarning={true} contentEditable={editable}></td>
       <td className='rrow4' key={unique++} suppressContentEditableWarning={true} contentEditable={editable}></td>
       <td className='rrow5' key={unique++} suppressContentEditableWarning={true} contentEditable={editable}></td>
     </tr>)}}
  table(size)
  let info = []
  
function submit(){

  let date =[];
  let time =[];
  let place =[];
  let topic =[];
  let teacher = [];
  let first = document.querySelectorAll('.rrow1');
  let second= document.querySelectorAll('.rrow2');
  let third = document.querySelectorAll('.rrow3');
  let fourth= document.querySelectorAll('.rrow4');
  let fifth = document.querySelectorAll('.rrow5');

  for(let i =0;i<first.length;i++){
   date.push(first[i].textContent);
   time.push(second[i].textContent);
   place.push(third[i].textContent);
   topic.push(fourth[i].textContent);
   teacher.push(fifth[i].textContent)
  }

 
  postData.date=date;
  postData.time=time;
  postData.place=place;
  postData.topic=topic;
  postData.teacher=teacher;
  if(posts.length!==0){
    dispatch(updatePost(posts[posts.length-1]._id,postData))  
  } else{
    dispatch(createPost(postData))
  }

  

}  

if(posts.length!==0){
  for(let i = 0;i<size;i++){
  info[i]=[posts[posts.length-1].date[i],posts[posts.length-1].time[i],posts[posts.length-1].place[i],posts[posts.length-1].topic[i],posts[posts.length-1].teacher[i]]
}}
const [ButtonText,setButtonText] = useState('Edit');

 function change(){
   if(editable === true){
    setButtonText('Edit')
    Edit(false)
  
   }else{
    setButtonText('Submit')
    Edit(true)
    
   }
  

 }


  return (
    !posts.length ? <div>
    <table className='students'>
      <tbody>
      
       {items.map((item)=>{
         return item
       })}
      </tbody>

    </table>
      <Button variant = 'contained' color='secondary' size='small' onClick={()=>{submit();change()}/*setCurrentId(posts[posts.length-1]._id)*/ } fullWidth>{ButtonText}</Button>
    </div> 
    : (<> 
        <table className='students'>
          <tbody>
         
          {info.map((item)=>{
           return <tr key={unique++}>
          <td  className='rrow1' suppressContentEditableWarning contentEditable={editable}>{item[0]}</td>
          <td  className='rrow2' suppressContentEditableWarning contentEditable={editable}>{item[1]}</td>
          <td  className='rrow3' suppressContentEditableWarning contentEditable={editable}>{item[2]}</td>
          <td  className='rrow4' suppressContentEditableWarning contentEditable={editable}>{item[3]}</td>
          <td  className='rrow5' suppressContentEditableWarning contentEditable={editable}>{item[4]}</td>
         </tr>
          })}
          

          </tbody>

        </table>
        <Button variant = 'contained' color='secondary' size='small' onClick={()=>{submit();change()}} fullWidth>{ButtonText}</Button>
        </>
       
      )
    );
  };

export default Posts;
