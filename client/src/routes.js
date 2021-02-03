import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { FirstPage } from './pages/FirstPage' 
import { LoginPage } from './pages/student/LoginPage'
import { LoginPageMentors } from './pages/mentor/LoginPage'
import { RegisterPage } from './pages/student/RegisterPage'
import { RegisterPageMentors } from './pages/mentor/RegisterPage'
import { DashboardPage } from './pages/DashboardPage'
import { MainPage } from './pages/MainPage'
import  Table from './schedule/App'
import {createStore,applyMiddleware,compose} from 'redux'
import {Provider} from 'react-redux'
import reducers from './schedule/reducers'
import thunk from 'redux-thunk'
import StudentTable from './schedule/student'
import {Profile} from './pages/profile/student'
import {MainMentor} from './pages/MainMentor'
import {StudentList} from './pages/studentList/studentList'
import {TaskCreator} from './pages/taskCreator/task'
import {Submitask} from './pages/submit/submit'
import {CheckList} from './pages/checklist/checklist'
import {Score} from './pages/score/score'
const store = createStore(reducers,compose(applyMiddleware(thunk)))
export const useRoutes = (isAuthenticated, isMentor) => {
    if(isAuthenticated) {
        if(!isMentor) {
            return(
                <Switch> 
                    <Route path="/main" exact>
                    <MainPage />
                    </Route>
                    <Route path="/profile" exact>
                    <Profile/>
                    </Route>
                    <Route path="/submit" exact>
                    <Submitask/>
                    </Route>
                    <Route path="/score" exact>
                    <Score/>
                    </Route>
                    <Route path="/schedule" exact>
                    <Provider store= {store}>
                    <StudentTable/>
                    </Provider>
                    </Route>
                    <Route path="/dashboard" exact>
                        <DashboardPage />
                    </Route>
                    <Redirect to="/main" />
                </Switch>
            )
        }
        return(
            <Switch>
                <Route path="/mentor" exact>
                    <MainMentor />
                </Route>
                <Route path="/profile" exact>
                    <Profile/>
                    </Route>
                    <Route path="/studentList" exact>
                    <StudentList/>
                    </Route>
                    <Route path="/tasks" exact>
                    <TaskCreator/>
                    </Route>
                    <Route path="/check" exact>
                    <CheckList/>
                    </Route>
                    <Route path="/score" exact>
                    <Score/>
                    </Route>
                <Route path="/schedule" exact>
                    <Provider store= {store}>
                    <Table/>
                    </Provider>
                    </Route>
                <Route path="/dashboardMentors" exact>
                    <DashboardPage />
                </Route>
                <Redirect to="/mentor" />
            </Switch>
        )

    }

    return(
        <Switch>
            <Route path="/" exact>
                    <FirstPage />
            </Route>
            <Route path="/login" exact>
                    <LoginPage />
            </Route>
            <Route path="/loginMentors" exact>
                    <LoginPageMentors />
            </Route>
            <Route path="/register" exact>
                    <RegisterPage />
            </Route>
            <Route path="/registerMentors" exact>
                    <RegisterPageMentors />
            </Route>
            <Redirect to="/" />
        </Switch>
    )

}