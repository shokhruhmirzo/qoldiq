var son = prompt("Istalgan son kiriting:");

if (son % 3 === 0) {
    document.querySelector("h1").innerHTML = "3 ga bo'linadi";
} else {
    document.querySelector("h1").innerHTML = "3 ga bo'linmaydi";
}
