import {iconNomes} from './Informacoes'
import IonIcon from './IonIcon'

export default function FundoMobile() {

        return(
            <nav className="fundo-mobile">
                {
                  iconNomes.map(n=>
                    (
                        <IonIcon
                        nome={n.nome}
                        />
                    ))
                }
            </nav>
        )
}
