import React from 'react';
import { Wrapper } from './Section.styled';


const Section = (props)=>{
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}

export default Section;