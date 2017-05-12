describe("Testing camel case helper", () => {
  it("should be able to convert", () => {
    define(["to-camel-case"], function(toCamelCase) {
      expect(toCamelCase("FooBar")).toBe("fooBar");
    });
  });
});
