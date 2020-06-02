import React, { lazy, Suspense} from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import ErrorBoundary from './components/Error-Boundary/Error-Boundary.component'
import ScrollToTop from './components/Scroll-To-Top/Scroll-To-Top.component';

const HomePage = lazy(()=> import('./pages/Home/Home.component'))
const ContactPage = lazy(()=> import('./pages/Contact/Contact.component'))
const AboutPage = lazy(()=> import('./pages/About/About.component'))
const BlogPage = lazy(()=> import('./pages/Blog/Blog-Page.component'))
class App extends React.Component {

    render(){
        return (
            <BrowserRouter>
                <ScrollToTop>
                    <ErrorBoundary>
                        <Suspense fallback={<div>Loading.....</div>}>
                            <Switch>
                                <Route path='/' exact component={HomePage} />
                                <Route path='/blogs' component={BlogPage} />
                                <Route path='/about' component={AboutPage} />
                                <Route path='/contact' component={ContactPage} />
                            </Switch>
                        </Suspense>
                    </ErrorBoundary>
                </ScrollToTop>
            </BrowserRouter>
        )
    }
}


export default App;