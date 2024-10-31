document.addEventListener('DOMContentLoaded', function() {
    const metodoPago = document.getElementById('metodoPago');
    const nequiInfo = document.getElementById('nequiInfo');
    const formPago = document.getElementById('formPago');

    metodoPago.addEventListener('change', function() {
        if (this.value === 'nequi') {
            nequiInfo.classList.remove('hidden');
        } else {
            nequiInfo.classList.add('hidden');
        }
    });

    formPago.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Pago confirmado. Se iniciará el proceso de gestión del producto o servicio.');
        // Aquí puedes agregar la lógica para iniciar el proceso de gestión
    });
});