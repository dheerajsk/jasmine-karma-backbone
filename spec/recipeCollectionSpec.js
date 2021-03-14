
// describe("A receipe collection", function () {

//     it("should exist", function () {
//         expect(app.Collections.Recipes).toBeDefined();
//     });

//     it("should contain recipes", function () {
//         const recipes = app.Collections.Receipes([FIXTURES.recipes.noRestrictions, FIXTURES.recipes.withEggs]);
//         expect(recipes.length).toEqual(2);
//         expect(recipes.first() instanceof app.Models.Recipe).toBeTruthy();
//     });

//     it("should consolidate recipe names", function () {
//         console.log("recipe names");
//         const recipes = app.Collections.Receipes([FIXTURES.recipes.noRestrictions, FIXTURES.recipes.withEggs]);
//         console.log(recipes);
//         expect(recipes.getRecipesNames()).toEqual(["Marinara", "Eggs Benedict"]);
//     });

//     it("should return the most recent reipe of a given name", function () {
//         const recipes = app.Collections.Receipes([FIXTURES.recipes.noRestrictions, FIXTURES.recipes.noRestrictionsRecent]);
//         const newestDate = recipes.getNewestFromName("Marinara").get("dateAdded");
//         expect(newestDate).toEqual(FIXTURES.recipes.noRestrictionsRecent.dateAdded);
//     });

//     it("should have a remote data source", function () {
//         var recipes = new app.Collections.Recipes();
//         expect(recipes.url).toBeDefined();
//     });

//     it("should populate data from backend", function () {
//         var recipes = new app.Collections.Recipes();
//         var fakeServer = sinon.fakeServer.create();
//         fakeServer.respondWith('/recipes', ['200', { 'content-type': 'application/json' }, JSON.stringify([FIXTURES.Receipes.noRestrictions])]);
//         recipes.fetch();
//         fakeServer.respond();
//         expect(recipes.length).toBeGreaterThan(0);
//         fakeServer.restore();
//     });

// });