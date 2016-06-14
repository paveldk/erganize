var topmost = require("ui/frame").topmost;

function openDrawer() {
    var page = topmost().currentPage;
    page.getViewById("drawer").toggleDrawerState();
}

exports.openDrawer = openDrawer;