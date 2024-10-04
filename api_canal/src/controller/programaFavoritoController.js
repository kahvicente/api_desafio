import { Router } from "express"
import * as service from '../service/programaFavoritoService.js'
const endpoints = Router()

endpoints.post('/canal/programa/favorito', async (req, resp) => {
    try {
        let programaFavorito = req.body
        let id = await service.inserirProgramaFavoritoService(programaFavorito)

        resp.send({
            novoId: id
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/canal/programa/favorito', async (req, resp) => {
    try {
        let registros = await service.consultarProgramaFavoritoService()

        resp.send(registros)
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.put('/canal/programa/favorito/:id', async (req, resp) => {
    try {
        let programaFavorito = req.body
        let id = req.params.id
        await service.alterarProgramaFavoritoService(programaFavorito, id)

        resp.send()
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.delete('/canal/programa/favorito/:id', async (req, resp) => {
    try {
        let id = req.params.id
        let linhasAfetadas = await service.deletarProgramaFavoritoService(id)

        if (linhasAfetadas >= 1) {
            resp.send()
        } else {
            resp.status(404).send({
                erro: 'Nenhum registro encontrado.'
            })
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints