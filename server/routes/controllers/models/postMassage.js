import momgoose from "mongoose"
const Postschema = momgoose.Schema({
    date:[],
    time:[],
    place:[],
    topic:[],
    teacher:[]
    
});
export default  momgoose.model('PostMessage',Postschema)
 


