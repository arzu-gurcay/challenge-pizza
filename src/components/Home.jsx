import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Home(){
    const history = useHistory();
    return (
        <div className="home">
            <header className="header">
            <h1>Teknolojik Yemekler</h1>
            <h2>KOD ACIKTIRIR</h2>
            <h3>PİZZA, DOYURUR</h3>
            </header>
            <button onClick={()=> history.push("/pizza")} className="btn">ACIKTIM</button>
        </div>
    )
}

export default Home;