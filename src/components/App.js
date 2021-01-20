import React from 'react'
import ExerciseContainer from '../pages/ExerciseContainer'
import ExerciseNewContainer from '../pages/ExerciseNewContainer'
import NotFound from '../pages/404'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/exercise" component={ExerciseContainer} />
            <Route exact path="/exercise/new" component={ExerciseNewContainer} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default App