'use server'
import { Pool } from "pg";
import { pool } from "../db"
export async function addAnimal(nome: string, nome_cientifico: string, especie: string, grupo: string) {
    await pool.query(`insert into animais (nome, nome_cientifico, especie, grupo
        
        
        ) values (
        
        
        ('${nome}', '${nome_cientifico}', '${especie}', '${grupo}'
        )`);

}

        export async function updateAnimais(

         id: number,
         nome: string,
         nomeCientifico: string,
         especie: string,
         grupo: string

        ) {

        await pool.query (

                `update animais SET
                
                nome = '${nome}'
                nome_cientifico = '${nomeCientifico}'
                especie = '${especie}'
                grupo = '${grupo}'
                where id ${id} 
                
                `

        );

        }

        export async function removeAimal(id:number) {

            await pool.query(``DELETE from animais where id = ${})
            
        }
            
        