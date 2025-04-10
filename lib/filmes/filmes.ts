'use server'

import { pool } from '@/lib/db'

// ✅ CORRIGIDO: 'cssificacao_etaria' estava escrito errado, e classficação precisa de aspas (é string)
export async function addFilmes(
  nome: string,
  diretor: string,
  assunto: string,
  classificacao_etaria: string
) {
  await pool.query(
    `INSERT INTO filmes (
        nome,
        diretor,
        assunto,
        classificacao_etaria
    ) VALUES (
        $1, $2, $3, $4
    )`,
    [nome, diretor, assunto, classificacao_etaria]
  )
}

// ✅ Sem mudanças aqui
export async function getFilmes() {
  return (await pool.query(`SELECT * FROM filmes`)).rows
}

// ✅ CORRIGIDO: vírgula extra antes do WHERE e os valores devem estar no segundo argumento da query
export async function updateFilmes(
  id: number,
  nome: string,
  diretor: string,
  assunto: string,
  classificacao_etaria: number
) {
  await pool.query(
    `
    UPDATE filmes SET
      nome = $1,
      diretor = $2,
      assunto = $3,
      classificacao_etaria = $4
    WHERE id = $5
    `,
    [nome, diretor, assunto, classificacao_etaria, id] // aqui que estavam soltos antes
  )
}

// ✅ CORRIGIDO: tabela estava errada ('filme' → 'filmes'), e usamos parâmetro em vez de string interpolation
export async function removeFilme(id: number) {
  await pool.query(`DELETE FROM filmes WHERE id = $1`, [id])
}
