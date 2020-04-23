import React from 'react';
import { Wrapper, Container, Text, Box } from './Order-Sample.styled';
import Grid from '../Grid/Grid.component';
import Button from '../Button/Button.component' 
const OrderSample = ()=>{
    return (
        <Wrapper>
            <Container>
                <Grid>
                    <Text>
                        <span>Order sample & test it.</span>
                        <span className='highlight'>Hãy cộng tác cùng chúng tôi!</span>

                        <div className='line'></div>
                        <p>
                            Westfoods mong muốn cùng bạn mang khóm ngọt bổ dưỡng và thơm ngon đến với các khách hàng. Westfoods tin tưởng những giá trị dinh dưỡng khi được sẻ chia sẽ mang đến một cộng đồng khỏe mạnh, cuộc sống chất lượng cao.
                        </p>
                    </Text>
                    <div>
                        <Box>
                            <span className='subtext'>Get in touch</span>
                            <h3 className='maintext'>Order sample</h3>
                            <p className='subtext'>
                                Efficiently unleash cross-media information without cross-media value.
                            </p>
                            <Button 
                                text='Contact Us'
                                marginTop='2rem'
                                willNavigate='/contact'
                            />
                        </Box>
                    </div>
                </Grid>
            </Container>
        </Wrapper>
    )
}

export default OrderSample;