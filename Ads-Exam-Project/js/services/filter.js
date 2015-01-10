app.factory('filter', function() {
    var params = {};

    function adsFilteredByCategory(category) {
        if (category == null) {
            params = {};
        } else {
            params.categoryId = category.id;
        }
    }

    function adsFilteredByTown(town) {
        if (town == null) {
            params = {};
        } else {
            params.townId = town.id;
        }
    }

    function getFilterParams() {
        return params;
    }

    function clearFilterParams() {
        params = {};
    }

    return{
        adsFilteredByCategory: adsFilteredByCategory,
        adsFilteredByTown: adsFilteredByTown,
        getFilterParams: getFilterParams,
        clearFilterParams: clearFilterParams
    }
});