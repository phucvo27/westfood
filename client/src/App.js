import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from './pages/Home/Home.component';
import ContactPage from './pages/Contact/Contact.component';
import AboutPage from './pages/About/About.component';
import BlogPage from './pages/Blog/Blog.component';

class App extends React.Component {

    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={HomePage} />
                    <Route path='/blogs' component={BlogPage} />
                    <Route path='/about' component={AboutPage} />
                    <Route path='/contact' component={ContactPage} />
                </Switch>
            </BrowserRouter>
        )
    }
}


export default App;