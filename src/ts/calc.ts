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
           // @ts-ignore
           pushToStack(number, value);
           display("0");
           number = "";
       }

        if(value === "=") {
            // @ts-ignore
            pushToStack(number, ".");
            // @ts-ignore
            display(calcStack());
            number = "";
        }

        if(value === "Del") {
            // @ts-ignore
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