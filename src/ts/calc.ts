import pushToStack = wasm.pushToStack;
import calcStack = wasm.calcStack;
import clearStack = wasm.clearStack;

let number = "";

// Setup event listeners
document.querySelectorAll('.btn').forEach(elm => {
   elm.addEventListener('click', evt => {
       const {value} = evt.target as HTMLInputElement;

       if(value.match(/^[0-9.]$/)) {
           number += value;
           display(number);
       }

       if(value.match(/^[+\-X\/]$/)) {
           pushToStack(number, value);
           display("0");
           number = "";
       }

        if(value === "=") {
            pushToStack(number, ".");
            display(calcStack().toString());
            number = "";
        }

        if(value === "Del") {
            clearStack();
            number = "";
            display("0");
        }
   })
});

// Display number
const display = (text: string) => {
    (document.getElementById("result") as HTMLInputElement).value = text;
}