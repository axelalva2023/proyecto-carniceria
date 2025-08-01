const botones = document.querySelectorAll(".boton")
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        alert("Producto agregado a tu carrito");
    });
});

const nav = document.querySelector("#nav")
const abrir = document.querySelector("#abrir")
const cerrar = document.querySelector("#cerrar")

abrir.addEventListener("click", () =>{
    nav.classList.add("visible")
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible")
})