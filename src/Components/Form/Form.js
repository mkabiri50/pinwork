import React, { Component } from 'react';
import Select from 'react-select';
import Input from '../Ui/Input/Input'
import Buttom from '../Ui/Button/Button'
import './Form.scss';
class Form extends Component {
    state = {
        submitform: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'نام'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            family: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'نام خانوادگی'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            phone: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'شماره تلفن'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 8,
                    maxLength: 8,
                    isNumeric: true
                },
                valid: false,
                touched: false
            },
            city: {
                elementType: 'select',
                elementConfig: {
                    options: [

                        { value: 'تهران', label: 'تهران' },
                        { value: 'اصفهان', label: 'اصفهان' }
                    ], placeholder: 'ساکن چه شهری هستید؟'
                },
                value: '',
                validation: {},
                valid: true
            },
            experties: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        // { value: '', label: 'متخصص چه کاری هستید؟' },
                        { label: 'react', value: 'React' },
                        { label: 'node js', value: 'node js' }
                    ],
                    placeholder: 'متحصص چه کاری هستید؟'
                },
                value: '',
                validation: {},
                valid: true
            },
            introduce: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'معرفی یک متخصص دیگر'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },

            formIsValid: false
        }
    }

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }



        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }
    inputChangedHandler = (event, inputIdentifier) => {
        const updatedsubmitform = { ...this.state.submitform };
        const updatedFormElement = { ...updatedsubmitform[inputIdentifier] };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        let formIsValid = true;
        for (let inputIdentifier in updatedsubmitform) {
            formIsValid = updatedsubmitform[inputIdentifier].valid && formIsValid
        }
        updatedsubmitform[inputIdentifier] = updatedFormElement;

        this.setState({ submitform: updatedsubmitform, formIsValid: formIsValid });
    }

    render() {

        const expertise = this.state.submitform.experties.elementConfig.options

        const city = this.state.submitform.city.elementConfig.options


        const customStyles = {
            control: base => ({
                ...base,
                width: 424,
                height: 48,
                borderWidth: 2,
                borderColor: '#D2D2D2',
                marginTop: 20
            })
        };
        return (

 
        
                <div dir="rtl" className='Container'>
                    <h1 className='Titr' >
                        رایگان ثبت نام کنید
                </h1>

                    <div>

                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginLeft: 10., marginRight: 10, alignContent: 'flex-start', }}>
                        <Input
                        style= {'Type-1'}
                            elementType={this.state.submitform.name.elementType}
                            elementConfig={this.state.submitform.name.elementConfig}
                            value={this.state.submitform.name.value}
                            invalid={this.state.submitform.name.valid}
                            shouldValidation={this.state.submitform.name.validation}
                            touched={this.state.submitform.name.touched}
                            placeholder={this.state.submitform.name.elementConfig.placeholder}
                            changed={(event) => this.inputChangedHandler(event, 'name')}
                        />
                        <Input
                           style= {'Type-1'}
                            elementType={this.state.submitform.family.elementType}
                            elementConfig={this.state.submitform.family.elementConfig}
                            value={this.state.submitform.family.value}
                            invalid={this.state.submitform.family.valid}
                            shouldValidation={this.state.submitform.family.validation}
                            touched={this.state.submitform.family.touched}
                            placeholder={this.state.submitform.family.elementConfig.placeholder}
                            changed={(event) => this.inputChangedHandler(event, 'family')}
                        />

                    </div>


                    <div style={{
                        display: 'flex', flexDirection: 'column', alignItems: 'center',
                    }}>
                        <Input
                            elementType={this.state.submitform.phone.elementType}
                            elementConfig={this.state.submitform.phone.elementConfig}
                            value={this.state.submitform.phone.value}
                            invalid={this.state.submitform.phone.valid}
                            shouldValidation={this.state.submitform.phone.validation}
                            touched={this.state.submitform.phone.touched}
                            placeholder={this.state.submitform.phone.elementConfig.placeholder}
                            changed={(event) => this.inputChangedHandler(event, 'phone')}
                        />


                        <div className="col-md-12">
                            <Select styles={customStyles} options={city}
                                placeholder={this.state.submitform.city.elementConfig.placeholder} />
                        </div>
                        <div className="col-md-12">
                            <Select styles={customStyles} options={expertise}
                                placeholder={this.state.submitform.experties.elementConfig.placeholder} />
                        </div>




                        <div style={{ padding: 20, paddingTop: 100, paddingBottom: 0 }}>
                            <Input
                                elementType={this.state.submitform.introduce.elementType}
                                elementConfig={this.state.submitform.introduce.elementConfig}
                                value={this.state.submitform.introduce.value}
                                invalid={this.state.submitform.introduce.valid}
                                shouldValidation={this.state.submitform.introduce.validation}
                                touched={this.state.submitform.introduce.touched}
                                placeholder={this.state.submitform.introduce.elementConfig.placeholder}
                                changed={(event) => this.inputChangedHandler(event, 'phone')}
                            />

                        </div>

                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingRight: 30, paddingLeft: 32 }}>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2ZM0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11Z" fill="#0088D4" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11 10C11.5523 10 12 10.4477 12 11V15C12 15.5523 11.5523 16 11 16C10.4477 16 10 15.5523 10 15V11C10 10.4477 10.4477 10 11 10Z" fill="#0088D4" />
                                <path d="M12 7C12 7.55228 11.5523 8 11 8C10.4477 8 10 7.55228 10 7C10 6.44771 10.4477 6 11 6C11.5523 6 12 6.44771 12 7Z" fill="#0088D4" />
                            </svg>
                            <p style={{ textAlign: "center" }}>
                                معرفی متخصص دیکر الزامی نیست ولی در صورت معرفی یک متخصص دیگر 5000 تومان دریافت خواهید کرد
                        </p>
                        </div>
                        <div style={{ alignItems: 'center', marginBottom: 24 }}>
                            <Buttom btnType='info' > پیوستن به پین ورک </Buttom>

                        </div >

                    </div>

                </div>


        );
    }
}

export default Form;