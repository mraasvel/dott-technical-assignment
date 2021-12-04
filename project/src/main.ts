import { Matrix } from './matrix';
import * as readline from 'readline';
import { assert } from 'console';
import { TestCase } from './testcase';

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

getInput().then(lines => {
	assert(lines.length > 0);

	const num_tests : number = parseInt(lines[0]);
	
	lines.shift();
	for (let i : number = 0; i < num_tests; ++i) {
		assert(lines.length != 0);
		let testcase : TestCase = new TestCase(lines);
	}
});

