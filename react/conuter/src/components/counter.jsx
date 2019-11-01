import React from 'react';
/* import CounterFn from './counterFn';   */  
import './counter.css';
import ButtonsPanel from './buttonsPanel';
import Add from './add';

class Counter extends React.Component { //dziedziczy po komponencie reactowym
         
    //      state = {
    //          counterValue: 0,   
    //  }

    constructor(props) {
        super(props);
        let initValue =0;
        if( ! isNaN(this.props.initValue) ) {           //tutaj this a funkcyjnym bez this
            initValue = parseInt(this.props.initValue); //musi sparsowac zeby dodawalo liczbe do liczby
        }
        this.state = {
            counterValue: initValue, // bo obiekt 
            valueOne: 5,
            valueTwo: 10,
            oneTwo: 0,
            fromChild: '',
        }
    }

    /*  changeValue = () => {
    
             this.setState((prevState) => {
                    return({
                        counterValue: prevState.counterValue +1,
                         })
                        }
                    }
                 
         */


    changeValue = () => {                   //bierze state ile jest po wywolaniu metody zmienia sie o 1 uruchamiamy przez przycisk 1
        this.setState({
            counterValue: this.state.counterValue + 1,
        })
     }

     resetCounter = (resetCounter) => {
         let initValue = 0

         if(resetCounter === true) {
             console.log(resetCounter);             // pobiera nam po kliknieciu przycisku pobiera stamtad true albo false
             if (! isNaN(this.props.initValue)) {    //jesli jest not a number zwraca nam true 
                initValue = parseInt(this.props.initValue);
             } 
         }
         
         this.setState({            // set state wykonuje nam sie reinit
             counterValue: initValue
         })
     }

     addtwovalue = () => {
         this.setState({
             oneTwo: this.state.valueOne + this.state.valueTwo,  //wartosc tych dwoch
         })
     }

     changeText = (text) => {
         this.setState({
             fromChild: text,   
         })
     }


    render() {
        return(
            <div className="counter">
                Licznik:
                <span className="value">{this.state.counterValue}</span>
                {/* <button onClick={this.changeValue}>Add 1</button>   */}   
                

                <ButtonsPanel changeValue={this.changeValue} resetCounterValue={this.resetCounter}/>
                <div>
               <Add valueOne={this.state.valueOne}
                    valueTwo={this.state.valueTwo}
                    oneTwo={this.state.oneTwo}
                    addtwovalue={this.addtwovalue}
                    changeText={this.changeText}/>
                    <span>Text from child : {this.state.fromChild}</span>  
                </div>
            </div>
             
        )
    }
}

export default Counter;