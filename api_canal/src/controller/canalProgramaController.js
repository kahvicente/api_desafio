import { Router } from 'express'

import * as service from '../service/canalProgramaService.js'
const endpoints = Router()


endpoints.post('/canal/programa', async (req, resp) => {
    try {
        let canalPrograma = req.body
        let id = await service.inserirCanalProgramaService(canalPrograma)

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

endpoints.get('/canal/programa', async (req, resp) => {
    try {
        let registros = await service.consultarCanalProgramaService()

        resp.send(registros)
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.put('/canal/programa/:id', async (req, resp) => {
    try {
        let id = req.params.id
        let canalPrograma = req.body
        await service.alterarCanalProgramaService(canalPrograma, id)

        resp.send()
    }
    catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.delete('/canal/programa/:id', async (req, resp) => {
    try {
        let id = req.params.id
        let linhasAfetadas = await service.deletarCanalProgramaService(id)

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