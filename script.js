// Selección de elementos del DOM
const input = document.querySelector('.form-control');
const botonAgregar = document.querySelector('.btn-danger');
const container = document.querySelector('.container:last-of-type');

// Clase Item
class Item {
    constructor(tarea) {
        this.crearDiv(tarea);
    }

    crearDiv(tarea) {
        // Crea un nuevo div para la tarea
        const divItem = document.createElement('div');
        divItem.classList.add('d-flex', 'align-items-center', 'gap-2', 'my-2', 'border', 'p-2', 'rounded', 'bg-light', 'item', 'shadow-sm');

        // Crea el input que mostrará la tarea
        const inputItem = document.createElement('input');
        inputItem.type = 'text';
        inputItem.classList.add('form-control', 'form-control-sm', 'w-80');
        inputItem.value = tarea;
        inputItem.disabled = true;

        // Crea el botón de editar
        const botonEditar = document.createElement('button');
        botonEditar.classList.add('btn', 'btn-warning', 'btn-sm', 'boton-editar');
        botonEditar.innerHTML = '🔒';

        // Crea el botón de eliminar
        const botonRemover = document.createElement('button');
        botonRemover.classList.add('btn', 'btn-danger', 'btn-sm', 'boton-remover');
        botonRemover.innerHTML = '🗑️';

        // Agrego los elementos al div de tarea
        divItem.appendChild(inputItem);
        divItem.appendChild(botonEditar);
        divItem.appendChild(botonRemover);

        // Agrego el div al contenedor principal
        container.appendChild(divItem);

        // Evento para editar la tarea
        botonEditar.addEventListener('click', () => {
            inputItem.disabled = !inputItem.disabled;
            botonEditar.innerHTML = inputItem.disabled ? '🔒' : '✏️';
        });

        // Evento para eliminar la tarea
        botonRemover.addEventListener('click', () => {
            container.removeChild(divItem);
        });
    }
}

// Función para verificar el input
function chequearInput() {
    const tarea = input.value.trim();
    if (tarea) {
        new Item(tarea);
        input.value = '';
    } else {
        alert('Por favor, escribe una tarea antes de agregarla.');
    }
}

// Asignar eventos
botonAgregar.addEventListener('click', chequearInput);
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') chequearInput();
});
