import con from "./connection.js"

export async function inserirUsuario(usuario) {
    const comando = `
        INSERT INTO tb_usuario (nm_usuario)
            VALUES (?)
    `

    let registro = await con.query(comando, [usuario])
    let info = registro[0]

    return info.insertId
}

export async function consultarUsuario() {
    const comando = `
        SELECT id_usuario       id,
                nm_usuario      usuario
            FROM tb_usuario
    `

    let registro = await con.query(comando)
    let info = registro[0]

    return info
}

export async function alterarUsuario (usuario, id) {
    const comando = `
        UPDATE tb_usuario
            SET nm_usuario = ?
            WHERE id_usuario = ?
    `

    let registro = await con.query(comando, [usuario, id])
    let info = registro[0]

    return info.affectedRows
}

export async function deletarUsuario (id) {
    const comando = `
        DELETE FROM tb_usuario
            WHERE id_usuario = ?
    `

    let registro = await con.query(comando, [id])
    let info = registro[0]

    return info.affectedRows
}