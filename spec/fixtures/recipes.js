
var FIXTURES = window.FIXTURES || {};

FIXTURES.recipes = {

    noRestrictionsRecent: {
        name: 'Marinara',
        dateAdded: 1521301600000,
        ingredients: [{
            baseIngredient: 'pomodoros',
            quantity: '8',
            modifier: 'crushed'
        }, {
            baseIngredient: 'onion',
            quantity: '1',
            modifier: 'chopped'
        }, {
            baseIngredient: 'garlic',
            quantity: '2 clove',
            modifier: 'miched'
        }]
    },
    noRestrictions: {
        name: 'Marinara',
        dateAdded: 1421301600000,
        ingredients: [{
            baseIngredient: 'pomodoros',
            quantity: '8',
            modifier: 'crushed'
        }, {
            baseIngredient: 'onion',
            quantity: '1',
            modifier: 'chopped'
        }, {
            baseIngredient: 'garlic',
            quantity: '2 clove',
            modifier: 'miched'
        }]
    },

    withNuts: {
        name: 'Broccoli with butter sauce',
        dateAdded: 1421301600000,
        ingredients: [{
            baseIngredient: 'Broccoli',
            quantity: '1',
            modifier: 'crushed'
        }, {
            baseIngredient: 'butter',
            quantity: '1',
            modifier: 'chopped'
        }, {
            baseIngredient: 'nuts',
            quantity: '2 clove',
            modifier: 'miched',
            isNut: true,
        }]
    },

    withEggs: {
        name: 'Eggs Benedict',
        dateAdded: 1421301600000,
        ingredients: [{
            baseIngredient: 'Eggs',
            quantity: '1',
            modifier: 'crushed',
            isEggs: true
        }, {
            baseIngredient: 'butter',
            quantity: '1',
            modifier: 'chopped'
        }, {
            baseIngredient: 'almond',
            quantity: '2 clove',
            modifier: 'miched'
        }]
    },

    withMeat: {
        name: 'Chicken Benedict',
        dateAdded: 1421301600000,
        ingredients: [{
            baseIngredient: 'Chicken',
            quantity: '1',
            modifier: 'crushed',
            isMeat: true
        }, {
            baseIngredient: 'butter',
            quantity: '1',
            modifier: 'chopped'
        }, {
            baseIngredient: 'almond',
            quantity: '2 clove',
            modifier: 'miched'
        }]
    }
}