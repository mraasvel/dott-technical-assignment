export class Matrix {
	constructor(rows : number, columns : number) {
		this.#rows = rows;
		this.#columns = columns;
		this.#table = [];
	}

	#table : number[];
	#rows : number;
	#columns : number;
};
