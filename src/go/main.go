package main

import (
	"syscall/js"
)

var mathStack = make([]string, 0)

// Math stack handler
func pushToStack(this js.Value, p []js.Value) interface{} {
	// Push number to stack
	mathStack = append(mathStack, p[0].String())

	// if not equal push operator to stack
	if p[1].String() != "." {
		mathStack = append(mathStack, p[1].String())
	}

	return nil
}

// Calculate the stack
func calcStack(this js.Value, p []js.Value) interface{} {
	// Return value to typescript
	return js.ValueOf(parseExpression(&mathStack))
}

// Clear stack
func clearStack(this js.Value, p []js.Value) interface{} {
	mathStack = nil
	return nil
}

func main() {
	// Wait
	c := make(chan struct{}, 0)

	// Register functions
	js.Global().Set("pushToStack", js.FuncOf(pushToStack))
	js.Global().Set("calcStack", js.FuncOf(calcStack))
	js.Global().Set("clearStack", js.FuncOf(clearStack))

	<-c
}