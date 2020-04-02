import React from 'react';
import Header from '../../components/Header/Header.component';
import Section from '../../components/Section/Section.component'
import OurProducts from '../../components/Our-Products/Our-Products.component';
import OfferSection from '../../components/Offer-Section/Offer-Section.component';
import OrderSample from '../../components/Order-Sample/Order-Sample.component'
class HomePage extends React.Component {

    render(){
        return (
            <React.Fragment>
                <Header isMainPage={true}/>     
                <Section>
                    <OurProducts />
                </Section>
                <OrderSample />
                <Section>
                    <OfferSection />
                </Section>
            </React.Fragment>       
        )
    }
}


export default HomePage;