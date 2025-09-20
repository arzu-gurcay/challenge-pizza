import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const ekMalzemeler=["Pepperoni","Sosis","Kanada Jambonu","Tavuk Izgara","Soğan","Domates","Mısır","Sucuk","Jalepeno","Sarımsak","Biber","Ananas","Kabak"];

function Pizza(){
    const history=useHistory();
    const [size,setSize]=useState("");
    const [hamur,setHamur]=useState("");
    const [extras,setExtras]=useState([]);
    const [miktar,setMiktar]=useState(1);
    const [isim,setIsim]=useState("");
    const [not,setNot]=useState("");
    const basePrice=85.50;
    const extraPrice=extras.length*5;
    const total=(basePrice+extraPrice)*miktar;
    const toggleExtra= (item)=>{
        if(extras.includes(item)){
            setExtras(extras.filter((e)=> e !== item));
        }else {
            if(extras.length<10) setExtras([...extras,item]);
        }
    }
    
    return (
        <div className="pizza-page">
            <header>
            <h2>Teknolojik Yemekler</h2>
            <nav>
                <a href="/">Anasayfa</a>
                <a href="#">Seçenekler</a>
                <a href="#">Sipariş Oluştur</a>
            </nav>
            </header>
            <main>
                <h2>Position Absolute Acı Pizza</h2>
                <p className="price">{basePrice}₺</p>
                <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates,peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.</p>
                <h3>Boyut Seç *</h3>
                <label><input type="radio" name="size" onChange={()=>setSize("küçük")}/>Küçük</label>
                <label><input type="radio" name="size" onChange={()=>setSize("orta")}/>Orta</label>
                <label><input type="radio" name="size" onChange={()=>setSize("büyük")}/>Büyük</label>
                <h3>Hamur Seç *</h3>
                <select onChange={(event)=>setHamur(event.target.value)}>
                    <option value="">Hamur Kalınlığı</option>
                    <option value="ince">İnce</option>
                    <option value="normal">Normal</option>
                    <option value="kalın">Kalın</option>
                </select>
                <h3>Ek Malzemeler</h3>
                <div className="extras">
                    {ekMalzemeler.map((item)=>(
                        <label key={item}>
                            <input type="checkbox" checked={extras.includes(item)} onChange={()=>toggleExtra(item)} />{item}
                        </label>
                    ))}
                </div>
                {extras.length < 4 && <p style={{color:"red"}}>En az 4 malzeme seçmelisin!</p>}
                {extras.length > 10 && <p style={{color:"red"}}>En fazla 10 malzeme seçebilirsin!</p>}
                <form>
                    <div>
                        <label>İsim:</label>
                        <input type="text" value={isim} onChange={(e)=>setIsim(e.target.value)} placeholder="İsminizi girin" />
                    </div>
                    {isim.length<3 && <p style={{color:"red"}}>En az 3 karakter olmalı!</p>}
                </form>
                <h3>Sipariş Notu</h3>
                <textarea placeholder="Siparişine eklemek istediğin bir not var mı ?" value={not} onChange={(e)=>setNot(e.target.value)} />
                    
                    <h3>Adet</h3>
                    <div>
                        <button onClick={()=>setMiktar(Math.max(1,miktar-1))}>-</button>
                        <span style={{margin:"0 10px"}}>{miktar}</span>
                        <button onClick={()=>setMiktar(miktar+1)}>+</button>
                    </div>
                    <div className="summary">
                        <p>Seçimler:{extraPrice}₺</p>
                        <h4>Toplam:{total}₺</h4>
                    </div>
                    <button disabled={extras.length>=4 && extras.length<=10 && size && hamur ? false : true }   onClick={()=>history.push("/success")}>SİPARİŞ VER</button>
            </main>
        </div>

    )
}

export default Pizza;