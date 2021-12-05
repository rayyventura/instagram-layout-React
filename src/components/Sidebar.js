import {sugestoes} from './Informacoes'

function Sugestao({img, nome, razao}) {
    return(
        <div class="sugestao">
            <div class="usuario">
            <img src={img} alt=''/>
            <div class="texto">
                <div class="nome">{nome}</div>
                <div class="razao">{razao}</div>
            </div>
            </div>

            <div class="seguir">Seguir</div>
      </div>
    )
}

export default function Sidebar() {
    
    return(
        <aside class="sidebar">
            
          <header class="usuario">
            <img src="assets/img/catanacomics.svg" alt=''/>
            <div class="texto">
              <strong>catanacomics</strong>
              Catana
            </div>
          </header>

          <section class="sugestoes">

            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>

                {
                    sugestoes.map(n => 
                        (
                            <Sugestao
                            img = {n.img}
                            nome = {n.nome}
                            razao = {n.razao}
                            />
                        ))
                }

          <footer class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos 
            • Localizações • Contas mais relevantes • Hashtags • Idioma
          </footer>

          <div class="copyright">
            © 2021 INSTAGRAM DA META
          </div>
          </section>
        </aside>
    )
}