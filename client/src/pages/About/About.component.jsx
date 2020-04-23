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

//Với diện tích nông trại hơn <span className='bold'>10 hecta</span>. Chúng tôi tự tin cung cấp nguồn cung dồi dào
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
                                VƯỜN ƯƠM & VÙNG NGUYÊN LIỆU
                            </h3>
                            <p>
                                
                                Với vùng nguyên liệu <span className='bold'>đạt chuẩn GLOBAL GAP</span>, quy mô ngày càng mở rộng, được canh tác bởi các nhà nông lành nghề, đội ngũ kỹ thuật viên chuyên môn cao và quy trình được quản lý chặt chẽ, Westfoods đảm bảo mang đến không chỉ những trái khóm MD2 tươi ngon, mà còn những tác động tích cực đến môi trường và đời sống của những nông hộ cần mẫn chăm sóc vườn khóm của chúng tôi
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
                                <span className='bold'>KHÓM MD2</span> – WESTFOODS GOLD
                            </h3>
                            <p>
                            Được nâng niu từ đồng ruộng đến tay người tiêu dùng, những trái khóm trĩu mật ngọt của Westfoods Gold mang đến vị ngọt thơm ngát từ tự nhiên, trở thành nguồn vitamin C và chất xơ chăm sóc sức khỏe mọi người. Điều đặc biệt là giống khóm MD2 của chúng tôi sẽ không gây đau rát lưỡi khi thưởng thức, các bạn an tâm nhé!
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