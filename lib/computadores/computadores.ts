'use server'
import { pool } from "../db"
export async function addComputador(descricao: string, cpu: string, memoria: string, placaVideo: string, placaMae: string, fonte: string, armazenamento: string) {
    await pool.query(`insert into computadores (descricao, cpu, memoria, placa_de_video, placa_mae, fonte, armazenamento
        
        ) values (

        '${descricao}', ${cpu}'}, '${memoria}''${placaVideo}', ${placaMae}, '${fonte}', '${armazenamento}'
        )`)
}
        export async function getComputadores() {
            return  (await pool.query(`select * from computadores`)).rows
        }

        export async function updateComputador(
            id: number,
            descricao: string,
            cpu: string,
            memoria: string,
            placaVideo: string,
            placaMae: string,
            fonte: string, 
            armazenamento: string 
        ) {
            await pool.query(
                `
                update computadores set 
                    descricao = '${descricao}',
                    cpu = '${cpu}',
                    memoria = '${memoria}',
                    placaVideo = '${placaVideo}',
                    placaMae = '${placaMae}',
                    fonte = '${fonte}',
                    armazenamento = '${armazenamento}',
                where id = ${id}
                `
            )
        }

        export async function removeComputador(
            id: number
        ) {
            await pool.query(`delete from computadores where id = ${id}`);
        }