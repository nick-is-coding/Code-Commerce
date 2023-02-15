import styles from '../App.css';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signIn: true,
            submitted: false,
        }
    }

handleSubmit = (event) => {
    console.log('pressed');
    event.preventDefault();
      
    const form = event.target;
    const formElements = form.elements;
      
    if (form.checkValidity()) {
        this.setState({ submitted: true });
    }

}
      
handleInput = (event) => {
    const input = event.target;
    this.setState((prevState) => ({
      [input.name]: input.checkValidity(),
    }));
  }

    render() {

        const signIn = this.state.signIn;
        const submitted = this.state.submitted;

        const fields = [
            {label: 'Your Email Address *', name: 'email', required: true, typeInput: 'email', errorMessage: 'Please enter a valid email'},
            {label: 'Create Password *', name: 'password', required: true, typeInput: 'password', pattern:"^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$", errorMessage: 'Please enter a valid password'},
            {label: 'Confirm Password *', name: 'confirmPassword', required: true, typeInput: 'password', errorMessage: 'Your passwords do not match'},
            {label: 'First Name *', name: 'name', required: true, typeInput: 'text', pattern: "^[a-zA-Z]+$", errorMessage: 'Please enter a valid First Name'},
            {label: 'Surname *', name: 'surname', required: true, typeInput: 'text', pattern: "^[A-Za-z]+$", errorMessage: 'Please enter a valid  Surname'},
            {label: 'Postcode', name: 'postalCode', required: true, typeInput: 'number'}
        ]

        const signInFields = [
            {label: 'Email Address *', name: 'email', required: true, typeInput: 'email', errorMessage: 'Please enter a valid email'},
            {label: 'Password *', name: 'password', required: true, typeInput: 'password', errorMessage: 'Please enter a valid password',pattern:"^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"}
        ]

        return (
            <div className='LoginForm'>
            <div className='LoginInfo'>
                <div className="Toggle">
                <input type="radio" id="sign-in" name="toggle" value="sign-in" checked={signIn} onChange={() => this.setState({ signIn: true })} />
                <label htmlFor="sign-in">SIGN IN</label>
                <input type="radio" id="create-account" name="toggle" value="sign-up" checked={!signIn} onChange={() => this.setState({ signIn: false })} />
                <label htmlFor="sign-up">CREATE ACCOUNT</label>
            </div>
            <form onSubmit={this.handleSubmit}>
                {!signIn ? (fields.map((field, index) => {
                    const {label, name, required, typeInput, errorMessage, pattern} = field;
                    return (
                        <>
                        <div className='FormItem'>
                            <label> {label} </label>
                            <div className='FormInput'>
                            <input 
                                name={name}
                                onChange={this.handleInput}
                                autoComplete="off"
                                type={typeInput}
                                required={required}
                                pattern={pattern}
                            />
                            {submitted && !this.state[name] && (
                                <span className='ErrorMessageText'>{errorMessage}</span>
                            )}
                            </div>
                        </div>
                        {index === 1 && (
                            <div className='PasswordDisclaimer'>Password must be 8-20 characters, including at least one capital letter, at least one small letter, one number and one special character -!@#$%^&*()_+</div>
                        )}
                        </>
                    )
                })) : ( signInFields.map((signInFields, index) => {
                        const {label, name, required, typeInput, errorMessage, pattern} = signInFields;
                        return (
                            <>
                            <div className='FormItem'>
                                <label> {label} </label>
                                <div className='FormInput'>
                                <input 
                                    name={name}
                                    onChange={this.handleInput}
                                    autoComplete="off"
                                    type={typeInput}
                                    required={required}
                                    pattern={pattern}
                                />
                            {submitted && !this.state[name] && (
                                <span className='ErrorMessageText'>{errorMessage}</span>
                            )}
                                </div>
                            </div>
                            </>
                            )
                        })
                    )}
                </form>
                <div className='BottomInfo'>
                    <button
                        onClick={this.handleSubmit}
                        className='SaveButton'>SAVE</button>
                    <br />
                    <hr style={{ width: '40%', display: 'inline-block' }} />
                    <span style={{ padding: '0 10px' }}>or</span>
                    <hr style={{ width: '40%', display: 'inline-block' }} />
                    <br />
                    <button className='FaceBook'>SIGN UP WITH FACEBOOK</button>
                    <br/>
                    <a href="#">Cancel</a>
                    <br/>
                    <div>
                        <a href="#">Privacy Policy and Cookies</a> | <a href="#">Terms of Sale and Use</a>
                    </div>
                </div>
                </div>
            </div>


        );
    }
}