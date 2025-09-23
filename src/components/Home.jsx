import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Home(){
    const history = useHistory();
    return (
        <div className="home">
            <header className="home-header">
            <img src="/images/iteration-1-images/logo.svg" alt="logo" className="home-logo" />
            <h2>KOD ACIKTIRIR</h2>
            <h3>PİZZA, DOYURUR</h3>
            <button onClick={()=> history.push("/pizza")} className="btn">ACIKTIM</button>
            </header>
            
        </div>
    )
}

export default Home;