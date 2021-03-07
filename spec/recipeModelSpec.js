
describe("A recipe", function () {

    it("should exist", function () {
        expect(app.Models.Recipe).toBeDefined();
    });

    it("should have certain default values", function () {
        const recipe = new app.Models.Recipe();
        expect(recipe.get("name")).toEqual("Unnamed");
        expect(recipe.get("rating")).toEqual(0);
    })
});