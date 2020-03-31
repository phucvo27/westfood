import React from 'react';
import Header from '../../components/Header/Header.component';
import Section from '../../components/Section/Section.component'
import OurProducts from '../../components/Our-Products/Our-Products.component'
class HomePage extends React.Component {

    render(){
        return (
            <React.Fragment>
                <Header isMainPage={true}/>     
                <Section>
                    <OurProducts />
                </Section>
            </React.Fragment>       
        )
    }
}


export default HomePage;