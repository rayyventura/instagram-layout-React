import {iconNamesNav} from './Informacoes'
import IonIcon from './IonIcon';

export default function Nav(){
return (
    <nav className="navbar">
        <div className="container">
          <div className="logo">
            <ion-icon name="logo-instagram"></ion-icon>
            <div className="separador"></div>
            <img src="assets/img/logo.png" alt=""/>
          </div>

          <div className="logo-mobile">
            <ion-icon name="logo-instagram"></ion-icon>
          </div>

          <div className="instagram-mobile">
            <img src="assets/img/logo.png" alt=""/>
          </div>
  
          <div className="pesquisa">
            <input type="text" placeholder="Pesquisar" />
          </div>
  
          <div className="icones">
            {iconNamesNav.map(n => 
            (
              <IonIcon 
               nome={n.nome}
              />
            ))
            }
          </div>

          <div className="icones-mobile">
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
        </div>
    </nav>
);
}