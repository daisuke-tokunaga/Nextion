import greet from "../src/greet";

describe("greet", (): void => {
  test("should say hello to Tom.", (): void => {
    const response: string = greet("Tom");
    expect(response).toBe("Hello, Tom!");
  });
});
