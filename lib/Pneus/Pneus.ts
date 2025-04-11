'use server'

import { pool } from "../db"


export async function addPneu(marca: string, modelo: string, largura: number, raio: number, espessura: number, carga_maxima: number) {
    await pool.query(`insert into Pneus (marca, modelo, largura, raio, espessura, carga_maxima
        
        
        ) values (
         
        	'${marca}', '${modelo}', ${largura}, ${raio}, ${espessura}, ${carga_maxima}
        
        )`)
}
    export async function getPneus() {

        return (await pool.query(`select * from pneus`)).rows
        
    }

    export async function updatePneu(id: number, marca:string, modelo:string, largura:number, raio:number, espessura:number, carga_maxima:number){
        await pool.query(
                `update pneus set
                
                    marca = $1,
                    modelo = $2,
                    largura = $3,
                    raio = $4,
                    espessura = $5,
                    carga_maxima = $6
                    WHERE id = $7
                
            `,
            [
                marca,
                modelo,
                largura,
                raio,
                espessura,
                carga_maxima,
                id

            ]
        )
    }

        export async function removePneu(id: number) {
            await pool.query(`delete from pneus WHERE id = $1`, [id]);
        }