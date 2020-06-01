import React from 'react';
import { HeaderTitle, ContentText } from './HeaderTitle.styled';

const MyHeaderTitle = ({title, subTitle}) => {
    return (
        <HeaderTitle>
            <ContentText>
                <h3 className='title'>{title}</h3>
                <p className='subtitle'>{subTitle}</p>
            </ContentText>
        </HeaderTitle>
    )
}

export default MyHeaderTitle;