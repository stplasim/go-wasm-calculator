build:
	GOARCH=wasm GOOS=js go build -o lib.wasm main.go math.go

get-lib:
	cp "$(go env GOROOT)/misc/wasm/wasm_exec.js" ./src/lib/
