import { assert } from 'console';
import { Matrix } from './matrix'
import { Solution } from './solution'

/*
Concept:
1. read in Rows, Columns
2. Create a Matrixread data into the matrix
3. Execute testcase
4. Return or output result
*/
export class TestCase {
	constructor(lines : string[]) {
		this.createMatrix(lines[0]);
		lines.shift();
		this.parseValues(lines);
	}

	public solve() : Matrix {
		let solution = new Solution(this.matrix.getRows(), this.matrix.getColumns());
		return solution.solve(this.matrix);
	}

/* Parsing input, removing used lines */
	private createMatrix(line : string) {
		let values = line.split(' ');
		if (values.length != 2) {
			throw new Error("Invalid Dimension Line: " + line);
		}
		const row = parseInt(values[0]);
		const column = parseInt(values[1]);
		this.assertDimensions(row, column);

		this.matrix.setDimensions(row, column);
	}

	private parseValues(lines : string[]) {
		assert(lines.length >= this.matrix.getRows());
		for (let i = 0; i < this.matrix.getRows(); ++i) {
			assert(lines[0].length == this.matrix.getColumns());
			for (let j = 0; j < this.matrix.getColumns(); ++j) {
				let value = parseInt(lines[0][j]);
				if (value != 0 && value != 1) {
					throw new Error("Invalid Value: " + lines[0][j]);
				}
				this.matrix.set(i, j, value);
			}
			lines.shift();
		}
	}

	private assertDimensions(row : number, column : number) {
		if ((row < 1 || row > 182 || column < 1 || column > 182)
			|| (row == NaN || column == NaN)) {
			throw new Error("Invalid Dimensions");
		}
	}

/* Member Variables */
	private matrix : Matrix = new Matrix();
};
