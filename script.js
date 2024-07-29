const display = document.getElementById("input");

const addMeth = (meth) => {
    display.value += meth;
};

const backSpace = () => {
    display.value = display.value.substr(0, display.value.length - 1);
};

const positiveNegative = () => {
    display.value = "I AM SAYEF";
};

const calculate = () => {
    try {
        let meth = display.value.split("").map((x) => {
            if (x === "X") {
                return "*";
            }
            if (x === "÷") {
                return "/";
            } else {
                return x;
            }
        });

        display.value = eval(meth.join(""));
    } catch (error) {
        display.value = "Syntax Error";
    }
};

const clearDsp = () => {
    display.value = "";
};
