//JQuery on load
$(function () {
    var viewModel = new KnockoutDocs();
    viewModel.addItem(new Document("Hello", "World"));
    viewModel.addItem(new Document("goodbye", "World"));
    ko.applyBindings(viewModel);
});