'use server'
import { pool } from "../db"
export async function addPneu(marca: string, modelo: string, largura: string, raio: string, espessura: string, carga_maxima: string) {
    await pool.query(`insert into Pneus (marca, modelo, largura, raio, espessura, carga_maxima) values ('${marca}', '${modelo}', '${largura}', '${raio}', '${espessura}', '${carga_maxima}')`)
}