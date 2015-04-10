//JQuery on load
$(function () {
    var viewModel = new KnockoutDocs();
    viewModel.addItem(new Document("hello", "world"));
    viewModel.addItem(new Document("goodbye", "world"));

    //debugging an observable exapmle (watching for a value change on the selectedItem property)
    viewModel.selectedItem.subscribe(function(newValue) {
        debugger;
    });

    //override the default equality comparer of knockout
    ko.observable.fn.equalityComparer = function(a ,b) {
        return a === b;
    };

    ko.applyBindings(viewModel);
});