var textInURL = window.location.search;

var parametersInURL = new URLSearchParams(textInURL);

var id = parametersInURL.get('id');

var client = contentful.createClient({
    space: '4yqo0hnakye1',
    accessToken: 'Kw9zuwqD0Zyk2uTUT0hytvtgKNYsY0tM9YSFTng-7oQ',

});



client.getEntry(id).then(function (entry) {
    console.log(entry);

    //creating an H1 element
    var heading = document.createElement('h2');
    heading.innerHTML = entry.fields.title;

    //creating a paragraph element for description
    var description = document.createElement('p');
    description.innerHTML = entry.fields.description;
    console.log(description);
    var coverImage = document.createElement('img')
    coverImage.src = entry.fields.portfolioHighlight.fields.file.url;

    //creating a gallery div
    var gallery = document.createElement("div");

    //creating images
    entry.fields.portfolioReel.forEach(function (reel) {
        var reelImg = document.createElement("img");
        // console.log(reel);
        reelImg.src = reel.fields.file.url;
        gallery.append(reelImg);
    });

    document.getElementById("page-title").append(heading);
    document.getElementById("place-for-content-details-page").append(coverImage);
    document.getElementById("place-for-content-details-page").append(description);
     document.getElementById("gallery").append(gallery);
});
