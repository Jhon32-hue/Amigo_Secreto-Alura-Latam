document.addEventListener("DOMContentLoaded", function () {
    let amigos = [];

    function agregarAmigo() {
        const input = document.getElementById("amigo");
        const nombre = input.value.trim();

        if (!nombre) {
            alert("Por favor, ingresa un nombre válido antes de poder enviar.");
            return;
        }

        if (amigos.includes(nombre)) {
            alert("Este nombre ya está en la lista.");
            return;
        }

        amigos.push(nombre);
        console.log("Amigo almacenado:", nombre);
        actualizarLista();
        input.value = "";
    }

    function actualizarLista() {
        const lista = document.getElementById("listaAmigos");
        lista.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
    }

    function seleccionarAmigo() {
        if (amigos.length === 0) {
            alert("No hay amigos en la lista para seleccionar.");
            return;
        }
        let elegido = amigos[Math.floor(Math.random() * amigos.length)];
        console.log("Amigo seleccionado:", elegido);
        document.getElementById("resultado").innerHTML = `<li>Amigo seleccionado: ${elegido}</li>`;
    }

    // Eventos de botones
    document.querySelector(".button-add").addEventListener("click", agregarAmigo);
    document.querySelector(".button-draw").addEventListener("click", seleccionarAmigo);
});
