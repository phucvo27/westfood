import React from 'react';
import Grid from '../Grid/Grid.component';
import { Text, TextBox, Image, ButtonGroup } from './Offer-Section.styled';
import { Button } from '../Button/Button.styled'
import pineappleImage from '../../assets/pineapple.png';
const OfferSection = ()=>{
    return (
        <Grid width='80%'>
            <Text>
                <TextBox>
                    <p className='secondary-title'>WE OFFER YOU TO</p>
                    <h1 className='main-title'>
                        <span>Unlock your potential</span>
                        <span>with good <span className='highlight'>nutrition</span> </span>
                    </h1>
                    <p>
                        Soko radicchio bunya nuts gram dulse silver beet parsnip napa cabbage lotus root sea lettuce brussels sprout cabbage. Catsear cauliflower garbanzo yarrow salsify chicory garlic bell pepper napa cabbage lettuce tomato
                    </p>
                    <ButtonGroup>
                        <Button>
                            Go To Our Blogs
                        </Button>
                    </ButtonGroup>
                </TextBox>
                
            </Text>
            <Image>
                <img src={pineappleImage} alt='pinapple' />
            </Image>
        </Grid>
    )
}

export default OfferSection;