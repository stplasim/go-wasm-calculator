# Go and WebAssembly example

![Build and deplay](https://github.com/stplasim/go-webassembly-calculator/workflows/Build%20and%20deplay/badge.svg)

Go Webassembly Calculator is a small web based calculator made with Go Webassembly and Typescript.

## Local installation
### Build the WebAssembly
1. Navigate to `./src/go`
2. Run `make build`

### Build static assets
1. In the root folder run `npm install` or `npm i`
2. Run `npm run build-dev` to build it in development mode or `npm run build-prod` to build in production mode
3. Run `cp "$(go env GOROOT)/misc/wasm/wasm_exec.js" .` and copy the file into the dist folder

### Start the server
To start the server run `go run server.go` in the root folder.
*Note* The server will listen by default on port 3000. You can change it in `./server.go`