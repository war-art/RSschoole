import React,{useEffect} from 'react'
import './mainpage.css'
import {NavLink} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'

import {getPosts} from '../actions/posts'
export const MainPage = () => {
	const dispatch = useDispatch()
	useEffect(()=>{
		dispatch(getPosts())
	},[dispatch])

	const posts = useSelector((state)=>state.posts)
	const storage = localStorage.getItem('email')
	let email = 'empty'
	let mentorName='empty'
	let mark =0;
	let tasks1=''
	let tasks2 = ''
	posts.forEach(element => {
		if(storage === element.email){
			email = element.mentorName
			tasks1 = element.mark.length;
			tasks2 = element.tasks.length;
			mark = element.mark.reduce((a,b)=>a+b,0)
			posts.forEach((mentor)=>{
				if(mentor.email===email){
					mentorName = mentor.username;
				}
			})

		}
	});
    return (
        <main>
		<div className="courseSet">
			<select>
				<option>JS/FE 2020 Q3 (Active)</option>
			</select>
		</div>
		<div className="mainContent">
			<div className="navPages">
				<div><NavLink to='/score'>
					<svg viewBox="64 64 896 896" focusable="false" className="" data-icon="fire" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M737 438.6c-9.6 15.5-21.1 30.7-34.4 45.6a73.1 73.1 0 01-51 24.4 73.36 73.36 0 01-53.4-18.8 74.01 74.01 0 01-24.4-59.8c3-47.4-12.4-103.1-45.8-165.7-16.9-31.4-37.1-58.2-61.2-80.4a240 240 0 01-12.1 46.5 354.26 354.26 0 01-58.2 101 349.6 349.6 0 01-58.6 56.8c-34 26.1-62 60-80.8 97.9a275.96 275.96 0 00-29.1 124c0 74.9 29.5 145.3 83 198.4 53.7 53.2 125 82.4 201 82.4s147.3-29.2 201-82.4c53.5-53 83-123.5 83-198.4 0-39.2-8.1-77.3-24-113.1-9.3-21-21-40.5-35-58.4z" fill="#fffae6"></path><path d="M834.1 469.2A347.49 347.49 0 00751.2 354l-29.1-26.7a8.09 8.09 0 00-13 3.3l-13 37.3c-8.1 23.4-23 47.3-44.1 70.8-1.4 1.5-3 1.9-4.1 2-1.1.1-2.8-.1-4.3-1.5-1.4-1.2-2.1-3-2-4.8 3.7-60.2-14.3-128.1-53.7-202C555.3 171 510 123.1 453.4 89.7l-41.3-24.3c-5.4-3.2-12.3 1-12 7.3l2.2 48c1.5 32.8-2.3 61.8-11.3 85.9-11 29.5-26.8 56.9-47 81.5a295.64 295.64 0 01-47.5 46.1 352.6 352.6 0 00-100.3 121.5A347.75 347.75 0 00160 610c0 47.2 9.3 92.9 27.7 136a349.4 349.4 0 0075.5 110.9c32.4 32 70 57.2 111.9 74.7C418.5 949.8 464.5 959 512 959s93.5-9.2 136.9-27.3A348.6 348.6 0 00760.8 857c32.4-32 57.8-69.4 75.5-110.9a344.2 344.2 0 0027.7-136c0-48.8-10-96.2-29.9-140.9zM713 808.5c-53.7 53.2-125 82.4-201 82.4s-147.3-29.2-201-82.4c-53.5-53.1-83-123.5-83-198.4 0-43.5 9.8-85.2 29.1-124 18.8-37.9 46.8-71.8 80.8-97.9a349.6 349.6 0 0058.6-56.8c25-30.5 44.6-64.5 58.2-101a240 240 0 0012.1-46.5c24.1 22.2 44.3 49 61.2 80.4 33.4 62.6 48.8 118.3 45.8 165.7a74.01 74.01 0 0024.4 59.8 73.36 73.36 0 0053.4 18.8c19.7-1 37.8-9.7 51-24.4 13.3-14.9 24.8-30.1 34.4-45.6 14 17.9 25.7 37.4 35 58.4 15.9 35.8 24 73.9 24 113.1 0 74.9-29.5 145.4-83 198.4z" fill="orange"></path></svg>
					Score
				</NavLink></div>
				<div><NavLink to="/schedule">
					<svg viewBox="64 64 896 896" focusable="false" className="" data-icon="calendar" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M712 304c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-48H384v48c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-48H184v136h656V256H712v48z" fill="#fff0f6"></path><path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zm0-448H184V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136z" fill="#eb2f96"></path></svg>
					Schedule
				</NavLink></div>
				<div><NavLink to="/submit">
					<svg viewBox="64 64 896 896" focusable="false" className="" data-icon="code" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z" fill="#1890ff"></path><path d="M184 840h656V184H184v656zm339.5-223h185c4.1 0 7.5 3.6 7.5 8v48c0 4.4-3.4 8-7.5 8h-185c-4.1 0-7.5-3.6-7.5-8v-48c0-4.4 3.4-8 7.5-8zM308 610.3c0-2.3 1.1-4.6 2.9-6.1L420.7 512l-109.8-92.2a7.63 7.63 0 01-2.9-6.1V351c0-6.8 7.9-10.5 13.1-6.1l192 160.9c3.9 3.2 3.9 9.1 0 12.3l-192 161c-5.2 4.4-13.1.7-13.1-6.1v-62.7z" fill="#e6f7ff"></path><path d="M321.1 679.1l192-161c3.9-3.2 3.9-9.1 0-12.3l-192-160.9A7.95 7.95 0 00308 351v62.7c0 2.4 1 4.6 2.9 6.1L420.7 512l-109.8 92.2a8.1 8.1 0 00-2.9 6.1V673c0 6.8 7.9 10.5 13.1 6.1zM516 673c0 4.4 3.4 8 7.5 8h185c4.1 0 7.5-3.6 7.5-8v-48c0-4.4-3.4-8-7.5-8h-185c-4.1 0-7.5 3.6-7.5 8v48z" fill="#1890ff"></path></svg>
					Cross-Check: Submit
				</NavLink></div>
				<div><a href="/#">
					<svg viewBox="64 64 896 896" focusable="false" className="" data-icon="audio" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 552c54.3 0 98-43.2 98-96V232c0-52.8-43.7-96-98-96s-98 43.2-98 96v224c0 52.8 43.7 96 98 96z" fill="#e6f7ff"></path><path d="M842 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1z" fill="#1890ff"></path><path d="M512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm-98-392c0-52.8 43.7-96 98-96s98 43.2 98 96v224c0 52.8-43.7 96-98 96s-98-43.2-98-96V232z" fill="#1890ff"></path></svg>
					Interviews
				</a></div>
			</div>
			<div className="stats">
				<div className="statsHeader">Your stats</div>
				<div className="statsContent">
					<div className="scroePoints">
						<div className="statusContentSubheader">Score Points</div>
						<div className="statsValue">{mark}</div>
					</div>
					<div className="completedTasks">
						<div className="statusContentSubheader">Completed Tasks</div>
						<div className="statsValue">{tasks1}/{tasks2}</div>
					</div>
					<div className="status">
						<div className="statusContentSubheader">Status</div>
						<div className="statsStatus">Active</div>
					</div>
				</div>
			</div>
			<div className="mentor">
              
				<div className="mentorHeader">Your mentor</div>
				<div className="montorContent">
					<div>
						<div className="mentorName">Mentor Name</div>
						<div className="mentorLink">
							<a href="/#"><img alt='img' src="https://raw.githubusercontent.com/xiiforlearning/rs-app-clone/treger78/assets/MainPage/gh-profile-img.png?token=AQ32MFDHUYYGDEW6ETS6VOLAB7C7M"/></a>
							<a href="/#">{mentorName}</a>
							<a href="https://github.com/rolling-scopes-school"><span className="mentorGhLink">
								<svg viewBox="64 64 896 896" focusable="false" className="" data-icon="github" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg>
							</span></a>
							</div>
					</div>
					<div className="mentorItem">
						<div className="mentorTitle">Email: </div>
						<div>{email}</div>
					</div>
					<div className="mentorItem">
						<div className="mentorTitle">Skype: </div>
						<div>rs-school-skype</div>						
					</div>
					<div className="mentorItem">
						<div className="mentorTitle">Telegram: </div>
						<div>rs-school-telegram</div>						
					</div>
					<div className="mentorItem">
						<div className="mentorTitle">Notes: </div>
						<div>some notes</div>						
					</div>
				</div>
			</div>
		</div>
	</main>   
    )
}