import Esquerda from './Esquerda'
import Sidebar from './Sidebar'
import FundoMobile from './FundoMobile'

export default function Conteudo() {
    return(
        <div class="corpo">
            <Esquerda />
            <Sidebar />
            <FundoMobile />
        </div>
    )
}