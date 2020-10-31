const concat = (first: string, second: string): string => {
	return `${first}${second}`;
}


interface MyHometaskValues {
	howIDoIt: string,
	simeArray: Array<string | number>,
	withData: Array<object>,
}


interface MyArray<T> {
	[N: number]: T;

	reduce<U>(fn: (acc: T, el: T, index?: number, array?: Array<T>) => U): U;
}
