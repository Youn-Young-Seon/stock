import { template } from "./calculator.template";
import styles from './calculator.module.css';
import { Operator, NotOper, RenderType } from "../types";

export class Calc{
    param1: string;
    param2: string;
    flag: boolean;
    operator: string;
    expression: string[];
    result: number;
    template: string;
    renderTemplate: string;
    container: HTMLElement
    
    constructor(container: string){
        this.param1 = "";
        this.param2 = "";
        this.flag = true;
        this.operator = "";
        this.expression = [];
        this.result = 0;
        this.template = template;
        this.renderTemplate = template;

        this.container = document.querySelector(container) as HTMLElement;

        this.container.innerHTML = this.template;

        this.clickBtn();
    }

    clickBtn = () => {
        const td = this.container.querySelector(`.${styles.calc_table}`) as HTMLElement;
        
        td.addEventListener('click', (e: Event) => {
            const target: any = e.target;
            const button: NotOper | Operator = target.dataset.value;

            if(typeof(button) === 'undefined'){
                return;
            }

            this.checkButton(button);
        })
    }
    
    checkButton = (button: NotOper | Operator) => {
        const operRegExp = new RegExp(/\+|\-|\*|\/|\=/);
        
        operRegExp.test(button) ? this.generatedOper(button) : this.writeExpression(button);
    }

    writeExpression = (button: NotOper | Operator) => {
        if(button === 'C') return this.clearBtn();
        if(button === '<') {
            this.flag ? this.param1 = this.param1.slice(0, -1) : this.param2 = this.param2.slice(0, -1)
            this.render("number1");
            return;
        }else{
            if(this.flag){
                this.param1 += button
                this.render("number1");
            }else{
                this.param2 += button;
                this.render("number2");
            }  
        }
    }

    generatedOper = (button: NotOper | Operator) => {
        if(this.flag === true && button === '=') return;
        button !== '=' ? this.operator = button : this.operator;
        
        const param1: number = parseInt(this.param1);
        const param2: number = parseInt(this.param2);
        
        if(this.flag === false){
            if(this.operator === '*') this.result = param1 * param2;
            else if(this.operator === '+') this.result = param1 + param2;
            else if(this.operator === '-') this.result = param1 - param2;
            else if(this.operator === '/')
            if(param2 !== 0){ this.result = param1 / param2; } 
            else { alert('0으로 나누기 안됌'); return;}
            
            this.expression.push(this.param1);
            this.expression.push(this.operator);
            this.expression.push(this.param2);
            this.expression.push(button);
            console.log(this.expression);
            this.render("expression");
            this.render("operation");

            this.param1 = String(this.result);
            this.param2 = "";
        }
        this.flag = false;
    }

    clearBtn = () => {
        this.param1 = "";
        this.param2 = "";
        this.result = 0;
        this.flag = true;
        this.render("clear");
    }

    render = (gubun: RenderType) => {
        const expression = this.container.querySelector(`.${styles.calc_expression}`) as HTMLElement;
        const main = this.container.querySelector(`.${styles.calc_main}`) as HTMLElement;

        if(gubun === "expression") expression.innerHTML = this.expression.join(' ');
        if(gubun === "number1") main.textContent = this.param1;
        if(gubun === "number2") main.textContent = this.param2;
        if(gubun === "operation") main.textContent = String(this.result);
        if(gubun === "clear") {
            main.textContent = "0"; 
            this.expression = []; 
            expression.innerHTML = this.expression.join(' ')
        };

        // this.renderTemplate.replace('{{__calc_expression__}}', this.expression);
        // this.renderTemplate.replace('{{__calc_main__}}', this.param1);

        // console.log(this.renderTemplate);

        // this.container.innerHTML = this.renderTemplate;
    }
}