import React from 'react';
import {
    Wrapper,
    CardImage,
    CardBody,
    CardBodyTitle,
    CardBodyDescription
} from './Card-Product.styled';
import Button from '../Button/Button.component';

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
                <Button text='Read More' isCenter={true}/>
            </CardBody>
        </Wrapper>
    )
}

export default Card;