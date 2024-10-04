import * as db from '../repository/programaFavoritoRepository.js'

export async function inserirProgramaFavoritoService(programaFavorito) {
    let id = await db.inserirProgramaFavorito(programaFavorito)

    return id
}

export async function consultarProgramaFavoritoService() {
    let registros = await db.consultarProgramaFavorito()

    return registros
}

export async function alterarProgramaFavoritoService(programaFavorito, id) {
    let linhasAfetadas = await db.alterarProgramaFavorito(programaFavorito, id)

    return linhasAfetadas
}

export async function deletarProgramaFavoritoService(id) {
    let linhasAfetadas = await db.deletarProgramaFavorito(id)

    return linhasAfetadas
}