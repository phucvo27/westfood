import React from 'react';
import Grid from '../../components/Grid/Grid.component';
import { Button } from '../../components/Button/Button.styled';
import Input from '../../components/Input/Input.component';
import Section from '../../components/Section/Section.component';
import Header from '../../components/Header/Header.component';
import { Title, LeftContent, RightContent, WorkTime } from './Contact.styled';
import Footer from '../../components/Footer/Footer.component';
import HeaderTitle from '../../components/HeaderTitle/Header-Title.component';
import GoogleMap from '../../components/Map/GoogleMap.component';

const Contact = ()=>{
    return (
        <React.Fragment>
            <Header isMainPage={false}/>
            <HeaderTitle
                title='Contact Us'
                subTitle='Podcasting operational change management inside of workflows to establish a framework.'
            />
            <Section paddingTop='2rem'>
                
                <GoogleMap 
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBmCyg8R6nJN_TSCtfJVbXot5th46mqswg&callback=initMap"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `500px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                
                />
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
                        <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas human.</p>
                    
                        <div className='box-address'>
                            <span>Address : No 40 Baria Sreet 133/2 NewYork City</span>
                        </div>
                        <div className='box-address'>
                            <span>Phone : 716-298-1822</span>
                        </div>
                        <div className='box-address'>
                            <span>Email : info@example.com</span>
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