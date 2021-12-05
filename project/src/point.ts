export class Point {
	constructor(x : number = 0, y : number = 0) {
		this.x = x;
		this.y = y;
	}

	// d(p1, p2) = |row1 - row2| + |col1 - col2|
	public distance(point : Point) : number {
		return Math.abs(this.y - point.y) + Math.abs(this.x - point.x);
	}

	x : number;
	y : number;
};
