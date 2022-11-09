function PaginationHelper(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;

    // An array of arrays, each subarray is a page
    this.book = [];
    for (let i = 0; i < this.collection.length; i += this.itemsPerPage) {
        this.book.push(this.collection.slice(i, i + this.itemsPerPage));
    }
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function () {
    return this.collection.length;
};

// returns the number of pages
PaginationHelper.prototype.pageCount = function () {
    return this.book.length;
};

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function (pageIndex) {
    try {
        return this.book[pageIndex].length;
    } catch (e) {
        return -1;
    }
};

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function (itemIndex) {
    // Input validation
    if (itemIndex > this.collection.length - 1 || itemIndex < 0) {
        return -1;
    }
    // counter is the index of the current item
    // if the counter matches the given itemIndex, return the current page
    let counter = 0;
    let result = 0;
    this.book.forEach((page, pageIndex) => {
        if (counter === itemIndex) {
            return true;
        }
        page.forEach(() => {
            if (counter === itemIndex) {
                return true;
            }

            return counter++;
        });

        result = pageIndex;
        return true;
    });
    return result;
};

// Wow, need to brush up my solving skills with plain Math abstraction
