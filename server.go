package main

import (
	"log"
	"net/http"
	"strings"
)

const (
	dir = "./dist"
	port = ":3000"
)

func main()  {
	// Serve files
	fs := http.FileServer(http.Dir(dir))

	// Start server and register default handler function
	log.Print("Serving " + dir + " on http://localhost" + port)
	_ = http.ListenAndServe(port, http.HandlerFunc(func(resp http.ResponseWriter, req *http.Request) {
		// Set Cache Control headers
		resp.Header().Add("Cache-Control", "no-cache")

		// if WebAssembly file is required set headers
		if strings.HasSuffix(req.URL.Path, ".wasm") {
			resp.Header().Set("content-type", "application/wasm")
		}
		// Serve files
		fs.ServeHTTP(resp, req)
	}))
}


