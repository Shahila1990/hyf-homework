const gifSearch = document.getElementById("search_gif");
const numOfGif = document.getElementById("num_of_gif");
const searchBtn = document.getElementById("btn")
const showGif = document.querySelector(".show-gif");

searchBtn.addEventListener('click', (e)=>{
    e.preventDefault()
   const gifName = gifSearch.value;
   //console.log(gifName);
   const limit = parseInt(numOfGif.value)
   //console.log(limit);
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=DCyKWYI1pVLhss3FoBYFEDHBFfV9WcOU&q=${gifName}&limit=${limit}`
    ).then(response=> response.json()).then((gif)=>{
        console.log(gif);
       
            gif.data.forEach( gifs=> {
                const image = document.createElement("img");
                image.src = gifs.images.original.url;
                showGif.appendChild(image);
            });
        
    })
})