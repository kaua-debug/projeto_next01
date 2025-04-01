'use server'
import { pool } from "../db"

export async function addCasa(
    tipo: string,
    endereco: string,
    areaTerreno: number,
    areaConstruida: number,
    quartos: number,
    banheiros: number,
    temEdicula: boolean,
    temChurrasqueira: boolean,
    temPiscina: boolean,
    valorCondominio: number | null,
    precoVenda: number
) {
    await pool.query(
        `INSERT INTO casas (
            tipo, endereco, area_terreno, area_construida, 
            quantidade_quartos, quantidade_banheiros, 
            tem_edicula, tem_churrasqueira, tem_piscina, 
            valor_condominio, preco_venda
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
        [tipo, endereco, areaTerreno, areaConstruida, quartos, banheiros, temEdicula, temChurrasqueira, temPiscina, valorCondominio, precoVenda]
    );
}

export async function getCasas() {
    return (await pool.query(`SELECT * FROM casas`)).rows;
}

export async function updateCasa(
    id: number,
    tipo: string,
    endereco: string,
    areaTerreno: number,
    areaConstruida: number,
    quartos: number,
    banheiros: number,
    temEdicula: boolean,
    temChurrasqueira: boolean,
    temPiscina: boolean,
    valorCondominio: number | null,
    precoVenda: number
) {
    await pool.query(
        `UPDATE casas SET 
            tipo = $1, endereco = $2, area_terreno = $3, area_construida = $4,
            quantidade_quartos = $5, quantidade_banheiros = $6,
            tem_edicula = $7, tem_churrasqueira = $8, tem_piscina = $9,
            valor_condominio = $10, preco_venda = $11
        WHERE id = $12`,
        [tipo, endereco, areaTerreno, areaConstruida, quartos, banheiros, temEdicula, temChurrasqueira, temPiscina, valorCondominio, precoVenda, id]
    );
}

export async function removeCasa(id: number) {
    await pool.query(`DELETE FROM casas WHERE id = $1`, [id]);
}
