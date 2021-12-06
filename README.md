# Dott: Technical Assignment
## Assignment
Described in PDF file under assignment/Dott.pdf

Language: typescript
## Usage
### move into the project directory
`cd project`
### install dependencies
`npm i`
### build and run program
`npm run start`

Now the program will start reading from stdin.

## Generating inputs
Perl script that generates by default n testcases with rows and columns between 1 and 182

`perl generate.pl [NUM_TESTCASES] [MAX_DIMENSIONS]`

### Running with generated input:
`perl generate.pl | npm run start`
