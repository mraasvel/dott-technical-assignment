import { stringify } from "querystring";
import { Point } from "./point";

/*
Basic templated matrix data structure
*/
export class Matrix<T> {
	constructor(rows : number = 0, columns : number = 0) {
		this.setDimensions(rows, columns);
	}

/* Public Interface Functions */
	public setDimensions(rows : number, columns : number) : void {
		this.rows = rows;
		this.columns = columns;
		this.table = new Array<T>(rows * columns);
	}

	public set(point : Point, value : T) : void {
		this.exceptionIfOutOfBounds(point);
		this.table[this.computeIndex(point)] = value;
	}

	public get(point : Point) : T {
		this.exceptionIfOutOfBounds(point);
		return this.table[this.computeIndex(point)];
	}

	public isOutOfBounds(point : Point) : boolean {
		return point.y >= this.rows || point.x >= this.columns || point.y < 0 || point.x < 0;
	}

	public getRows() : number {
		return this.rows;
	}

	public getColumns() : number {
		return this.columns;
	}

/* Private Member Functions */
	private computeIndex(point : Point) : number {
		return point.y * this.columns + point.x;
	}

	private exceptionIfOutOfBounds(point : Point) : void {
		if (this.isOutOfBounds(point)) {
			throw new Error("matrix: row/column out of bounds");
		}
	}

/* Member Variables */
	private table : Array<T> = new Array<T>();
	private rows : number = 0;
	private columns : number = 0;
};
