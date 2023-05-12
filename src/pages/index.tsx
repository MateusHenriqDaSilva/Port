import type { NextPage } from 'next'
import Corpo from '../components/PaginaInicial/Corpo'
import SubCabecalho from '../components/PaginaInicial/SubCabecalho'
import Cabecalho from '../components/PaginaInicial/Cabecalho'

const Home: NextPage = () => {
  return (
    <div className='PrincipalEspaco' >
      <Cabecalho />
      <SubCabecalho />
      <Corpo />
    </div>
  )
}

export default Home
