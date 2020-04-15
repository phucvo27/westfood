import React from 'react';
import { SectionTitle } from './Section-Title.styled';

const MySectionTitle = (props)=> {
    return (
        <SectionTitle>
            {props.children}
        </SectionTitle>
    )
}

export default MySectionTitle;