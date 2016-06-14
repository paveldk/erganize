var Observable = require("data/observable").Observable;

function createEventViewModel() {
    var viewModel = new Observable();
   
    viewModel.onCreateTap = function() {
        console.log(this.title)
        console.log(this.date)
    }

    return viewModel;
}

exports.createEventViewModel = createEventViewModel;