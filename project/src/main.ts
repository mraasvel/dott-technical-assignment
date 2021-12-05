import { Matrix } from './matrix';
import * as readline from 'readline';
import { assert } from 'console';
import { TestCase } from './testcase';
import { Point } from './point';

async function getInput() : Promise<string[]> {
	const rl = readline.createInterface({
		input: process.stdin
	});

	let lines : string[] = [];
	for await (const line of rl) {
		lines.push(line);
	}

	return lines;
}

function printMatrix(m : Matrix<number>) {
	for (let y = 0; y < m.getRows(); ++y) {
		let line : string = "";
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
	assert(lines.length > 0);

	const num_tests : number = parseInt(lines[0]);
	
	lines.shift();
	for (let i : number = 0; i < num_tests; ++i) {
		assert(lines.length != 0);
		let testcase : TestCase = new TestCase(lines);
		printMatrix(testcase.solve());
	}
});
