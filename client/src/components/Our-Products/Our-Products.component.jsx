import React from 'react';
import { Wrapper , SectionTitle} from './Our-Products.styled';
import Grid from '../Grid/Grid.component'
import Card from '../Card-Product/Card-Product.component'
import OurProduct1 from '../../assets/Our-Product-1.webp';
import OurProduct2 from '../../assets/Our-Product-2.webp';
import OurProduct3 from '../../assets/Our-Product-3.webp';
const OurProducts = ( props ) => {
    return (
        <Wrapper>
            <SectionTitle>
                <p className='secondary-title'>Our Products</p>
                <h3 className='main-title'>Good Food. Organic Farming. Real Taste.</h3>
                <div className='line'></div>
                <p>Grape silver beet watercress potato tigernut</p>
            </SectionTitle>
            <Grid>
                <Card
                    imageUrl={OurProduct1}
                    title='Good Food'
                    description='Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage.'
                />
                <Card 
                    imageUrl={OurProduct2}
                    title='Organic Farming'
                    description='Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio turnip chicory salsify pea sprouts fava bean.' 
                />
                <Card 
                    imageUrl={OurProduct3}
                    title='Real Taste'
                    description='Credibly innovate granular internal or “organic“ sources whereas high standards in web-readiness. Energistically scale core competencies.' 
                />
                <Card 
                    imageUrl={OurProduct1}
                    title='Organic Farming'
                    description='Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio turnip chicory salsify pea sprouts fava bean.' 
                />
            </Grid>
        </Wrapper>
    )
}

export default OurProducts;