import React from 'react';
import { Wrapper , SectionTitle} from './Our-Products.styled';
import Grid from '../Grid/Grid.component'
import Card from '../Card-Product/Card-Product.component'

const OurProducts = ( props ) => {
    return (
        <Wrapper>
            <SectionTitle>
                <p className='secondary-title'>Our Proccess</p>
                <h3 className='main-title'>Good Food. Organic Farming. Real Taste.</h3>
                <div className='line'></div>
                <p>Grape silver beet watercress potato tigernut</p>
            </SectionTitle>
            <Grid>
                <Card
                    imageUrl='http://organic-food.bold-themes.com/main-demo/wp-content/uploads/sites/3/2016/07/products_06-640x640.jpg'
                    title='Good Food'
                    description='Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage.'
                />
                <Card 
                    imageUrl='http://organic-food.bold-themes.com/main-demo/wp-content/uploads/sites/3/2016/07/products_03-640x640.jpg'
                    title='Organic Farming'
                    description='Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio turnip chicory salsify pea sprouts fava bean.' 
                />
                <Card 
                    imageUrl='http://organic-food.bold-themes.com/main-demo/wp-content/uploads/sites/3/2016/07/products_04-640x640.jpg'
                    title='Real Taste'
                    description='Credibly innovate granular internal or “organic“ sources whereas high standards in web-readiness. Energistically scale core competencies.' 
                />
                <Card 
                    imageUrl='http://organic-food.bold-themes.com/main-demo/wp-content/uploads/sites/3/2016/07/products_03-640x640.jpg'
                    title='Organic Farming'
                    description='Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio turnip chicory salsify pea sprouts fava bean.' 
                />
            </Grid>
        </Wrapper>
    )
}

export default OurProducts;