/* DEFINIMOS LAS CONTANTES PAR ESCUCHAR EL EVENTO */

const elTabs = document.getElementById('screen-tabs');
const elResult = document.getElementById('result');
const elOperator = document.getElementById('elOperator');
let elResultHistory = document.getElementById('elResultHistory');

let resultHistory = '';
let result = '';
let operator = '';


const calculator = () => {
    if (!elTabs) return;

    elTabs.addEventListener('click', e => {

        const el = e.target;

        if (result.length < 7) {

            if (el.dataset.number) {
                if (elResult.innerHTML == 0) {
                    elResult.innerHTML = '';
                }
                result += el.dataset.number;
                elResult.innerHTML = result;
            }

        }

        if (el.dataset.operator) {

             
            if(resultHistory === '' && result !== '' && el.dataset.operator){
                resultHistory = result;
                result = '';

                elResultHistory.innerHTML = resultHistory;
                elResult.innerHTML = '';
            }else if (result !== '' && resultHistory !== '') {
                result = elResult.innerHTML;
            }else{
                result = '';
                resultHistory = '';

                elResultHistory = result;
                elResult = result;
            }


            switch (el.dataset.operator) {
                case 'reset':
                    resetCalculator();
                break;

                case 'divider': 
                    operator = 'divider';
                    elOperator.innerHTML = '/'
                    break;

                case 'multiply':

                    operator = 'multiply';
                    elOperator.innerHTML = '*'
                    break;


                case 'minus':
                    operator = 'minus';
                    elOperator.innerHTML = '-'
                    break;

                case 'plus':
                    operator = 'plus';
                    elOperator.innerHTML = '+'
                    break;

                case 'equals':

                    mainCalculator();

                    renderResult()

                   
                    break;

                default:
                    break;
            }
        }

        if(el.dataset.backspace){
            result = elResult.innerHTML;
            result = result.substring(0, result.length - 1)
            elResult.innerHTML = result;
        }
    });
}


resetCalculator = () => {
    resultHistory = '';
    result = '';
    operator = '';

    elResult.innerHTML = result;
    elResultHistory.innerHTML = resultHistory;
    elOperator.innerHTML = operator;

    if(result == '0'  || result == '') elResult.innerHTML = '';
}

resetElViews = () => {
    elResult.innerHTML = '';
    elResultHistory.innerHTML = '';
}

renderResult = () => {
    elResult.innerHTML = result;
    elResultHistory.innerHTML = resultHistory;

}

calcDivider = (r, rh) => {
    result = rh / r;
    resultHistory = '';     
    elResult.innerHTML = result;
    elResultHistory.innerHTML = resultHistory;
}


mainCalculator = () => {
    
    if(operator == 'divider'){
        calcDivider(result, resultHistory)
    }

    if(operator == 'multiply'){
        calcMultily(result, resultHistory)
    }

    if(operator == 'plus'){
        calcPlus(result, resultHistory)
    }

    if(operator == 'minus'){
        calcMinus(result, resultHistory)
    }

    
    renderResult();

    operator = '';
    elOperator.innerHTML = operator;
    
}

calcDivider = (r, rh) => {
    result = rh / r;
    resultHistory = '';
}

calcPlus = (r, rh) => {
    result = Number(rh) + Number(r);
    resultHistory = '';     
}

calcMinus = (r, rh) => {
    result = Number(rh) - Number(r);
    resultHistory = '';
}

calcMultily = (r, rh) => {
    result = rh * r;
    resultHistory = '';
}





calculator();