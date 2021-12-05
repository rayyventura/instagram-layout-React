import {iconNamesNav} from './Informacoes'
import IonIcon from './IonIcon';

export default function Nav(){
return (
    <nav class="navbar">
        <div class="container">
          <div class="logo">
            <ion-icon name="logo-instagram"></ion-icon>
            <div class="separador"></div>
            <img src="assets/img/logo.png" alt=""/>
          </div>

          <div class="logo-mobile">
            <ion-icon name="logo-instagram"></ion-icon>
          </div>

          <div class="instagram-mobile">
            <img src="assets/img/logo.png" alt=""/>
          </div>
  
          <div class="pesquisa">
            <input type="text" placeholder="Pesquisar" />
          </div>
  
          <div class="icones">
            {iconNamesNav.map(n => 
            (
              <IonIcon 
               nome={n.nome}
              />
            ))
            }
          </div>

          <div class="icones-mobile">
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
        </div>
    </nav>
);
}