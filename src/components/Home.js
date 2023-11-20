import { Header } from "./Header"
import { Nav } from "./Nav"
import { Main } from "./Main"
import { Outlet, NavLink } from "react-router-dom"
import { portafolioData } from "../portafolioData"
import { Footer } from "./Footer"
import '../styles/Home.css'

function Home() {
    return(
        <>
        <Nav/>
        <Header/>
        <Main>

                <div className="links-container">
                  <ul className="lista-de-links">
                        {portafolioData.map(post=>(
                        <ProjectLinks post={post} key={post.slug} />
                        ))}
                  </ul> 
                </div>
                <div className="visual-container">
                    <Outlet/>
                </div>

        </Main>
        <Footer/>
        </>
    )
}

const ProjectLinks = ({post})=>{
    return(
        <>
    <li><NavLink to={`/${post.slug}`} className="optionsSection">{post.linkName}</NavLink></li>
    </>
    )
    
}

export {Home}