const enterBtn = document.getElementById("enterBtn");
const welcomeScreen = document.getElementById("welcome-screen");
const birthdayWorld = document.getElementById("birthday-world");
const music = document.getElementById("birthdayMusic");

enterBtn.addEventListener("click", () => {

    welcomeScreen.style.display = "none";
    birthdayWorld.style.display = "block";

    music.play();

    confetti({
        particleCount: 200,
        spread: 120,
        origin: {
            y: 0.6
        }
    });

});
setTimeout(() => {

    document.getElementById("fairy").classList.add("show");

}, 3000);




















































































































































































































































































































const gift = document.getElementById("giftBox");

gift.addEventListener("click", () => {

    confetti({
        particleCount: 250,
        spread: 180,
        origin: { y: 0.6 }
    });

    alert("🎉 Happy 3rd Birthday Vinisha! 🎂💖");
});
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play();
        musicBtn.innerHTML = "⏸️ Pause Music";

    } else {

        music.pause();
        musicBtn.innerHTML = "🎵 Play Music";

    }

});
const giftBtn = document.getElementById("giftBtn");
const surpriseText = document.getElementById("surpriseText");

giftBtn.addEventListener("click", () => {

    surpriseText.style.display = "block";

});