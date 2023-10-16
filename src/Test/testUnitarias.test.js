const appArbol = require('../controllers/arbolController')
const supertest = require('supertest')

//pruebas unitarias Árboles
const api = supertest(appArbol)
test('Prueba Arbol - consulta ArbolLote por id', () => {
    api.get("/arbolLote/:idLote")
        .expect('Content-Type', /application\/json/)
})

test('Prueba Arbol - consulta Arbol por id', () => {
    api.get("/arbol/:idArbol")
        .expect('Content-Type', /application\/json/)
})

test('Prueba Arbol - Arbol Plagas', () => {
    api.get("/arbolPlagas/:idArbol/:fecha")
        .expect('Content-Type', /application\/json/)
})

test('Prueba Arbol - Arbol Enfermedades', () => {
    api.get("/arbolEnfermedades/:idArbol/:fecha")
        .expect('Content-Type', /application\/json/)
})

test('Prueba Arbol - ArbolControlBitacora', () => {
    api.get("/arbolControlBitacora/:idArbol")
        .expect('Content-Type', /application\/json/)
})

test('Prueba Arbol - Arbol Detalle', () => {
    api.get("/arbolDetalle/:idArbol")
        .expect('Content-Type', /application\/json/)
})

test('Prueba Arbol- Crear Arbol', () => {
    api.get("/newArbol")
        .expect('Content-Type', /application\/json/)
})
test('Prueba Arbol- Actualizar Arbol', () => {
    api.get("/updateArbol")
        .expect('Content-Type', /application\/json/)
})
test('Prueba Arbol- Eliminar Arbol', () => {
    api.get("/deleteArbol/:idEmpleado/:idArbol")
        .expect('Content-Type', /application\/json/)
})


//LOTES
test('Prueba Lotes- Obtener Lote', () => {
    api.get("/lotefinca/:idFinca")
        .expect('Content-Type', /application\/json/)
})

test('Prueba Lotes- Obtener Lotes Grafica', () => {
    api.get("/lotefincaGrafica/:idFinca")
        .expect('Content-Type', /application\/json/)
})

test('Prueba Lotes- Obtener Reporte Lotes', () => {
    api.get("/lotefincaReporte/:idFinca")
        .expect('Content-Type', /application\/json/)
})

test('Prueba Lotes- Crear Lote', () => {
    api.get("/newLote")
        .expect('Content-Type', /application\/json/)
})
test('Prueba Lotes- Actualizar Lote', () => {
    api.get("/updateLote")
        .expect('Content-Type', /application\/json/)
})
test('Prueba Lotes- Eliminar Lote', () => {
    api.get("/deleteLote/:idempleado/:idLote")
        .expect('Content-Type', /application\/json/)
})


//LOGIN
test('Prueba Login- Inicio de Sesion', () => {
    api.get("/user")
        .expect('Content-Type', /application\/json/)
})

test('Prueba Login- Cambio de Password', () => {
    api.get("/userUpdatePass")
        .expect('Content-Type', /application\/json/)
})

test('Prueba Login- Crear Usuario', () => {
    api.get("/newUserEpl")
        .expect('Content-Type', /application\/json/)
})

//FINCA
test('Prueba Finca- Obtener Fincas', () => {
    api.get("/finca")
        .expect('Content-Type', /application\/json/)
})

test('Prueba Finca- Obtener Finca del Empleado', () => {
    api.get("/finca/:idempleado")
        .expect('Content-Type', /application\/json/)
})

//BITACORA
test('Prueba Bitacora - Crear Registro Bitacora', () => {
    api.get("/newBitacora")
        .expect('Content-Type', /application\/json/)
})
