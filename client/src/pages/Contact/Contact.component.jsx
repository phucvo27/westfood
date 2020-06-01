import React from 'react';
import Grid from '../../components/Grid/Grid.component';
import { Button } from '../../components/Button/Button.styled';
import Input from '../../components/Input/Input.component';
import Section from '../../components/Section/Section.component';
import Header from '../../components/Header/Header.component';
import { Title, LeftContent, RightContent, WorkTime } from './Contact.styled';
import Footer from '../../components/Footer/Footer.component';
import HeaderTitle from '../../components/HeaderTitle/Header-Title.component';
//import GoogleMap from '../../components/Map/GoogleMap.component';
import MapBox from '../../components/MapBox/MapBox.component'
//const mapURl = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBmCyg8R6nJN_TSCtfJVbXot5th46mqswg&callback=initMap`;

const Contact = ()=>{
    console.log(process.env.REACT_APP_GOOGLE_API)
    return (
        <React.Fragment>
            <Header isMainPage={false}/>
            <HeaderTitle
                title='Contact Us'
                subTitle='Podcasting operational change management inside of workflows to establish a framework.'
            />
            <Section paddingTop='2rem'>
                <Title isHeadTitle={true}>Find Us At</Title>
                {/* <GoogleMap 
                    isMarkerShown
                    googleMapURL={mapURl}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `500px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                
                /> */}
                <MapBox />
            </Section>
            <Section paddingTop='0rem'>
                <Title isHeadTitle={true}>Send us an Email</Title>
                <Grid>
                    <LeftContent>
                        <Title>
                            Tell us your project
                        </Title>
                        <Grid>
                        <Input
                            type='text'
                            placeholder='Your name*'
                        />
                        <Input
                            type='email'
                            placeholder='Your Email*'
                        />
                        </Grid>
                        <Input
                            type='text'
                            placeholder='Subject*'
                        />
                        <div>
                            <textarea
                                placeholder='Your message'
                            />
                        </div>
                        <div>
                            <Button>Submit</Button>
                        </div>
                        
                    </LeftContent>
                    <RightContent>
                        <Title>
                            Contact Us
                        </Title>
                        
                    
                        <div className='box-address'>
                            <span className='bold'>Địa&nbsp;chỉ: </span> <span>KCN Cái Sơn Hàng Bàng, đường Hoàng Quốc Việt,  KV4, Phường An Bình,Quận Ninh Kièu, TP Cần Thơ </span>
                        </div>
                        <div className='box-address'>
                            <span className='bold'> Telephone: </span> <span>0292.3893893 – Fax: 0292.3894894 </span>
                        </div>
                        <div className='box-address'>
                            <span className='bold'>Email: </span> <span>Support@example.com </span>
                        </div>

                        <WorkTime>
                            <h2>Working hours</h2>
                            <p>
                                <span className='bold'>Monday – Saturday:</span>
                                <span>08AM – 22PM</span>
                            </p>
                        </WorkTime>

                    </RightContent>
                </Grid>
            </Section>
            
            <Footer />
        </React.Fragment>
    )
}


export default Contact;