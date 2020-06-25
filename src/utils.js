function* sequenceGenerator(start, stop, step = 1) {
	let current = start;

	while (current < stop) {
		yield current;
		current += step;
	}
}
