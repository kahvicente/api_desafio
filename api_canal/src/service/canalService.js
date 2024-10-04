import * as db from '../repository/canalRepository.js'

export async function inserirCanalService(canal) {
    let id = await db.inserirCanal(canal)

    return id
}

export async function consultarCanalService() {
    let registros = await db.consultarCanal()

    return registros
}

export async function alterarCanalService(canal, id) {
    let linhasAfetadas = await db.alterarCanal(canal, id)

    return linhasAfetadas
}

export async function deletarCanalService (id) {
    let linhasAfetadas = await db.deletarCanal(id)

    return linhasAfetadas
}