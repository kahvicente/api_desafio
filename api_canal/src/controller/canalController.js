import { Router } from "express"
import * as service from '../service/canalService.js'

const endpoints = Router()


endpoints.post('/canal', async (req, resp) => {
    try {
        let canal = req.body
        let id =  await service.inserirCanalService(canal)

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

endpoints.get('/canal', async (req, resp) => {
    try {
        let registros = await service.consultarCanalService()

        resp.send(registros)
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.put('/canal/:id', async (req, resp) => {
    try {
        let canal = req.body
        let id = req.params.id
        await service.alterarCanalService(canal, id)

        resp.send()
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.delete('/canal/:id', async (req, resp) => {
    try{
        let id = req.params.id
        let linhasAfetadas = await service.deletarCanalService(id)

        if (linhasAfetadas >= 1) {
            resp.send()
        } else {
            resp.status(404).send({
                erro: 'Nenhum registro encontrado.'
            })
        }
    }
    catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints