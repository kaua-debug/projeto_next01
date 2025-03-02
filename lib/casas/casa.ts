'use server'
import { pool } from "../db"
export async function addCasas(tipo: string, endereco: string, areaterreno: string, areaconstruida: string, quartos: string, banheiros: string, edicula: string, churrasqueira: string, piscina: string, valorcondominio: string, precovenda: string) {
    await pool.query(`insert into casas (tipo, endereco, area_terreno, area_construida, quantidade_quartos, quantidade_banheiros, tem_edicula, tem_churrasqueira, tem_piscina, valor_condominio, preco_venda) values ('${tipo}', '${endereco}', '${areaterreno}', '${areaconstruida}', '${quartos}', ${banheiros}, '${edicula}', '${churrasqueira}', '${piscina}', ${valorcondominio}, '${precovenda}')`)
} 