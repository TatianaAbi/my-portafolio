import '../styles/Footer.css'

function Footer() {
    return(
        <>
        <div className="footer-container">
            <section className="social-media-icons">
                        <a href="facebook.com"><img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png" alt="facebook"/> </a>
                        <a href="facebook.com"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github"/> </a>
                        <a href="facebook.com"><img src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-512.png" alt="instagram"/> </a>
            </section>
            <section className="aditionalInformation">
                <p>my email is @lg3165777.gmail.com</p>
            </section>
        </div>
        </>
    )
}


export {Footer}