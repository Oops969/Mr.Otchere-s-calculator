    function appendValue(value) {
        document.getElementById('display').value += value;
    }

    function clearDisplay() {
        document.getElementById('display').value = '';
    }

    function deleteDisplay () {
        const display = document.getElementById('display');
        display.value = display.value.slice(0, -1);
    }

    function percentageDisplay() {
        const display = document.getElementById('display');
        if (display.value !== '') {
            const value = parseFloat(display.value);
            display.value = value / value;
        }
    }

    function calculate() {
        try {
            const result = eval(document.getElementById('display').value);
            document.getElementById('display').value = result;
        } catch (e) {
            document.getElementById('display').value = 'Error';
        }
    }