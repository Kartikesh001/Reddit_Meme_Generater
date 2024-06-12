document.addEventListener("DOMContentLoaded", () => {
    
    const generateMemeButton = document.querySelector(".meme-generater .generate-meme-button");
    const memeImage = document.querySelector(".meme-generater img");
    const memeTitle = document.querySelector(".meme-generater .meme-title");
    const memeAuthor = document.querySelector(".meme-generater .meme-author");

    
    const updateDetails = (url, title, author) => {
        memeImage.setAttribute("src", url);     // Set the image source
        memeTitle.innerHTML = title;            // Set the meme title
        memeAuthor.innerHTML = `by ${author}`;  // Set the author name
    }

    // Function to fetch a meme from the API and update the details
    const generateMeme = () => {
        fetch("https://meme-api.com/gimme/wholesomememes")
            .then(response => response.json())
            .then(data => {
                updateDetails(data.url, data.title, data.author);
            })
            .catch(error => {
                console.error("Error fetching meme:", error);
            });
    }

    
    generateMemeButton.addEventListener("click", generateMeme);

    
    generateMeme();
});
