// plus button
let start = 0;
document.getElementById("btn-plus").addEventListener('click', function () {
    const initial = document.getElementById("number");
    const initialIncriment = start++
    initial.innerText = start;
})
// minus button
document.getElementById("btn-minus").addEventListener('click', function () {
    if (start == 0) {
        return;
    }
    else {
        const initial = document.getElementById("number");
        const initialdecrement = start--;
        initial.innerText = start;
    }

})
