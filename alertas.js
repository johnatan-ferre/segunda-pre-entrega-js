Swal.fire({
    position: 'center',
    icon: 'info',
    title: 'Bienvenido a su biblioteca',
    showConfirmButton: true,
    timer: 2400,
    timerProgressBar: true,
})


btnCreate.addEventListener("click", () => {
    Toastify({
        text: "Libro agregado con éxito.",
        duration: 2900,
    }).showToast();
})