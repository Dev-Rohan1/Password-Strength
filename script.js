let pass = document.querySelector(".password");
let msg = document.querySelector(".message p");
let str = document.querySelector(".Strength");

pass.addEventListener("input", function() {
    if (pass.value.length > 0) {
        msg.style.display = "block"
    } else {
        msg.style.display = "none"
    }

    if (pass.value.length < 4) {
        str.innerHTML = "weak";
    } else if (pass.value.length >= 4 && pass.value.length < 8) {
        str.innerHTML = "medium";
    } else if (pass.value.length >= 8) {
        str.innerHTML = "strong";
    }
});