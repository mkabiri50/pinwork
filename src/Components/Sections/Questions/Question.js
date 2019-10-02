
import React, { Component } from 'react';
import ToggleDisplay from 'react-toggle-display';
import './Question.css';
import Buttom from '../../Ui/Button/Button';
class Question extends Component {
    state = {
        q1: {
            question: 'سوال اول: سلام حالت چطوره؟',
            answer: 'تیتیتی یی تیهی هیتهی یتهتیه یتهیتهی یهتیه یهیهتی هتهیتهی یهتیهی هی یی ی یی ی ییی یییی ییی یییی ی ',
            show: false,
        },
        q2: {
            question: 'سوال دوم : آب حوضم خالی میکنید؟',
            answer: 'تیتیتی یی تیهی هیتهی یتهتیه یتهیتهی یهتیه یهیهتی هتهیتهی یهتیهی ییی ی  ی ی ی یی ی یی ی  یییی یییی یییی یییی یییی یییی ییی  ییی یییی یییی یییی ییی هی یی ی یی ی ییی یییی ییی یییی ی ',
            show: false,
        },
        q3: {
            question: 'سوالات متداول کارواش سیار در محل',
            answer: 'تیتیتی یی تیهی هیتهی یتهتیه یتهیتهی یهتیه یهیهتی هتهیتهی یهتیهی هی یی ی یی ی ییی یییی ییی یییی ی ',
            show: false,
        }

    }


    handleClick(key) {
        this.setState(preveState => {
            return {

                [key]: {
                    ...preveState[key],
                    show: !preveState[key].show
                }
            }

        })


    }

    render() {
        let backBtnImage = 'backDownImage'
        const q=this.state
        for (let key in q){
            console.log(key)
            if (key.show) {
                backBtnImage = 'backDropImage'
            }
        }
      
      
        return (
            <div>
                <div className='Qcontainer '>

                    <p style={{ fontSize: 24, fontWeight: 'bold' }}>سوالات متداول کارواش سیار در محل</p>

                    <div className='Qcontent'>
                        <p style={{ fontSize: 16 }}>تیتیتی یی تیهی هیتهی یتهتیه یتهیتهی یهتیه یهیهتی هتهیتهی یهتیهی هیتهی یهتیهی هیهیه یهایه ییهییه هیهیی هیتتی اهیاهیییی ی یییی ی ی ی یی یی یییی یییی یییی ثثث ثثث اااا ت تتتتت تتتت  تتتتت  تیت تیتی هتیختی </p>
                    </div>

                    <div style={{width:800 ,  paddingBottom: 20 , textAlign:'right'}}>
                        <p className="App-intro">
                            <button className={['QuestionBtn', backBtnImage].join(' ')} onClick={() => this.handleClick('q1')}>{this.state.q1.question}</button>
                        </p>
                        <ToggleDisplay show={this.state.q1.show}>  
                                بله خیلی متشکر خوبم اصلا از این بهتر نمیشود نییی ینی یمیمی یمیی یئمیی ییمی ییمیی ییمدی ییمیدی نیدین یییحنیی یمینی یدیمیی یندی یدیدی
                        </ToggleDisplay>
                        <p className="App-intro">
                            <button className={['QuestionBtn', backBtnImage].join(' ')} onClick={() => this.handleClick('q2')}>{this.state.q2.question}</button>
                        </p>
                        <ToggleDisplay show={this.state.q2.show}>    
                                بله خیلی متشکر خوبم اصلا از این بهتر نمیشود نییی ینی یمیمی یمیی یئمیی ییمی ییمیی ییمدی ییمیدی نیدین یییحنیی یمینی یدیمیی یندی یدیدی
                        </ToggleDisplay>
                        <p className="App-intro">
                            <button className={['QuestionBtn', backBtnImage].join(' ')} onClick={() => this.handleClick('q3')}>سوال اول: سلام حالت چطوره؟</button>
                        </p>
                        <ToggleDisplay show={this.state.q3.show}>    
                                بله خیلی متشکر خوبم اصلا از این بهتر نستسسسنخ ن خننخ نت ختت خ تخ تخنیختیخمیشود نییی ینی یمیمی یمیی یئمیی یییی یی  ی ی یی یی ی یی ی  ی یی ی ی ی ی ییمی ییمیی ییمدی ییمیدی نید
                        </ToggleDisplay>
                    </div>
                    <Buttom btnType='info'>سوالات بیشتر</Buttom>

                </div>

            </div>

        );
    }
}

export default Question;