/*
Basic templated matrix data structure
*/
export class Matrix<T> {

	constructor(rows : number = 0, columns : number = 0) {
		this.rows = rows;
		this.columns = columns;
		this.table = new Array<T>(rows * columns);
	}

/* Public Interface Functions */
	public setDimensions(rows : number, columns : number) : void {
		this.rows = rows;
		this.columns = columns;
		this.table = new Array<T>(rows * columns);
	}

	public set(row : number, column : number, value : T) : void {
		this.boundCheck(row, column);
		this.table[this.computeIndex(row, column)] = value;
	}

	public get(row : number, column : number) : T {
		this.boundCheck(row, column);
		return this.table[this.computeIndex(row, column)];
	}

	public getRows() : number {
		return this.rows;
	}

	public getColumns() : number {
		return this.columns;
	}

	public print() : void {
		for (let i = 0; i < this.rows; ++i) {
			console.log(this.table.slice(this.columns * i, this.columns * i + this.columns));
		}
	}

/* Private Member Functions */
	private computeIndex(row : number, column : number) : number {
		return row * this.columns + column;
	}

	private boundCheck(row : number, column : number) : void {
		if (row >= this.rows || column >= this.columns) {
			throw new Error("matrix: row/column out of bounds");
		}
	}

/* Member Variables */
	private table : Array<T>;
	private rows : number;
	private columns : number;
};
