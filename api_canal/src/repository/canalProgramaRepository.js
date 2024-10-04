import con from "./connection.js"

export async function inserirCanalPrograma(canalPrograma) {
    const comando = `
        INSERT INTO tb_canal_programa (id_canal, nm_programa, ds_genero, hr_programa)
            VALUES (?, ?, ?, ?)
    `

    let registro = await con.query(comando, [canalPrograma.canal, canalPrograma.programa, canalPrograma.genero, canalPrograma.horario])
    let info = registro[0]

    return info.insertId
}

export async function consultarCanalPrograma() {
    const comando = `
        SELECT
            tb_canal_programa.id_canal_programa AS id,
            tb_canal_programa.nm_programa AS programa,
            tb_canal_programa.hr_programa AS horario,
            tb_canal.nm_canal                                 
        FROM tb_canal_programa
        INNER JOIN tb_canal ON tb_canal_programa.id_canal = tb_canal.id_canal
    `

    let registro = await con.query(comando)
    let info = registro[0]

    return info
}

export async function alterarCanalPrograma(canalPrograma, id) {
    const comando = `
        UPDATE tb_canal_programa 
            SET id_canal = ?,
                nm_programa = ?,
                ds_genero = ?,
                hr_programa = ?
            WHERE id_canal_programa = ?
    `

    let registro = await con.query(comando, [canalPrograma.canal, canalPrograma.programa, canalPrograma.genero, canalPrograma.horario, id])
    let info = registro[0]

    return info.affectedRows
}

export async function deletarCanalPrograma(id) {
    const comando = `
        DELETE FROM tb_canal_programa
            WHERE id_canal_programa = ?
    `

    let registros = await con.query(comando, [id])
    let info = registros[0]

    return info.affectedRows
}