function handleNo() {
    alert("Te amo mi enojona");
}

function handleYes() {
    document.getElementById('main').innerHTML = `
        <h2>¿me perdonas?</h2>
        <button onclick="handleForgiveYes()">Sí</button>
        <button onclick="handleForgiveNo(this)">No</button>
    `;
}

function handleForgiveNo(button) {
    button.classList.add('grow');
}

function handleForgiveYes() {
    alert("Sabía que me perdonarías vv");
    location.reload(); // Recargar la página para reiniciar
}
