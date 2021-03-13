
describe("A recipe", function () {

    it("should exist", function () {
        expect(app.Models.Recipe).toBeDefined();
    });

    it("should have certain default values", function () {
        const recipe = new app.Models.Recipe();
        expect(recipe.get("name")).toEqual("Unnamed");
        expect(recipe.get("rating")).toEqual(0);
        expect(recipe.get("instructions").length).toEqual(0);
        expect(recipe.get("ingredients").length).toEqual(0);
        expect(recipe.get("dateAdded")).toBeDefined();
    });

    it("should identify if it has nuts", function () {
        const noRestrictions = new app.Models.Recipe(FIXTURES.recipes.noRestrictions);
        const withNuts = new app.Models.Recipe(FIXTURES.recipes.withNuts);
        
        expect(noRestrictions.containsNuts()).toBe(false);
        expect(withNuts.containsNuts()).toBe(true);
    });

    it("should identify if it has eggs", function(){
        const noRestrictions = new app.Models.Recipe(FIXTURES.recipes.noRestrictions);
        const withEggs = new app.Models.Recipe(FIXTURES.recipes.withEggs);

        expect(noRestrictions.containsEggs()).toBe(false);
        expect(withEggs.containsEggs()).toBe(true);
    });

    it("should identify if it is vegeterian", function(){
        const noRestrictions = new app.Models.Recipe(FIXTURES.recipes.noRestrictions);
        const withMeat = new app.Models.Recipe(FIXTURES.recipes.withMeat);

        expect(noRestrictions.containsMeat()).toBe(false);
        expect(withMeat.containsMeat()).toBe(true);
    });
});