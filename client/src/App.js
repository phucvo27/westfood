import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from './pages/Home/Home.component';
import ContactPage from './pages/Contact/Contact.component';
import AboutPage from './pages/About/About.component';
import BlogPage from './pages/Blog/Blog.component';
import ScrollToTop from './components/Scroll-To-Top/Scroll-To-Top.component'
class App extends React.Component {

    render(){
        return (
            <BrowserRouter>
                <ScrollToTop>
                    <Switch>
                        <Route path='/' exact component={HomePage} />
                        <Route path='/blogs' component={BlogPage} />
                        <Route path='/about' component={AboutPage} />
                        <Route path='/contact' component={ContactPage} />
                    </Switch>
                </ScrollToTop>
            </BrowserRouter>
        )
    }
}


export default App;