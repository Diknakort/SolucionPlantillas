$(document).ready(function () {
    let displayValue = '';

    $('.num').click(function () {
        appendNumber($(this).text());
    });

    $('.opera').click(function () {
        operation($(this).text());
    });

    $('#clear').click(function () {
        clearDisplay();
    });

    $('#calculate').click(function () {
        calculate();
    });

    function appendNumber(number) {
        displayValue += number;
        $('#display').val(displayValue);
    }

    function clearDisplay() {
        displayValue = '';
        $('#display').val(displayValue);
    }

    function operation(operator) {
        displayValue += operator;
        $('#display').val(displayValue);
    }

    function calculate() {
        try {
            let result = eval(displayValue);
            $('#display').val(result);
            displayValue = result.toString();
        } catch (error) {
            $('#display').val('Error');
        }
    }
});







