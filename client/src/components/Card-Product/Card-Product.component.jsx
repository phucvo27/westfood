import React from 'react';
import {
    Wrapper,
    CardImage,
    CardBody,
    CardBodyTitle,
    CardBodyDescription,
    CardBodyButton
} from './Card-Product.styled';
import { Button } from '../Button/Button.styled';

const Card = ({ imageUrl, title, description})=>{
    return (
        <Wrapper>
            <CardImage>
                <img src={imageUrl}
                    alt="oragnic" />
            </CardImage>
            <CardBody>
                <CardBodyTitle>
                    <h3>{title}</h3>
                </CardBodyTitle>
                <CardBodyDescription>
                    <p>{description}</p>
                </CardBodyDescription>
                <CardBodyButton>
                    <Button>Learn More</Button>
                </CardBodyButton>
            </CardBody>
        </Wrapper>
    )
}

export default Card;