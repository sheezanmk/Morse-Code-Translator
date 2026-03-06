## Description

The purpose of this project was to build a Morse Code Translator that can convert:

- English text → Morse Code

- Morse Code → English text

The project focuses on:

- Writing clean, testable JavaScript functions

- Handling input validation and formatting

- Implementing unit tests using Jest

- Separating logic from DOM manipulation

This project was part of learning how to design pure functions and build testable frontend logic.

## Features

The Minimum Viable Product (MVP) includes:

- A user interface to input text

- Translate English → Morse

- Translate Morse → English

- Handle spacing correctly:
  - English words separated by spaces

  - Morse letters separated by spaces

  - Morse words separated by /

- Unit tests for all non-DOM logic

## Stack Used

# HTML

Used to build the structure of the translator interface.

# CSS

Used for styling the user interface.

# JavaScript

Core logic for encoding and decoding Morse code.

# Jest

Used to test the translation functions to ensure correctness and reliability.

The project separates translation logic from UI code, making the functions easier to test and maintain.

## Build Steps

- Clone the repository
- git clone https://github.com/yourusername/morse-code-translator.git
- Navigate to the project directory
- cd morse-code-translator
- Install dependencies
  - npm install
  - Run tests
  - npm test
  - Run the application

- Open index.html in your browser.

If using a local server:

- npx serve

## Design Goals / Approach

- Keep the translation logic clean and reusable

- Ensure functions are pure and testable

- Separate UI logic from translation logic

- Handle edge cases in user input

# Implementation Approach

The translator uses a mapping object that links each English letter to its Morse equivalent.

- Example:

A → .-
B → -...
C → -.-.

- To decode Morse back to English, a reverse mapping object is generated automatically using:
  - Object.entries()
  - Object.fromEntries()

This avoids duplicating data and ensures encoding and decoding remain consistent.

The translation functions then:

- Normalize input

- Split words and characters

- Map characters using the Morse dictionary

- Join the results into the final translated string

## Features

- Translate English → Morse

- Translate Morse → English

- Handles multiple words

- Ignores unsupported characters

- Input normalization (trimming and uppercasing)

- Unit tested translation functions

- Clean separation of logic and UI

## Known Issues

- The translator currently only supports A–Z characters

- Numbers and punctuation are not yet implemented

- Morse validation could be stricter for invalid dot/dash combinations

## Future Goals

If given more time, I would:

- Add support for numbers and punctuation

- Implement real-time translation while typing

- Improve input validation for Morse patterns

- Add a copy-to-clipboard feature

- Improve accessibility with ARIA labels and keyboard support

- Add sound playback for Morse code
