import con from "./connection.js";

export async function inserirCanal(canal) {
    const comando = `
        INSERT INTO tb_canal (nm_canal, nr_canal, bt_aberto)
            VALUES (?, ?, ?)
    `

    let registro = await con.query(comando, [canal.nome, canal.numero, canal.aberto])
    let info = registro[0]

    return info.insertId
}

export async function consultarCanal() {
    const comando = `
        SELECT id_canal         id,
                nm_canal        nome,
                nr_canal        numero,
                bt_aberto       aberto
            FROM tb_canal
    `

    let registro = await con.query(comando)
    let info = registro[0]

    return info
}

export async function alterarCanal(canal, id) {
    const comando = `
        UPDATE tb_canal
            SET nm_canal = ?, 
                nr_canal = ?, 
                bt_aberto = ?
            WHERE id_canal = ?
    `

    let registro = await con.query(comando, [canal.nome, canal.numero, canal.aberto, id])
    let info = registro[0]

    return info.affectedRows
}

export async function deletarCanal(id) {
    const comando = `
        DELETE FROM tb_canal
            WHERE id_canal = ?
    `

    let registro = await con.query(comando, [id])
    let info = registro[0]

    return info.affectedRows
}
