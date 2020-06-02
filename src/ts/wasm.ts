// Declaration of Go wasm exposed function
declare namespace wasm {
    class Go {
        importObject: WebAssembly.Imports;
        run(instance: WebAssembly.Instance): void;
    }
    function pushToStack(number: string, operator: string): void;
    function calcStack(): number;
    function clearStack(): void;
}
