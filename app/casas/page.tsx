'use client'

import { 
   useEffect, useState } from "react"
import { addCasa, getCasas, removeCasa, updateCasa} from "@/lib/casas/casa"

    interface Casas{
        id: number
        tipo: string
        endereco: string
        areaTerreno: number
        areaConstruida: number 
        quantQuartos: number
        quantBanheiros: number
        temEdicucla: boolean
        temChurras: boolean
        temPiscina: boolean
        valorCondominio: number
        precoVenda: number
    }

export default function Page() {
    const [casas, setCasas] = useState<Casas[]>([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [id, setId] = useState(0)
    const [tipo, setTipo] = useState('tipo')
    const [endereco, setEndereco] = useState('endereco')
    const [areaTerreno, setAreaTerreno] = useState(0)
    const [areaConstruida, setAreaConstruida] = useState(0)
    const [quartos, setQuartos] = useState(0)
    const [banheiros, setBanheiros] = useState(0)
    const [edicula, setEdicula] = useState(false)
    const [churrasqueira, setChurrasqueira] = useState(false)
    const [piscina, setPiscina] = useState(false)
    const [valorCondominio, setValorCondominio] = useState(0)
    const [precoVenda, setPrecoVenda] = useState(0)

    const fetchCasas = async () => {
        try {
            const data = await getCasas()
            setCasas(data)
        } catch (error) {
            console.error('Erro ao buscar casas:', error)
        }
    }

        useEffect(() => {
            fetchCasas()
        }, [])


        const handleEdit = (casas: Casas) => {

            setId(casas.id);
            setTipo(casas.tipo);
            setEndereco(casas.endereco);
            setAreaTerreno(casas.areaTerreno);
            setAreaConstruida(casas.areaConstruida);
            setQuartos(casas.quantQuartos);
            setBanheiros(casas.quantBanheiros);
            setEdicula(casas.temEdicucla);
            setChurrasqueira(casas.temChurras);
            setPiscina(casas.temPiscina);
            setValorCondominio(casas.valorCondominio);
            setPrecoVenda(casas.precoVenda);           
            setIsModalOpen(true);

            console.log('Editando casa:', casas);

        }

        const handleRemove = async (id: number) => {
            await removeCasa(id)
            fetchCasas()
        }

        const closeModal = () => {
            setIsModalOpen(false)
        }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            if (id === 0){
                await addCasa(tipo, endereco, areaTerreno, areaConstruida, quartos, banheiros, edicula, churrasqueira, piscina, valorCondominio, precoVenda)
            } else {
                await updateCasa(id, tipo, endereco, areaTerreno, areaConstruida, quartos, banheiros, edicula, churrasqueira, piscina, valorCondominio, precoVenda)
            }
            fetchCasas()
            closeModal()
        } catch (error) {
            console.error('Erro ao salvar casa:', error)
        }
    }

    return (
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Cadastro de Casas</h1>
      
          <div className="mb-4">
        <button
          onClick={() => handleEdit({ id: 0, tipo: '', endereco: '', areaTerreno: 0, areaConstruida: 0, quantQuartos: 0, quantBanheiros: 0, temEdicucla:false, temChurras: false, temPiscina: false, valorCondominio: 0, precoVenda: 0})}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Adicionar Novo Pneu
        </button>
      </div>
          <table className="table-auto w-full mt-4">
            <thead>
              <tr>
                <th className="border px-4 py-2">Tipo</th>
                <th className="border px-4 py-2">Endereço</th>
                <th className="border px-4 py-2">Área Terreno</th>
                <th className="border px-4 py-2">Área Construída</th>
                <th className="border px-4 py-2">Quartos</th>
                <th className="border px-4 py-2">Banheiros</th>
                <th className="border px-4 py-2">Valor Condomínio</th>
                <th className="border px-4 py-2">Preço Venda</th>
                <th className="border px-4 py-2">Ações</th>
              </tr>
            </thead>
            <tbody>
              {casas.map((casa) => (
                <tr key={casa.id}>
                  <td className="border px-4 py-2">{casa.tipo}</td>
                  <td className="border px-4 py-2">{casa.endereco}</td>
                  <td className="border px-4 py-2">{casa.areaTerreno}m²</td>
                  <td className="border px-4 py-2">{casa.areaConstruida}m²</td>
                  <td className="border px-4 py-2">{casa.quantQuartos}</td>
                  <td className="border px-4 py-2">{casa.quantBanheiros}</td>
                  <td className="border px-4 py-2">R$ {casa.valorCondominio}</td>
                  <td className="border px-4 py-2">R$ {casa.precoVenda}</td>
                  <td className="border px-4 py-2">
                    <button 
                      onClick={() => handleEdit(casa)} 
                      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
                    >
                      Editar
                    </button>
                    <button 
                      onClick={() => handleRemove(casa.id)} 
                      className="ml-2 rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-500"
                    >
                      Excluir
                    </button>

                 <form onSubmit={handleSubmit}>
                      <input type="text" value={tipo} onChange={(e) => setTipo(e.target.value)} placeholder="Tipo" />
                      <input type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} placeholder="Endereço" />
                      <input type="number" value={areaTerreno} onChange={(e) => setAreaTerreno(Number(e.target.value))} placeholder="Área do Terreno" />
                      <input type="number" value={precoVenda} onChange={(e) => setPrecoVenda(Number(e.target.value))} placeholder="Preço de Venda" />

                      <button type="submit" className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white hover:bg-green-500">
                        Salvar
                      </button>
                 </form>


                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }      