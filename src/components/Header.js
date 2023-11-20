import { Link } from "react-router-dom";
import '../img/gatito.png'
import '../styles/Header.css'

function Header() {
    return(
        <div className="Header">
      <div className="header-shallow">
        <section className="perfil">
              <div className="container-perfil">
                <div className="aboutMe">
                    <p className="title">hello</p>
                    <h2 className="my-name">I'm Tatiana</h2>
                    <p className="sentence">Frontend Web Designer & Developer</p>
                    <Link className="btnMore" to="/about">MORE</Link>
                </div>
              <picture className="photo">
              <img src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081" alt="creater"/>
              </picture>
              </div>
        </section>
         
      </div>

    </div>
    )
}

export {Header}