import con from "./connection.js"

export async function inserirProgramaFavorito(programaFavorito) {
    const comando = `
        INSERT INTO tb_programa_favorito (id_usuario, id_canal_programa, vl_avaliacao)
            VALUES (?, ?, ?)
    `

    let registros = await con.query(comando, [programaFavorito.usuario, programaFavorito.canal, programaFavorito.avaliacao])
    let info = registros[0]

    return info.insertId
}

export async function consultarProgramaFavorito() {
    const comando = `
        SELECT 
            tb_programa_favorito.id_programa_favorito AS id,
            tb_programa_favorito.vl_avaliacao AS avaliacao,
            tb_usuario.nm_usuario AS usuario,
            tb_canal_programa.nm_programa AS nome
        FROM tb_programa_favorito
        INNER JOIN tb_usuario ON tb_programa_favorito.id_usuario = tb_usuario.id_usuario
        INNER JOIN tb_canal_programa ON tb_programa_favorito.id_canal_programa = tb_canal_programa.id_canal_programa
    `

    let registros = await con.query(comando)
    let info = registros[0]

    return info
}

export async function alterarProgramaFavorito(programaFavorito, id) {
    const comando = `
        UPDATE tb_programa_favorito 
            SET id_usuario = ?, 
                id_canal_programa = ?, 
                vl_avaliacao = ?
            WHERE id_programa_favorito = ?
    `

    let registros = await con.query(comando, [programaFavorito.usuario, programaFavorito.canal, programaFavorito.avaliacao, id])
    let info = registros[0]

    return info.affectedRows 
}

export async function deletarProgramaFavorito(id) {
    const comando = `
        DELETE FROM tb_programa_favorito
            WHERE id_programa_favorito = ?
    `

    let registros = await con.query(comando, [id])
    let info = registros[0]

    return info.affectedRows
}
