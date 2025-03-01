export default function page(){

return(

    <form>

<div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold text-gray-900">Computers</h2>
          <p className="mt-1 text-sm text-gray-600">CPU / Processor</p>

          </div>
     </div>

                <div className="col-span-full">

              <label
                htmlFor="descricao"
                className="block text-sm font-medium text-gray-900"
              >
                Descrição do produto
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="descricao"
                  id="descricao"
                  autoComplete="descricao"
                  className="block w-full rounded-md border-gray-300 p-2 text-gray-900 focus:border-indigo-600"
                />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="cpu" className="block text-sm font-medium text-gray-900">CPU / Processador</label>
                <div className="mt-2">
             <input type="text"  id="cpu" name="cpu"  placeholder="Digite o modelo da CPU (Ex: Intel i7, Ryzen 5" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                   />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="memoria" className="block text-sm font-medium text-gray-900">memória (RAM)</label>
                <div className="mt-2">
             <input type="number"  id="memoria" name="memoria" min="0" placeholder="Digite a memoria em GB" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                   />
                </div>
              </div>


              <div className="col-span-full">
                <label htmlFor="placa_de_video" className="block text-sm font-medium text-gray-900">Placa de Video</label>
                <div className="mt-2">
             <input type="text"  id="placa_de_video" name="placa_de_video" placeholder=" NVIDIA GTX 1080, AMD Radeon RX 5700" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                   />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="placa_mae" className="block text-sm font-medium text-gray-900">Placa mãe</label>
                <div className="mt-2">
             <input type="text"  id="placa_mae" name="placa_mae" placeholder="ASUS ROG Strix B450-F, MSI MPG Z490" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                   />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="fonte" className="block text-sm font-medium text-gray-900">Fonte</label>
                <div className="mt-2">
             <input type="text"  id="fonte" name="fonte" placeholder="Corsair 650W, EVGA 750W" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                   />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="armazenamento" className="block text-sm font-medium text-gray-900">Armazenamento </label>
                <div className="mt-2">
             <input type="number"  id="armazenamento" name="armazenamento" min="0" placeholder="Digite a capacidade em GB ou TB" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                   />
                </div>
              </div>

    </form>

)

}