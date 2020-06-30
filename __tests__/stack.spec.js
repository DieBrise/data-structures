import Stack from "../src/stack/Stack";

it("Create empty Stack", () => {
	const stack = new Stack();
	expect(stack.stack).toStrictEqual([]);
});

it("Confirm pushes", () => {
	const stack = new Stack();

	// First Push
	stack.push(1);
	expect(stack.stack).toStrictEqual([1]);

	// Second Push
	stack.push("two");
	expect(stack.stack).toStrictEqual([1, "two"]);
});

it("Confirm pops", () => {
	const stack = new Stack();

	stack.push(1);
	stack.push("two");
	
	// First Pop
	expect(stack.pop()).toStrictEqual("two");
	// Second Pop
	expect(stack.pop()).toStrictEqual(1);

	expect(stack.pop()).toStrictEqual(false);
});

it("Confirm peep", () => {
	const stack = new Stack();

	stack.push(1);
	stack.push("two");

	//First peep
	expect(stack.peep()).toStrictEqual("two");
	//Then pop
	stack.pop();
	expect(stack.peep()).not.toStrictEqual("two");
});