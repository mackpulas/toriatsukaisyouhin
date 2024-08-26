console.log("Hello JS!");

const likeButton = document.querySelector("#likeButton");
const likeCountText = document.querySelector("#likeCountText");

likeButton.addEventListener("click", () => {
    console.log("クリックされました");
    });

let likeCount = 0;
likeButton.addEventListener("click", () => {
    likeCount++;
    likeCountText.textContent = likeCount;
});
