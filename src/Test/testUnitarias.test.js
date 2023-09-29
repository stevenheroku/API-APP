const appArbol = require('../controllers/arbolController')
const supertest = require('supertest')

//pruebas unitarias
const api = supertest(appArbol)
test('prueba consulta lote por id', () => {
    api.get("/arbolLote/:idLote")
        .expect('Content-Type', /application\/json/)
})