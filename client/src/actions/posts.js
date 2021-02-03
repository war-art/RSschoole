import * as api from '../api'

 export  const getPosts = () =>async(dispatch) => {

    try {
        const {data} =await api.fetchPosts()
        dispatch({type:"FETCH_ALL",payload:data})
    } catch (error) {
        console.log(error.message)
  
}}
export const createPost = (post)=> async(dispatch)=>{

    try {
        const {data} = await api.createPost(post)
        dispatch({type:"CREATE",payload:data})
    } catch (error) {
        console.log(error.message)
    }
}
export const updatedPost=(id, post)=> async(dispatch)=> {
    try {
    
     const {data} =  await api.updatePost(id,post);  
     console.log(data)
     dispatch({type:'UPDATE',payload:data})
    } catch (error) {
        console.log(error.message)      
    }
}