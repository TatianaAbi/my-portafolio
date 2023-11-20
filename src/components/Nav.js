import { Link } from "react-router-dom"
import '../styles/Nav.css'


function Nav(){
    return(
        <>
        <div className="container-options">
          <div className='options'>
            <div>
                <h2>Tatiana Abigail</h2>
            </div>
  
            <div className="info-options">
              <Link className="start" to="/">Home</Link>
              <Link className="start" to="/about">about</Link>
              <Link className="start" to="/contact">contact</Link>
            </div>
          </div>
        </div>
        </>
    )
}
export {Nav}