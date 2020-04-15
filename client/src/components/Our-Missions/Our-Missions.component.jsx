import React from 'react';
import SectionTitle from '../Section-Title/Section-Title.component';
import Section from '../Section/Section.component';
import Button from '../Button/Button.component';
import Grid from '../Grid/Grid.component';
import { Container, Col, Image, Content } from './Our-Missions.styled';

const imgSrc =  'http://organic-food.bold-themes.com/main-demo/wp-content/uploads/sites/3/2016/07/inner_illustration_5-640x640.jpg';
const imgSrc2 = 'http://organic-food.bold-themes.com/main-demo/wp-content/uploads/sites/3/2016/07/inner_illustration_4-640x640.jpg';
const imgSrc3 = 'http://organic-food.bold-themes.com/main-demo/wp-content/uploads/sites/3/2016/07/inner_illustration_6-640x640.jpg'
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
                            <img src={imgSrc} alt='recipe' />
                        </Image>
                        <Content>
                            <h3 className='headline'>Nutrition strategies</h3>
                            <p>Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage.</p>
                            <Button marginTop='1.5rem' text='Read More'/>
                        </Content>
                    </Col>
                    <Col>
                        <Image>
                            <img src={imgSrc2} alt='recipe' />
                        </Image>
                        <Content>
                            <h3 className='headline'>Nutrition strategies</h3>
                            <p>Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage.</p>
                            <Button marginTop='1.5rem' text='Read More'/>
                        </Content>
                    </Col>
                    <Col>
                        <Image>
                            <img src={imgSrc3} alt='recipe' />
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

