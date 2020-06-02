import Go = wasm.Go;

import '../css/style.css';
import './calc';

const go = new Go();

if('instantiateStreaming' in WebAssembly) {
    WebAssembly.instantiateStreaming(fetch('lib.wasm'), go.importObject).then(r => {
        go.run(r.instance);
    })
        .catch(err => console.error(err));
}
else {
    fetch('lib.wasm')
    .then(r => {
        r.arrayBuffer();
    }).then(byte => {
        // @ts-ignore
        WebAssembly.instantiate(byte, go.importObject).then(obj => {
            go.run(obj.instance);
        })
    })
}