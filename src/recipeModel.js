
var app = window.app || {};
app.Models = app.Models || {};
app.Models.Recipe = Backbone.Model.extend({
    defaults: function () {
        return {
            name: "Unnamed",
            rating: 0,
            ingredients: [],
            instructions: [],
            dateAdded: Date.now()
        };
    },

    containsNuts: function () {
        return this.checkForIngredientType('isNut');
    },

    containsEggs: function () {
        return this.checkForIngredientType('isEggs');
    },

    isVegeterian: function () {
        return this.checkForIngredientType('isMeat');
    },

    checkForIngredientType: function (propertyName) {
        const ingredients = this.get("ingredients");
        for (var i = 0; i < ingredients.length; i++) {
            if (ingredients[i][propertyName]) {
                return true;
            }
            return false;
        }
    }
});
