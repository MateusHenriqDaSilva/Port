import type { NextPage } from 'next'
import Cabecalho from '../components/PaginaInicial/Cabecalho/Cabecalho'
import Corpo from '../components/PaginaInicial/Corpo/Corpo'
import SubCabecalho from '../components/PaginaInicial/SubCabecalho/SubCabecalho'

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
