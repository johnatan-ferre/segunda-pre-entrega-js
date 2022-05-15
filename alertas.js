


Swal.fire({
    position: 'center',
    icon: 'info',
    title: 'Bienvenido a su biblioteca',
    showConfirmButton: true,
    timer: 2400,
    timerProgressBar: true,
})

// btnCreate.addEventListener('click', (e) => {
//     e.preventDefault();
//     Toastify({
//         text: "Libro agregado con éxito.",
//         duration: 2900,
//         style: {
//             background: 'linear-gradient(to right, green, #65c95e)'
//         }
//     }).showToast();
// })



btnCreate.addEventListener('click', (e)=> {
    e.preventDefault();
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Libro agregado con éxito',
        showConfirmButton: false,
        timer: 2000,
    })
})