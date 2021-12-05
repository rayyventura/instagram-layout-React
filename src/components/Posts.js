import {postInfos} from './Informacoes'


function Post({imgUsuario, idUsuario, imgPost, imgLikes, curtidoPor, nCurtidas}) {
    return(
        <article class="post">
            <div class="topo">
              <div class="usuario">
                <img src={imgUsuario} alt=''/>
                {idUsuario}
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img src={imgPost} alt =''/>
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src={imgLikes} alt=''/>
                <div class="texto">
                  Curtido por <strong>{curtidoPor}</strong> e <strong>outras {nCurtidas} pessoas</strong>
                </div>
              </div>
            </div>
        </article>
    )
}
export default function Posts() {
        
    return ( 
        <div class="posts">
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