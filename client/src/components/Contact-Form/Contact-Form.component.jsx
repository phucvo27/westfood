import React from 'react';
import Grid from '../Grid/Grid.component';
import Input from '../Input/Input.component'
import { Button } from '../Button/Button.styled'
import { Form } from './Contact-Form.styled'
class ContactForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            error: {
                name: '',
                email: '',
                subject: '',
                message: '',
            },
            hasError: false
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState(prevState =>({[name]: value, error:{...prevState.error, [name]: ''}}));
    }
    hasAnyFieldEmpty = (form) => {
        const fieldMissing = []
        for( let i = 0; i < form.length - 1; i++){
            const name = form[i].name;
            const value = form[i].value
            if(!value){
                fieldMissing.push(name)
            }
        }
        return fieldMissing;
    }
    onSubmit = (e)=>{
        e.preventDefault();
        console.log(e.target.elements)
        const form = e.target.elements
        const hasMissingField = this.hasAnyFieldEmpty(form);
        if(hasMissingField.length > 0){
            const missingList = { 
                name: false,
                email: false,
                subject: false,
                message: false
            }
            for(let i = 0; i < hasMissingField.length; i++){
                missingList[hasMissingField[i]] = true;
            }
            this.setState(prevState => ({...prevState, error: missingList, hasError: true}))
        }else{
            // send to server
        }
    }

    render(){
        const { name, email, subject, message, hasError } = this.state;
        return (
            <Form onSubmit = {this.onSubmit}>
                <p className={hasError ? 'error' : ''}> Please fill all fields</p>
                <Grid>
                    <Input
                        className= {this.state.error.name ? 'error' : ''}
                        type='text'
                        placeholder='Your name*'
                        name='name'
                        value= {name}
                        required
                        onChange={this.handleChange}
                    />
                    <Input
                        className= {this.state.error.email ? 'error' : ''}
                        type='email'
                        placeholder='Your Email*'
                        name='email'
                        value= {email}
                        
                        onChange={this.handleChange}
                    />
                </Grid>
                <Input
                    className= {this.state.error.subject ? 'error' : ''}
                    type='text'
                    placeholder='Subject*'
                    name='subject'
                    value={subject}
                    required
                    onChange={this.handleChange}
                />
                <div>
                    <textarea
                        className= {this.state.error.message ? 'error' : ''}
                        placeholder='Your message'
                        name='message'
                        value={message}
                        required
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <Button>Submit</Button>
                </div>
            </Form>
        )
    }
}

export default ContactForm;