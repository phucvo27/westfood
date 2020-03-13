import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from './pages/Home/Home.component'
class App extends React.Component {

    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={HomePage} />
                </Switch>
            </BrowserRouter>
        )
    }
}


export default App;