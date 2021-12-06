import { assert } from 'console';
import { Matrix } from './matrix'
import { Point } from './point';
import { Solution } from './solution'

/*
Concept:
1. read in Rows, Columns
2. Create a Matrix, read data into the matrix
3. Execute testcase
4. Return or output result
*/
export class TestCase {
	constructor(lines: string[]) {
		this.createMatrix(lines[0]);
		lines.shift();
		this.parseValues(lines);
	}

	// Simple interface function, returns the matrix with the solved distances as specified by the subject
	public solve(): Matrix<number> {
		let solution = new Solution(this.matrix.getRows(), this.matrix.getColumns());
		return solution.solve(this.matrix);
	}

	/* Parsing input, removing used lines */
	private createMatrix(line: string) {
		const values = line.split(' ');
		if (values.length != 2) {
			throw new Error("Invalid Dimension Line: " + line);
		}
		const row = parseInt(values[0]);
		const column = parseInt(values[1]);
		this.assertDimensions(row, column);

		this.matrix.setDimensions(row, column);
	}

	private parseValues(lines: string[]) {
		assert(lines.length >= this.matrix.getRows());
		let got_one = false;
		for (let y = 0; y < this.matrix.getRows(); ++y) {
			assert(lines[0].length == this.matrix.getColumns());
			for (let x = 0; x < this.matrix.getColumns(); ++x) {
				const value = parseInt(lines[0][x]);
				if (value != 0 && value != 1) {
					throw new Error("Invalid Value: " + lines[0][x]);
				} else if (value == 1) {
					got_one = true;
				}
				this.matrix.set(new Point(x, y), value);
			}
			lines.shift();
		}

		if (!got_one) {
			throw new Error("Only zero's in bitmap");
		}
	}

	private assertDimensions(row: number, column: number) {
		if ((row < 1 || row > 182 || column < 1 || column > 182)
			|| (row == NaN || column == NaN)) {
			throw new Error("Invalid Dimensions");
		}
	}

	/* Member Variables */
	private matrix = new Matrix<number>();
};
