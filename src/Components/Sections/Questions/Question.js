
import React, { Component } from 'react';
import './Question.scss';
import Buttom from '../../Ui/Button/Button';
import Que from '../../Que/Que';
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


        return (

            <div className='Qcontainer'>

                <p style={{ fontSize: 24, fontWeight: 'bold' }}>سوالات متداول کارواش سیار در محل</p>

                <div className='Qcontent'>
                    <p style={{ fontSize: 16 }}>تیتیتی یی تیهی هیتهی یتهتیه یتهیتهی یهتیه یهیهتی هتهیتهی یهتیهی هیتهی یهتیهی هیهیه یهایه ییهییه هیهیی هیتتی اهیاهیییی ی یییی ی ی ی یی یی یییی یییی یییی ثثث ثثث اااا ت تتتتت تتتت  تتتتت  تیت تیتی هتیختی </p>
                </div>

                <div style={{ width: 800, paddingBottom:20, textAlign: 'right',display:'flex', flexDirection:'column'}}>

                    <Que
                        show={this.state.q1.show}
                        answer={this.state.q1.answer}
                        question={this.state.q1.question}
                        clicked={() => this.handleClick('q1')} />
                    <Que
                        show={this.state.q2.show}
                        answer={this.state.q2.answer}
                        question={this.state.q2.question}
                        clicked={() => this.handleClick('q2')} />
                    <Que
                        show={this.state.q3.show}
                        answer={this.state.q3.answer}
                        question={this.state.q3.question}
                        clicked={() => this.handleClick('q3')} />

                  

                </div>
                <Buttom btnType='info'>سوالات بیشتر</Buttom>
            </div>

        );
    }
}

export default Question;