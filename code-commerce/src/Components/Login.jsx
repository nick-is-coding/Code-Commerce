import styles from '../App.css';
import React from 'react';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signIn: true,
        }
    }


// handleSubmit = () => {}
// handleInput = () => {}

    render() {

        const signIn = this.state.signIn;

        const fields = [
            {label: 'Your Email Address *', name: 'email', required: 'true', typeInput: 'email'},
            {label: 'Create Password *', name: 'password', required: 'true', typeInput: 'text'},
            {label: 'Confirm Password *', name: 'confirmPassword', required: 'true', typeInput: 'text'},
            {label: 'First Name *', name: 'name', required: 'true', typeInput: 'text'},
            {label: 'Surname *', name: 'surname', required: 'true', typeInput: 'text'},
            {label: 'Postcode', name: 'postalCode', required: 'false', typeInput: 'number'}
        ]

        const signInFields = [
            {label: 'Email Address *', name: 'email', required: 'true', typeInput: 'email'},
            {label: 'Password *', name: 'password', required: 'true', typeInput: 'text'},
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

                <form>
                {!signIn ? (
                    fields.map((field, index) => {
                        const {label, name, required, typeInput} = field;
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
                                />
                                </div>
                            </div>
                            {index === 1 && (
                                <div className='PasswordDisclaimer'>Password must be 8-20 characters, including at least one capital letter, at least one small letter, one number and one special character -!@#$%^&*()_+</div>
                            )}
                            </>
                        )
                    })
                ) : (
                        signInFields.map((signInFields, index) => {
                            const {label, name, required, typeInput} = signInFields;
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
                                    />
                                    </div>
                                </div>
                                </>
                            )
                        })
                    )}
                </form>
                <div className='BottomInfo'>
                    <button
                        onSubmit='handleSubmit'
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