import { useEffect, useState } from 'react'
import './App.css'
import Sidebar from './components/sidebar/sidebar.jsx'
import Searchbar from './components/searchbar/Searchbar.jsx'
import Filter from './components/filter/filter.jsx'
import Order from './components/order/order.jsx'
import Card from './components/card/card.jsx'

export default function App() {
  const [dados, setDados] = useState([])

  useEffect(() => {
    const buscarDados = async () => {
      try {
        const resposta = await fetch('https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes');
        const dados = await resposta.json();
        setDados(dados);
      } catch (error) {
        console.error('Erro ao buscar dados: ', error);
      }
    }

    buscarDados();
  }, []);

  return (
    <div className='container'>
      <Sidebar />
      <div>
        <Searchbar />
        <Filter />
        <Order />
        <ul className='cards'>
          {dados ? dados.map((item, index) => (
            <li key={index}>
              <Card
                id={item.id}
                imagem={item.imagem_capa}
                titulo={item.titulo}
                descricao={item.resumo}
                linhasDeCodigo={item.linhas_de_codigo}
                compartilhamentos={item.compartilhamentos}
                comentarios={item.comentarios}
                usuario={item.usuario}
              />
            </li>
          )) : null }
        </ul>
      </div>
    </div>
  )
}
