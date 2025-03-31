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
                
                    marca = '${marca}',
                    modelo = '${modelo}',
                    largura = ${largura},
                    raio = ${raio},
                    espessura = ${espessura},
                    carga_maxima = ${carga_maxima}
                    WHERE id = ${id}
                
                 `
        )
    }

        export async function removePneu() {
            await pool.query(`delete fom pneus WHERE id = ${id}`);
        }