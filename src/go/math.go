package main

import (
	"strconv"
)

// Parse math stack
func parseExpression(mathStack *[]string) float64 {
	// fist position of the stack must me a number
	avg, _ := strconv.ParseFloat((*mathStack)[0], 32)

	// Loop over stack
	for i, exp := range *mathStack {
		switch exp {
		case "+":
			// Convert to float and make the selected operation
			num2, _ := strconv.ParseFloat((*mathStack)[i+1], 32)
			avg = avg + num2
			break

		case "-":
			num2, _ := strconv.ParseFloat((*mathStack)[i+1], 32)
			avg = avg - num2
			break

		case "X":
			num2, _ := strconv.ParseFloat((*mathStack)[i+1], 32)
			avg = avg * num2
			break

		case "/":
			num2, _ := strconv.ParseFloat((*mathStack)[i+1], 32)
			avg = avg / num2
			break
		}
	}

	// Clear stack
	*mathStack = nil

	// return result
	return avg
}