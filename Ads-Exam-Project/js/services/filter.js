app.factory('filter', function() {
    var filterParams = {};

    function adsFilteredByCategory(category) {
        filterParams.categoryId = category.id;
    }

    function adsFilteredByTown(town) {
        filterParams.townId = town.id;
    }

    function getFilterParams() {
        return filterParams;
    }

    return{
        adsFilteredByCategory: adsFilteredByCategory,
        adsFilteredByTown: adsFilteredByTown,
        getFilterParams: getFilterParams
    }
});