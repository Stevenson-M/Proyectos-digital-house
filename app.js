let archivoDeTareas = require('./funcionesDeTareas');

let accion = process.argv[2];

let tareas = archivoDeTareas.leerArchivo();
switch(accion) {
    case "Listar":
        tareas.forEach((tarea, index) => { 
            console.log((index + 1) +'. ' + tarea.titulo + ' - ' + tarea.estado);
        });
        //forEach significa "por cada uno", nos indica que por cada uno de los parametros que se le pases va a ejecutar la funcion que se le indique.
        //index es un parametro optativo que podria no poner y que simplemente me indica la posicion de los dato
    break;
    case "Filtrar":
        let estado = process.argv[3];  
        let filtradas = archivoDeTareas.filtrarPorEstado(estado);
        filtradas.forEach(
        (tarea, indice) => console.log((indice + 1)+ "-" + tarea.titulo)
        )
    break;
    case "Crear":
        let titulo = process.argv[3];
        let tarea = {
            titulo: titulo,
            estado: "pendiente"
        }
        archivoDeTareas.guardarTarea(tarea);
    break;
    case "Actualizar":
        let indiceTarea = process.argv[3];
        let nuevoEstado = process.argv[4];
        archivoDeTareas.modificarEstado(indiceTarea,nuevoEstado);
    break;
    default:
        console.log("no me has indicado la tarea");
}
