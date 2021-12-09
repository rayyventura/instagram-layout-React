import {sugestoes} from './Informacoes'

function Sugestao({img, nome, razao}) {
    return(
        <div className="sugestao">
            <div className="usuario">
            <img src={img} alt=''/>
            <div className="texto">
                <div className="nome">{nome}</div>
                <div className="razao">{razao}</div>
            </div>
            </div>

            <div className="seguir">Seguir</div>
      </div>
    )
}

export default function Sidebar({img, id, nome}) {
    
    return(
        <aside className="sidebar">
            
          <header className="usuario">
            <img src={img} alt=''/>
            <div className="texto">
              <strong>{id}</strong>
              {nome}
            </div>
          </header>

          <section className="sugestoes">

            <div className="titulo">
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

          <footer className="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos 
            • Localizações • Contas mais relevantes • Hashtags • Idioma
          </footer>

          <div className="copyright">
            © 2021 INSTAGRAM DA META
          </div>
          </section>
        </aside>
    )
}