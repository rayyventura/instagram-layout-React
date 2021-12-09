import {postInfos} from './Informacoes'


function Post({imgUsuario, idUsuario, imgPost, imgLikes, curtidoPor, nCurtidas}) {
    return(
        <article className="post">
            <div className="topo">
              <div className="usuario">
                <img src={imgUsuario} alt=''/>
                {idUsuario}
              </div>
              <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div> 
            </div>

            <div className="conteudo">
              <img src={imgPost} alt =''/>
            </div>

            <div className="fundo">
              <div className="acoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>

              <div className="curtidas">
                <img src={imgLikes} alt=''/>
                <div className="texto">
                  Curtido por <strong>{curtidoPor}</strong> e <strong>outras {nCurtidas} pessoas</strong>
                </div>
              </div>
            </div>
        </article>
    )
}
export default function Posts() {
        
    return ( 
        <div className="posts">
        {
            postInfos.map(n => 
            (
            <Post 
            imgUsuario={n.imgUsuario}
            idUsuario = {n.idUsuario}
            imgPost = {n.imgPost}
            imgLikes = {n.imgLikes}
            curtidoPor = {n.curtidoPor}
            nCurtidas = {n.nCurtidas}
            />
            ))
        }
       </div>
    )        
}