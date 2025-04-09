'use server'
import { pool } from "../db";

export async function addApartamento(tipo: string, condominio: string, area_privativa: number, area_comum: number, quantidade_de_quartos: number, quantidade_de_banheiros: number, tem_churrasqueira: boolean, tem_piscina: boolean, valor_do_condominio: number, preco_de_venda: number) {
    await pool.query(
        `INSERT INTO apartamentos (tipo, condominio, area_privativa, area_comum, quantidade_de_quartos, quantidade_de_banheiros, tem_churrasqueira, tem_piscina, valor_do_condominio, preco_de_venda) 
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
        [tipo, condominio, area_privativa, area_comum, quantidade_de_quartos, quantidade_de_banheiros, tem_churrasqueira, tem_piscina, valor_do_condominio, preco_de_venda]
    );
}

export async function getApartamentos() {
    return (await pool.query(`SELECT * FROM apartamentos`)).rows;
}

export async function updateApartamento(id: number, tipo: string, condominio: string, area_privativa: number, area_comum: number, quantidade_de_quartos: number, quantidade_de_banheiros: number, tem_churrasqueira: boolean, tem_piscina: boolean, valor_do_condominio: number, preco_de_venda: number) {
    await pool.query(
        `UPDATE apartamentos SET 
         tipo = $1, 
         condominio = $2, 
         area_privativa = $3, 
         area_comum = $4, 
         quantidade_de_quartos = $5, 
         quantidade_de_banheiros = $6, 
         tem_churrasqueira = $7, 
         tem_piscina = $8, 
         valor_do_condominio = $9, 
         preco_de_venda = $10 
         WHERE id = $11`,
        [tipo, condominio, area_privativa, area_comum, quantidade_de_quartos, quantidade_de_banheiros, tem_churrasqueira, tem_piscina, valor_do_condominio, preco_de_venda, id]
    );
}

export async function removeApartamentos(id: number) {
    await pool.query(
        `DELETE FROM apartamentos WHERE id = $1`,
        [id]
    );
}
