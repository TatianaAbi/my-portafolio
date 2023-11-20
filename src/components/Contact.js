import { Nav } from "./Nav";
import '../styles/contact.css'

function Contact(){
    return(
        <>
        <Nav/>
        <div className="contact">
            <article>
                <img src="https://cdn-icons-png.flaticon.com/512/7745/7745954.png" alt="perrito"/>
                <div className="contact-info">
                    <p>my social networks are</p>

                    <div className="container-icons">
                        <a href="facebook.com"><img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png" alt="facebook"/> </a>
                        <a href="facebook.com"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github"/> </a>
                        <a href="facebook.com"><img src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-512.png" alt="instagram"/> </a>
                    </div>
                </div>
            </article>
        </div>
        </>
    )
}
export {Contact}