import * as db from '../repository/usuarioRepository.js'

export async function inserirUsuarioService(usuario) {
    let id = await db.inserirUsuario(usuario)

    return id
}

export async function consultarUsuarioService() {
    let registros = await db.consultarUsuario()

    return registros
}

export async function alterarUsuarioService(usuario, id) {
    let linhasAfetadas = await db.alterarUsuario(usuario, id)

    return linhasAfetadas
}

export async function deletarUsuarioService(id) {
    let linhasAfetadas = await db.deletarUsuario(id)

    return linhasAfetadas
}