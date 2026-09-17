const darkModeBtn = document.getElementById("darkModeBtn");
const downloadBtn = document.getElementById("downloadBtn");

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkModeBtn.textContent = "☀️ Light Mode";
    } else {
        darkModeBtn.textContent = "🌙 Dark Mode";
    }
});

downloadBtn.addEventListener("click", () => {
    window.print();
});