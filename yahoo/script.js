const searchButton = document.querySelector(".search-button");
const input = document.querySelector(".input");

searchButton.addEventListener("click", () => {
    const query = input.value
    const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;

    window.location.href = url;
});
