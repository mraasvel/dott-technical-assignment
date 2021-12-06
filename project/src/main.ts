import * as readline from 'readline';
import { Matrix } from './matrix';
import { TestCase } from './testcase';
import { Point } from './point';

async function getInput(): Promise<string[]> {
	const rl = readline.createInterface({
		input: process.stdin
	});

	let lines: string[] = [];
	for await (const line of rl) {
		lines.push(line);
		for (let i = 0; i < line.length; ++i) {
			if (!((line[i] >= '0' && line[i] <= '9') || line[i] == ' ')) {
				throw new Error("Invalid Line: " + line);
			}
		}
	}

	return lines;
}

function printMatrix(m: Matrix<number>) {
	for (let y = 0; y < m.getRows(); ++y) {
		let line: string = "";
		for (let x = 0; x < m.getColumns(); ++x) {
			line += m.get(new Point(x, y)).toString();
			if (x < m.getColumns() - 1) {
				line += ' ';
			}
		}
		console.log(line);
	}
}

getInput().then(lines => {
	if (lines.length == 0) {
		throw new Error("Error: no input given");
	}

	const num_tests: number = parseInt(lines[0]);
	lines.shift();
	for (let i: number = 0; i < num_tests; ++i) {
		if (lines.length == 0) {
			throw new Error("Invalid Input: empty line");
		}
		let testcase: TestCase = new TestCase(lines);
		printMatrix(testcase.solve());
	}
});
