

var client = contentful.createClient({
    space: '4yqo0hnakye1',
    accessToken: 'Kw9zuwqD0Zyk2uTUT0hytvtgKNYsY0tM9YSFTng-7oQ',
   
})





 

client.getEntry('2HKedTS1qnN9MypndV2OBg')
.then((entry) => console.log(entry))
.catch(console.error)
// Create the Contentful client.



/************************/
/**************************************************************/
/************************/
//get all itmes from contentful - call that data 'entries'
//content_type: 'name of cms collection' is used to search only in a specific cms 
client.getEntries({ content_type: 'favouriteArtists' }).then(function (entries) {
    // log the title for all the entries that have it
    console.log(entries);

    //loop through each entry, call it 'entry   



    entries.items.forEach(function (entry) {
        //log the title for all the entries that have it 
        // console.log(entries);
        //loop through each entry, call it 'entry'
        var item = document.createElement("div");
        var title = document.createElement("h2");
        var item = document.createElement("div");


        item.classList.add("item");
        title.innerHTML = entry.fields.title;
        item.append(title);

        var description = document.createElement("p");
        description.innerHTML = entry.fields.description;
        item.append(description);

        if (entry.fields.portfolioHighlight) {
            console.log(entry.fields.portfolioHighlight.fields.file.url);
            var coverImage = document.createElement("img")
            coverImage.src = entry.fields.portfolioHighlight.fields.file.url;
            coverImage.classList.add('cover-image')
            item.append(coverImage);
        }

        if (entry.fields.portfolioReel) {
          console.log(entry);
         
        }
        var getDetails = document.createElement("a");
        getDetails.innerHTML = "get details";
        getDetails.href = "details.html?id="+ entry.sys.id;
        item.append(getDetails);

        document.getElementById("place-for-content").append(item);
        //structure will always be entry.field.nameoffield
        console.log("title: " + entry.fields.title);
        console.log("description : " + entry.fields.description);
       

        //entry.field.nameofimage.field.file.url

        if (entry.fields.productName) {
            console.log(entry.fields.productName);
        }
    });

});



