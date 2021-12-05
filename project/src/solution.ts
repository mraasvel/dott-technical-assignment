import { assert } from 'console';
import { Matrix } from './matrix'
import { Point } from './point';
import { Queue } from './queue';

/*
Class for the actual implementation of solving the problem statement
*/
export class Solution {
	constructor(rows : number, columns : number) {
		this.distances = new Matrix<number>(rows, columns);
		this.searching = new Matrix<boolean>(rows, columns);
		for (let y = 0; y < rows; ++y) {
			for (let x = 0; x < columns; ++x) {
				this.distances.set(new Point(x, y), Infinity);
				this.searching.set(new Point(x, y), false);
			}
		}
	}

	public solve(map : Matrix<number>) : Matrix<number> {
		for (let y = 0; y < map.getRows(); ++y) {
			for (let x = 0; x < map.getColumns(); ++x) {
				const p = new Point(x, y)
				if (map.get(p) == 1) {
					// Pixel is white
					this.dijkstra(p, map);
				}
			}
		}
		return this.distances;
	}

/* Private Functions */

	private shouldSetDistance(to_set : Point, original : Point) : boolean {
		return this.distances.get(to_set) == Infinity
		|| this.distances.get(to_set) > to_set.distance(original)
	}

	/*
	Add all neighbouring points to the queue (if not yet present)
	Explore only those that have a distance less than the current point (skip already set points)
	*/
	private dijkstra(point : Point, map : Matrix<number>) {
		let queue = new Queue<Point>();
		queue.push(point);
		this.searching.set(point, true);

		// this.distances.set(point, 0);
		while (!queue.empty()) {
			const p = queue.front();
			queue.pop();
			this.searching.set(p, false);
			this.distances.set(p, p.distance(point));
			this.addNeighboursToQueue(p, point, queue, map);
		}
	}

	private shouldExplorePoint(to_explore : Point, original : Point, map : Matrix<number>) : boolean {
		return !this.distances.isOutOfBounds(to_explore) &&
			map.get(to_explore) == 0 &&
			this.searching.get(to_explore) == false &&
			this.shouldSetDistance(to_explore, original);
	}

	// For each neighbour, check if it exists, and if it should be explored
	private addNeighboursToQueue(p : Point, original : Point, queue : Queue<Point>, map : Matrix<number>) {
		const neighbours = [
			new Point(p.x, p.y - 1),
			new Point(p.x, p.y + 1),
			new Point(p.x - 1, p.y),
			new Point(p.x - 1, p.y - 1),
			new Point(p.x - 1, p.y + 1),
			new Point(p.x + 1, p.y),
			new Point(p.x + 1, p.y - 1),
			new Point(p.x + 1, p.y + 1)
		];

		for (let i = 0; i < neighbours.length; ++i) {
			if (this.shouldExplorePoint(neighbours[i], original, map)) {
				queue.push(neighbours[i]);
				this.searching.set(neighbours[i], true);
			}
		}
	}


	// This was the initial solution, but it was slow so I implemented Dijkstra's instead
	// Bruforce: complexity: O(n^2)
	// For each other pixel, set the distance from the current white pixel
	private bruteforce(point : Point) {
		// Set all other pixels to the distance of this pixel
		this.distances.set(point, 0);
		for (let y = 0; y < this.distances.getRows(); ++y) {
			for (let x = 0; x < this.distances.getColumns(); ++x) {
				const current_point = new Point(x, y);
				const dist = current_point.distance(point);

				// Point is set either if it is infinity (uninitialized) or has a greater distance to another white pixel
				if (this.shouldSetDistance(current_point, point)) {
					this.distances.set(current_point, dist);
				}
			}
		}
	}

/* Private Members */
	private distances : Matrix<number>;
	private searching : Matrix<boolean>;
};
