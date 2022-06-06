import {con} from "./connection.js";

export async function anime(nome){
    const comando = `
    insert_into tb_anime(nm_nome)
    values(?)`;
    const[linhas]=await con.query(comando,[nome])
    return linhas;
}
export async function consultaranime() {
	const comando = `
		SELECT id_anime			    id,
			nm_nome nome`
	const [linhas] = await con.query(comando);
	return linhas;
}