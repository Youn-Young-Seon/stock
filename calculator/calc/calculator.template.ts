import styles from './calculator.module.css';

export const template = `
    <div class="${styles.calc_container}">
        <div class="${styles.calc_wrap}">
            <div class="${styles.calc_expression}">
                
            </div>
            <div class="${styles.calc_main}">
                0
            </div>
        </div>
        <table class="${styles.calc_table}">
            <tr>
                <td colspan="2" data-value="C">C</td>
                <td data-value="<"><</td>
                <td data-value="/">/</td>
            <tr>
            <tr>
                <td data-value="7">7</td>
                <td data-value="8">8</td>
                <td data-value="9">9</td>
                <td data-value="*">*</td>
            <tr>
            <tr>
                <td data-value="4">4</td>
                <td data-value="5">5</td>
                <td data-value="6">6</td>
                <td data-value="-">-</td>
            <tr>
            <tr>
                <td data-value="1">1</td>
                <td data-value="2">2</td>
                <td data-value="3">3</td>
                <td data-value="+">+</td>
            <tr>
            <tr>
                <td colspan="2" data-value="0">0</td>
                <td data-value=".">.</td>
                <td class="${styles.bg_green}" data-value="=">=</td>
            <tr>
        </table>
    </div>
`;