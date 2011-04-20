YUI().use("event", "event-key", "node-event-simulate", function(Y) {
    
    // navigate to next item on today module.
    function nextArticle() {
        Y.log("next article");

        var selectedArticle = Y.one("div.carousel-container a.selected"),
            next = selectedArticle.next();

        if (next) {
            next.simulate("mouseover");
            next.focus();
        } else {
            // we have reached the end of current list.
            var nextButton = Y.one("div.navigation a.next");
            nextButton.simulate("click");
        }
    }

    function previousArticle() {
        Y.log("previous article");

        var selectedArticle = Y.one("div.carousel-container a.selected"),
            previous = selectedArticle.previous();

        if (previous) {
            previous.simulate("mouseover");
            previous.focus();
        } else {
            var previousButton = Y.one("div.navigation a.prev");
            previousButton.simulate("click");
        }
    }

    Y.on("key", previousArticle, document, "up:72+ctrl");
    Y.on("key", nextArticle, document, "up:76+ctrl");
});
