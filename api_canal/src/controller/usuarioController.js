import { Router } from "express"
import * as service from '../service/usuarioService.js'

const endpoints = Router()

endpoints.post('/canal/usuario/:usuario', async (req, resp) => {
    try {
        let usuario = req.params.usuario
        let id = await service.inserirUsuarioService(usuario)

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

endpoints.get('/canal/usuario', async (req, resp) => {
    try {
        let registros = await service.consultarUsuarioService()

        resp.send(registros)
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.put('/canal/usuario/:usuario/:id', async (req, resp) => {
    try {
        let usuario = req.params.usuario
        let id = req.params.id
        await service.alterarUsuarioService(usuario, id)

        resp.send()
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.delete('/canal/usuario/:id', async (req, resp) => {
    try {
        let id = req.params.id
        let linhasAfetadas = await service.deletarUsuarioService(id)

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