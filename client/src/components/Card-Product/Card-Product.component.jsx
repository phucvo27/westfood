import React from 'react';
import {
    Wrapper,
    CardImage,
    CardBody,
    CardBodyTitle,
    CardBodyDescription,
    CardBodyButton
} from './Card-Product.styled';


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
                    <button>Learn More</button>
                </CardBodyButton>
            </CardBody>
        </Wrapper>
    )
}

export default Card;