import Stack from "../src/stack/Stack";

it("Create empty Stack", () => {
	const stack = new Stack();
	console.log(stack);
	expect(stack.stack).toStrictEqual([]);
});