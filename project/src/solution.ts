import { Matrix } from './matrix'

/*
d(p1, p2) = |row1 - row2| + |col1 - col2|
*/
function distance(row1 : number, col1 : number, row2 : number, col2 : number) : number {
	return Math.abs(row1 - row2) + Math.abs(col1 - col2);
}

export class Solution {
	constructor(rows : number, columns : number) {
		this.distances.setDimensions(rows, columns);
		for (let i = 0; i < rows; ++i) {
			for (let j = 0; j < columns; ++j) {
				this.distances.set(i, j, Infinity);
			}
		}
	}

	public solve(map : Matrix<number>) : Matrix<number> {
		for (let i = 0; i < map.getRows(); ++i) {
			for (let j = 0; j < map.getColumns(); ++j) {
				if (map.get(i, j) == 1) {
					// Pixel is white
					this.dijkstra(i, j);
				}
			}
		}
		return this.distances;
	}

/* Private Functions */
	private dijkstra(row : number, column : number) {
		// Set all other pixels to the distance of this pixel
		this.distances.set(row, column, 0);

		/* Very inefficient bruteforce */
		for (let i = 0; i < this.distances.getRows(); ++i) {
			for (let j = 0; j < this.distances.getColumns(); ++j) {
				const dist = distance(row, column, i, j);
				if (this.distances.get(i, j) == Infinity
					|| this.distances.get(i, j) > dist) {
					this.distances.set(i, j, dist);
				}
			}
		}
	}

/* Private Members */
	private distances : Matrix<number> = new Matrix<number>();
};