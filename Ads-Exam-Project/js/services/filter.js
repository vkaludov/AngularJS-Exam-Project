app.factory('filter', function() {
    var filterParams = {};

    function adsFilteredByCategory(category) {
        if (category == null) {
            filterParams = {};
        } else {
            filterParams.categoryId = category.id;
        }
    }

    function adsFilteredByTown(town) {
        if (town == null) {
            filterParams = {};
        } else {
            filterParams.townId = town.id;
        }
    }

    function getFilterParams() {
        return filterParams;
    }

    function clearFilterParams() {
        filterParams = {};
    }

    return{
        adsFilteredByCategory: adsFilteredByCategory,
        adsFilteredByTown: adsFilteredByTown,
        getFilterParams: getFilterParams,
        clearFilterParams: clearFilterParams
    }
});