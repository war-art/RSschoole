import momgoose from "mongoose"
const Postschema = momgoose.Schema({
    mark:[],
    username:'',
    firstName:'',
    lastName:'',
    location:'',
    email:'',
    mentor:false,
    telegram:'',
    phoneNumber:'',
    about:'',
    english:'',
    education:'',
    tasks:[],
    mentorName:'',
    submitedTasks:[]

});
export default  momgoose.model('PostMessage',Postschema)
 


