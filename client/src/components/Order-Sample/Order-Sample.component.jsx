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
                        <span className='highlight'>Become our partner.</span>

                        <div className='line'></div>
                        <p>Beetroot water spinach okra water chestnut ricebean pea catsear courgette summer purslane. Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio turnip chicory salsify pea sprouts fava bean. Dandelion zucchini burdock yarrow.</p>
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