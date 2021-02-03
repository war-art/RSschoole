import {Grid} from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import './student.css'
import {useDispatch,useSelector} from 'react-redux'

export const Profile = () => {
    const posts = useSelector((state)=>state.posts)
  let user = posts.filter((user)=>{ 
       return user.email === localStorage.getItem('email') 
    })
    console.log(user[0])
    return(
        <Grid  container  direction="row" justify="center" className='profile' alignItems="center" spacing={3}> 
            <Grid item  xs = {3}><div className = 'profile-block'>
                <Paper>
                    <div className='profile-photo' style={{backgroundImage:'url(/gh-profile-img.png)'}}></div>
                    <div className = 'profile-name'><i>{user[0].firstName}</i> <i>{user[0].lastName}</i></div>
                    <div className = 'profile-email'>
                        {user[0].email}
                    </div>
                    <div className = 'profile-location'>  {user[0].location}</div>
                </Paper> 
                <Paper className='margin-top'>
                    <div className='contacts'>Contacts</div>
                    <div className='profile-email2'>Email: {user[0].email}</div>
                    <div className='telegram'>Telegram: {user[0].telegram}</div>
                    <div className='Phone'>Phone: {user[0].phoneNumber}</div>
                </Paper></div></Grid>
            <Grid item  xs = {3}><div className = 'profile-block'>
                <Paper>
                <div className='about-header'>About:</div>
                <div className='about'>{user[0].about}</div>
                </Paper> 
                </div></Grid>
            <Grid item  xs = {3}>
                <div className = 'profile-block'>
                <Paper>
                <div className = 'english-header'>Estimated English level</div>
                <div className = 'english'>{user[0].english}</div>
                </Paper> 
                <Paper className='margin-top'>
                <div className = 'subscription-header'> Subscriptions</div>
                <div className = 'subscription'>
                    <div><a href='https://rs.school/'>1. Website of RSschool</a></div>
                    <div><a href='https://discord.com/invite/QvEYg7EaQ4'>2. Discord of course</a></div>
                </div>
                </Paper>
                </div>
                </Grid>
            <Grid item  xs = {3}><div className = 'profile-block'>
                <Paper >
                    <div className = 'education-header'>Education</div>
                    <div className = 'education'>{user[0].education}</div>
                </Paper> 
                <Paper >
                </Paper>
                </div></Grid>
        </Grid>
    )
}