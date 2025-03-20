'use server'

import { pool } from '@/lib/db'

export async function addAluno (nome: string,
         nome_pai: string,
         nome_mae: string,
         data_nascimento: string,
         cor_pele: string
         ) {

    await pool.query(`insert into alunos(nome, nome_pai, nome_mae, data_nascimento, cor_pele
        ) values ( '${nome}', '${nome_pai}',  '${nome_mae}',  '${data_nascimento}', '${cor_pele}')`
        );
}
 export async function getAlunos (){
    return (await pool.query(`select * from alunos`)).rows;

 }

 export async function updateAluno (
     
         id: number, 
         nome: string, 
         nomePai: string, 
         nomeMae: string, 
         dataNascimento: string, 
         corPele: string
)  {
    await pool.query(

        `update alunos SET
        
            nome = '${nome}',
            nome_pai = '${nomePai}',
            nome_mae = '${nomeMae}',
            data_nascimento = '${dataNascimento}',
            cor_pele = '${corPele},
             WHERE id = ${id}`

    );

}

export  async function removeAluno (id: number){
    await pool.query (`delete from alunos WHERE id = ${id}`);
}

 