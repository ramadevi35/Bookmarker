//Listen For Form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);
//Save Function Bookmark
function saveBookmark(e) {

    //Get Form Values
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;

    var bookmark = {
        name: siteName,
        url: siteUrl
    }
    /*
    //Local storage test
    localStorage.setItem('test', 'Hello World');
    console.log(localStorage.getItem('test'));
    localStorage.removeItem('test');
    console.log(localStorage.getItem('test'));
    */

    //Test if bookmarks is null
    if (localStorage.getItem('bookmarks') === null) {
        //Init array
        var bookmarks = [];
        //Add To array
        bookmarks.push(bookmarks);
        //Set to localStorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
        //Get bookmarks from localStorage
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        //Add bookmark to array
        bookmarks.push(bookmarks);
        //Re-set back to local storage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    }
    //prevent form from submitting
    e.preventDefault();
}
//Fetch bookmarks

function fetchBookmarks() {
    //Get bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    //Get output id
    var bookmarksResults = document.getElementById('bookmarksResults');
    //Build output
    bookmarksResults.innerHTML = '';
    for (var i = 0; i < bookmarks.length; i++) {
        var name = bookmarks[i].name
        var url = bookmarks[i].url

        bookmarksResults.innerHTML += '<div class="Well">' +
            '<h3>' + name +
            '</h3>' +
            '</div>';
    };

}

