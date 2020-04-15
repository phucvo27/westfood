import React from 'react';
import { HeaderTitle, Content } from './HeaderTitle.styled';


const MyHeaderTitle = ({title, subTitle}) => {
    return (
        <HeaderTitle>
            <Content>
                <h3 className='title'>{title}</h3>
                <p className='subtitle'>{subTitle}</p>
            </Content>
        </HeaderTitle>
    )
}

export default MyHeaderTitle;