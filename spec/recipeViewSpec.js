
// describe("A recipe view", function () {

//     it("should exist", function () {
//         console.log(window.__html__);
//         console.log($("#recipe-tmpl").html());
//         expect(app.Views.Recipe).toBeDefined();
//     });

//     it("should have a template", function () {
//         var recipeModel = new app.Models.Recipe(FIXTURES.recipes.noRestrictions);
//         var recipeView = new app.Views.Recipe({ model: recipeModel });

//         expect(recipeView.template).toBeDefined();
//     });

// }); ''

// describe('A rendered view', function () {

//     var revipeview, recipeModel;

//     beforeEach(function () {
//         recipeModel = new app.Models.Recipe(FIXTURES.recipes.noRestrictions);
//         revipeview = new app.Views.Recipe({ model: recipeModel });
//         revipeview.render();
//     });

//     it('should have a title', function () {
//         expect(revipeview.$('.rating')).toHaveText(recipeModel.get('rating'));
//     });

//     it('should list ingredients', function () {
//         var ingredientEL = revipeview.$('.ingredient').first();
//         var ingredient = recipeModel.get('ingredients')[0];
//         var expectedString = ingredient.quantity + "" + ingredient.baseingredient + "," + ingredient.modifier;

//         expect(ingredientEL).toHaveText(expectedString);
//     });


// });

// describe('A notes section', function () {

//     var recipeModel;
//     var recipeView;
//     beforeEach(function () {
//         recipeModel = new app.Models.Recipe(FIXTURES.recipes.noRestrictions);
//         recipeView = new app.Views.Recipe({ model: recipeModel });
//         recipeView.render();
//     });

//     it('should have an add notes button', function () {
//         expect(recipeView.$('.add-note')).toBeVisible();
//     });

//     it('should reveal a notes section when button is clicked', function () {
//         expect(recipeView.$('.note-area')).not.toBeVisible();
//         recipeView.$('.add-note').click();

//         expect(recipeView.$('.note-area')).toBeVisible();
//         expect(recipeView.$('.add-note')).not.toBeVisible();
//         expect(recipeView.$('.save-note')).toBeVisible();
//         expect(recipeView.$('.cancel-note')).toBeVisible();
//     });

//     it('should return to normal state when cancel is clicked', function () {
//         recipeView.$('.add-note').click();
//         recipeView.$('.cancel-note').click();

//         expect(recipeView.$('.note-area')).not.toBeVisible();
//         expect(recipeView.$('.add-note')).toBeVisible();
//         expect(recipeView.$('.save-note')).not.toBeVisible();
//         expect(recipeView.$('.cancel-note')).not.toBeVisible();

//     });

//     it('should show a saved note after click of save note button', function () {
//         var noteStr = "This is a test note";
//         recipeView.$('.add-note').click();
//         recipeView.$('.note-area').val(noteStr);
//         recipeView.$('.save-note').click();

//         expect(recipeView.$('.note-area')).not.toBeVisible();
//         expect(recipeView.$('.save-note')).not.toBeVisible();
//         expect(recipeView.$('.cancel-note')).not.toBeVisible();
//         expect(recipeView.$('.add-note')).not.toBeVisible();

//         expect(recipeView.$('.note')).toBeVisible();
//         expect(recipeModel.get('note')).toBe(noteStr);
//         expect(recipeView.$('.note')).toHaveText(noteStr);

//     });
// });