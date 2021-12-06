export class Queue<T> {
	public empty(): boolean {
		return this.size() == 0;
	}

	public size(): number {
		return this.container.length
	}

	public front(): T {
		return this.container[0];
	}

	public back(): T {
		return this.container[this.size() - 1];
	}

	public push(value: T): void {
		this.container.push(value);
	}

	public pop() {
		this.container.shift();
	}

	// Container type
	private container: T[] = [];
};
