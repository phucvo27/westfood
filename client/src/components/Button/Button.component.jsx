import React from 'react';
import { Wrapper, Button } from './Button.styled'
import { withRouter } from 'react-router-dom';
const Mybutton = (props)=>{

    const handleClick = ()=>{
        if(props.willNavigate){
            props.history.push(props.willNavigate)
        }
    }
    return (
        <Wrapper 
            marginTop={props.marginTop} 
            isCenter={props.isCenter} 
            onClick={handleClick}>
            <Button>{props.text}</Button>
        </Wrapper>
    )
}

export default withRouter(Mybutton);