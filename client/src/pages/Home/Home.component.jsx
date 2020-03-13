import React from 'react';
import Header from '../../components/Header/Header.component';


class HomePage extends React.Component {

    render(){
        return (
            <Header isMainPage={true}/>            
        )
    }
}


export default HomePage;