import * as db from '../repository/canalProgramaRepository.js'

export async function inserirCanalProgramaService(canalPrograma) {
    let id = await db.inserirCanalPrograma(canalPrograma)

    return id
}

export async function consultarCanalProgramaService() {
    let registros = await db.consultarCanalPrograma()

    return registros
}

export async function alterarCanalProgramaService(canalPrograma, id) {
    let linhasAfetadas = await db.alterarCanalPrograma(canalPrograma, id)

    return linhasAfetadas
}

export async function deletarCanalProgramaService(id) {
    let linhasAfetadas = await db.deletarCanalPrograma(id)

    return linhasAfetadas
}