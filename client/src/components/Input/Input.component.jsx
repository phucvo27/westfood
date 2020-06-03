import React from 'react';
import { Input } from './Input.styled';

const InputComponent = (props)=>{

    return (
        <div className="form__group">
            <Input 
                {...props}
                />
        </div>
    )
}

export default InputComponent;