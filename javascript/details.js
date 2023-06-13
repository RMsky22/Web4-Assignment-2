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
    var heading = document.createElement('h1');
    heading.innerHTML = entry.fields.title;

    //creating a gallery div
    var gallery = document.createElement("div");

    //creating images
    entry.fields.portfolioReel.forEach(function (reel) {
        var reelImg = document.createElement("img");
        // console.log(reel);
        reelImg.src = reel.fields.file.url;
        gallery.append(reelImg);
    });



    document.getElementById("gallery").append(gallery);
    document.getElementById("place-for-content-details-page").append(heading);
});
