import Esquerda from './Esquerda'
import Sidebar from './Sidebar'
import FundoMobile from './FundoMobile'

export default function Conteudo() {
    return(
        <div class="corpo">
            <Esquerda />
            <Sidebar img = 'assets/img/catanacomics.svg' id = 'catanacomics' nome = 'Catana'/>
            <FundoMobile />
        </div>
    )
}