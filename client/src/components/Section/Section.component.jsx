import React from 'react';
import { Wrapper } from './Section.styled';


const Section = (props)=>{
    return (
        <Wrapper margin={props.margin} paddingTop={props.paddingTop}>
            {props.children}
        </Wrapper>
    )
}

export default Section;