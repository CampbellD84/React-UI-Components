import React from 'react';
import ActionButton from '../ButtonComponents/ActionButton';
import NumberButton from '../ButtonComponents/NumberButton';
import './Display.css';

const CalculatorDisplay = () => {
    return (
        <div className="calc-display">
            <div className="container">
                <div className="display-num">0</div>
                <div className="calc-row div-clear">
                    <ActionButton actionBtnStyle="btn-act" text ="clear"/>
                    <NumberButton btnStyle="btn-op"text="&divide;" />
                </div>
                <div className="calc-row">
                    <NumberButton btnStyle="btn-op" text="&times;" />
                    <NumberButton btnStyle="btn-num" text ={9}/>
                    <NumberButton btnStyle="btn-num" text ={8}/>
                    <NumberButton btnStyle="btn-num" text ={7}/>
                </div>
                <div className="calc-row">
                    <NumberButton btnStyle="btn-op" text="&minus;" />
                    <NumberButton btnStyle="btn-num" text ={6}/>
                    <NumberButton btnStyle="btn-num" text ={5}/>
                    <NumberButton btnStyle="btn-num" text ={4}/>
                </div>
                <div className="calc-row">
                    <NumberButton btnStyle="btn-op" text="+" />
                    <NumberButton btnStyle="btn-num" text ={3}/>
                    <NumberButton btnStyle="btn-num" text ={2}/>
                    <NumberButton btnStyle="btn-num" text ={1}/>
                </div>
                <div className="calc-row">
                    <NumberButton btnStyle="btn-op" text="=" />
                    <ActionButton actionBtnStyle="btn-act" btnStyle="btn-num" text={0}/>
                </div>
            </div>
        </div>
    );
}

export default CalculatorDisplay;