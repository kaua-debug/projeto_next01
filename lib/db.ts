import { Pool } from 'pg'
import { config } from 'dotenv'

config()

export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'suhglkmi13',
  port: 5432,
})