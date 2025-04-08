'use server'
import { pool } from '@/lib/db'

export async function addCarro(
  fabricante: string,
   modelo: string, 
   ano_fabricacao: number,
    cor: string,
     quilometros_rodados: number
    )
      {
        
      await pool.query(`insert into carros (modelo, fabricante, ano_fabricacao, cor, quilometros_rodados) values ( 

        $1,
        $2,
        $3,
        $4,
        $5)`,


[

  fabricante,
  modelo,
  ano_fabricacao,
  cor,
  quilometros_rodados
  
])

}

export async function getCarros (){

  return (await pool.query(`select * from carros`)).rows;

}


export async function updateCarros(

   id: number, 
   fabricante:string,
   modelo:string,
   ano_fabricacao:number,
   cor:string,
   quilometros_rodados:number

) {

    await pool.query(
  `UPDATE carros 
     SET fabricante = $1, modelo = $2, ano_fabricacao = $3, cor = $4, quilometros_rodados = $5 
     WHERE id = $6`,
     [fabricante, modelo, ano_fabricacao, cor, quilometros_rodados, id]
);

}

export async function removeCarros(id: number ) {
  await pool.query(`delete from carros where id = $1`, [id]);
}