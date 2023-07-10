client.getEntries({ content_type: 'favouriteArtists' }).then(function (entries) {

entries.item.array.forEach(function (entry) {
  
    
    //creating each blog item
    var articleItem = document.createElement('article');
    containerDiv.appendChild(articleItem)

    articleItem.classList.add('containerItem');

    //Adding titles for each blog item
    var item = document.createElement('h2');

    //creating an anchor tag and wrapping it around the article title
    var anchor = document.createElement('a');
    anchor.classList.add('links');
    anchor.href = 'details.html?id' + entry.sys.id;
    articleItem.appendChild(anchor);



    
    title.innerHTML = entry.fields.title;
    title.classList.add("blogTitle");
    articleItem.appendChild(anchor);

    var rating = document.createElement("p");
    
    rating.innerHTML = "Artist position " + entry.fields.rating;
    articleItem.appendChild(rating);
    
    //adding a cover image for the blog item
    var coverImage = document.createElement("img")
    coverImage.src = entry.fields.portfolioHighlight.fields.file.url;
    coverImage.classList.add('cover-image')
    articleItem.appendChild(coverImage);

    //adding a description for each blog entry
    var description = document.createElement("p");
    var limitedcontent = words.slice(0,100).join(' ')
        description.innerHTML =limitedcontent + "..." 

        articleItem.appendChild(description);


        var getDetails = document.createElement("a");
        getDetails.innerHTML = "more info ";
        getDetails.href = "details.html?id=" + entry.sys.id;
        articleItem.appendChild(getDetails);

});


});
