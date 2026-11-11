
// Welcome message
console.log("Welcome to my portfolio!");

// Navigation click effect
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        console.log("Navigation clicked!");
    });
});
