'use server'
import { pool } from "@/lib/db"
export async function addProduto(
    nome: string,
    valor_unitario: number,
    validade: Date,
    descricao: string
) {
    await pool.query(
        `insert into produtos (
            nome,
            valor_unitario,
            validade,
            descricao 
        ) values (
            $1,
            $2,
            $3,
            $4
        )`,
        [
            nome,
            valor_unitario,
            validade,
            descricao
        ]
    )
}

export async function getProdutos() {
    return (await pool.query(`select * from produtos`)).rows
}

export async function removeProduto(id: number) {
    await pool.query(`delete from produtos where id = $1`, [id]);
}

export async function updateProdutos(
    id: number,
    nome: string,
    valor_unitario: number,
    validade: Date,
    descricao: string
) {
    await pool.query(
        `update produtos set
            nome = $1,
            valor_unitario = $2,
            validade = $3,
            descricao = $4
        where id = $5`,
        [
            nome,
            valor_unitario,
            validade,
            descricao,
            id
        ]
    );
}