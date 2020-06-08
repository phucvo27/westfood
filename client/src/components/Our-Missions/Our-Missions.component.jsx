import React from 'react';
import SectionTitle from '../Section-Title/Section-Title.component';
import Section from '../Section/Section.component';
import Button from '../Button/Button.component';
import Grid from '../Grid/Grid.component';
import { Container, Col, Image, Content } from './Our-Missions.styled';
import ourMission1 from '../../assets/Our-mission-1.webp';
import ourMission2 from '../../assets/Our-mission-2.webp';
import ourMission3 from '../../assets/Our-mission-3.webp';
const OurMissions = () => {

    return (
        <Section paddingTop='0rem'>
            <SectionTitle>
                <p className='secondary-title'>Our Missions</p>
                <h3 className='main-title'>This isn't a diet, It's a lifestyle</h3>
                <div className='line'></div>
                <p>Efficiently unleash cross-media information without cross-media value. </p>
            </SectionTitle>

            <Container>
                <Grid>
                    <Col>
                        <Image>
                            <img src={ourMission1} alt='recipe' />
                        </Image>
                        <Content>
                            <h3 className='headline'>Nutrition strategies</h3>
                            <p>Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage.</p>
                            <Button marginTop='1.5rem' text='Read More'/>
                        </Content>
                    </Col>
                    <Col>
                        <Image>
                            <img src={ourMission2} alt='recipe' />
                        </Image>
                        <Content>
                            <h3 className='headline'>Nutrition strategies</h3>
                            <p>Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage.</p>
                            <Button marginTop='1.5rem' text='Read More'/>
                        </Content>
                    </Col>
                    <Col>
                        <Image>
                            <img src={ourMission3} alt='recipe' />
                        </Image>
                        <Content>
                            <h3 className='headline'>Nutrition strategies</h3>
                            <p>Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage.</p>
                            <Button marginTop='1.5rem' text='Read More'/>
                        </Content>
                    </Col>
                </Grid>
            </Container>
            
        </Section>
    )
}

export default OurMissions;

