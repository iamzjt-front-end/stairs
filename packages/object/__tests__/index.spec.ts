import { useJTRIsEmpty } from "../src";

describe("useJTRIsEmpty", () => {
	it("{} is true", () => {
		expect(useJTRIsEmpty({})).toBe(true);
	});

	it("{a: 1} is false", () => {
		expect(useJTRIsEmpty({ a: 1 })).toBe(false);
	});
});
