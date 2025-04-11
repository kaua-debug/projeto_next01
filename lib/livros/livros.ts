'use server'
import { pool } from "@/lib/db"
export async function addLivro( nome: string, autor: string, assunto: string, resumo: string, dataLancamento: string, preco_sugerido: number) {
	await pool.query(`insert into Livro (nome, autor, assunto, resumo, dataLancamento, preco_sugerido
		
		) values (
		 
    
		'${nome}', '${autor}', '${assunto}', '${resumo}', '${dataLancamento}', '${preco_sugerido}'
	
		)`)
}

	 export async function getLivros() {

		return (await pool.query(`select * from livro`)).rows
		
	 }

	 export async function updateLivro(

		id: number,
    	nome: string,
    	autor: string,
    	assunto: string,
    	resumo: string,
    	dataLancamento: string,
    	preco_sugerido: number

	 ) {
		await pool.query(`update livro set
			
			nome = $1,
			autor = $2,
			assunto = $3,
			resumO = $4,
			dataLancamento = $5,
			preco_sugerido = $6
		where id = $7	
			`,
		[
			nome,
			autor,
			assunto,
			resumo,
			dataLancamento,
			preco_sugerido,
			id
		]
		);
	 }

	 	export async function removeLivro(id: number) {
			await pool.query(`delete from livro where id = ${id}`);
		}