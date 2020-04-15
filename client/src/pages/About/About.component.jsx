import React from 'react';
import Header from '../../components/Header/Header.component';
import Footer from '../../components/Footer/Footer.component';
// import Section from '../../components/Section/Section.component';
import Grid from '../../components/Grid/Grid.component';
import { TextBox, ImageBox, Wrapper, Section } from './About.styled';
import productImage from '../../assets/products.jpg';
import farmImage from '../../assets/farm.jpg';
import HeaderTitle from '../../components/HeaderTitle/Header-Title.component';
import OurMissions from '../../components/Our-Missions/Our-Missions.component';

const About = ()=>{

    return (
        <React.Fragment>
            <Header isMainPage={false} />
            <HeaderTitle
                title='About Us'
                subTitle='Podcasting operational change management inside of workflows to establish a framework.'
            />
            <Wrapper>
                <Section>
                    <Grid>
                        <TextBox>
                            <h3 className='headline'>
                                Quy mô nông trai
                            </h3>
                            <p>
                                Với diện tích nông trại hơn <span className='bold'>10 hecta</span>. Chúng tôi tự tin cung cấp nguồn cung dồi dào
                            </p>
                        </TextBox>
                        <ImageBox>
                            <img src={farmImage} alt='farm' />
                        </ImageBox>
                    </Grid>
                </Section>

                <Section>
                    <Grid>
                        <ImageBox>
                            <img src={productImage} alt='farm' />
                        </ImageBox>
                        <TextBox>
                            <h3 className='headline'>
                                Sản phẩm <span className='bold'>MD2</span>
                            </h3>
                            <p>
                                Sản phẩm MD2 là một trong các sản phẩm chủ lực của công ty chúng tôi.
                                Sản phẩm đã được tin dùng và xuất khẩu sang nhiều nước khác nhau , và nhận được các phản hồi tích cực từ các nước bạn 
                            </p>
                        </TextBox>
                        
                    </Grid>
                </Section>

                <OurMissions />
                <Footer />
            </Wrapper>
        </React.Fragment>
    )
}


export default About;