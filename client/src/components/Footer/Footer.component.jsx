import React from 'react';
import { Wrapper, Container, LeftContent, RightContent, LogoImage, BoxAdress, Title } from './Footer.styled';
import Grid from '../Grid/Grid.component';
import Logo from '../../assets/logo-WF.webp';

const Footer = ()=>{

    return (
        <Wrapper>
            <Container>
                <Grid>
                    <LeftContent>
                        <LogoImage>
                            <img src={Logo} alt='westfood-logo' />
                        </LogoImage>
                        
                        <p>
                            CÔNG TY CỔ PHẦN CHẾ BIẾN THỰC PHẨM XUẤT KHẨU MIỀN TÂY
                        </p>
                        <BoxAdress>
                            <span className='bold'>Địa&nbsp;chỉ: </span> <span>KCN Cái Sơn Hàng Bàng, đường Hoàng Quốc Việt,  KV4, Phường An Bình,Quận Ninh Kièu, TP Cần Thơ </span>
                        </BoxAdress>
                        <BoxAdress>
                            <span className='bold'> Telephone: </span> <span>0292.3893893 – Fax: 0292.3894894 </span>
                        </BoxAdress>
                        <BoxAdress>
                            <span className='bold'>Email: </span> <span>Support@example.com </span>
                        </BoxAdress>
                    </LeftContent>
                    <RightContent>
                        <Title>
                            Find Us
                        </Title>
                        <BoxAdress>
                            <span className='bold'>Monday - Saturday: </span> <span>08AM – 17PM</span>
                        </BoxAdress>
                        <BoxAdress>
                            <span className='bold'>Social: </span> <span>Facebook</span>
                        </BoxAdress>
                    </RightContent>
                </Grid>
            </Container>
        </Wrapper>
    )
}

export default Footer;