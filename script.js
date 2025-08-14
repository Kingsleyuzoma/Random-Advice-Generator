
const adviceEl = document.getElementById("advice");
const adviceBtn = document.getElementById("adviceBtn");

async function getAdvice() {
    adviceEl.textContent = "Loding advice.....";
    adviceBtn.disabled = true;

    
    try {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    adviceEl.textContent = `"${data.slip.advice}"`;
} catch (error) {
    adviceEl.textContent = "Oops! Couldn't fetch advice.";
}

adviceBtn.disabled = false;

}

adviceBtn.addEventListener("click" , getAdvice);

getAdvice();


