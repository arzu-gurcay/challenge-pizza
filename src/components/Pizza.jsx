import axios, { formToJSON } from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function Pizza(){
    const history=useHistory();
    const basePrice=85.50;
    const extraPrice=5;
    const [formData,setFormData]=useState({
        isim:"",
        boyut:"",
        hamur:"",
        malzemeler:[],
        not:"",
        adet:1,

    })
const ekMalzemeler=["Pepperoni","Sosis","Kanada Jambonu","Tavuk Izgara","Soğan","Domates","Mısır","Sucuk","Jalepeno","Sarımsak","Biber","Ananas","Kabak"];

const handleChange =(e)=>{
    const{name,value}=e.target;
    setFormData({...formData,[name]:value});
}
    const handleCheckbox= (e)=>{
        const{value,checked}=e.target;
        let yeniMalzemeler = [...formData.malzemeler];
        if(checked)
            yeniMalzemeler.push(value);
        else
            yeniMalzemeler= yeniMalzemeler.filter((m)=> m!==value);
            setFormData({...formData,malzemeler:yeniMalzemeler})
        
   
    }
     const arttir = ()=>setFormData({...formData,adet:formData.adet +1})
     const azalt = ()=>setFormData({...formData,adet:Math.max(1,formData.adet -1)})

     const ekstraTutar = formData.malzemeler.length * extraPrice;
     const secimler=ekstraTutar * formData.adet;
     const toplam = (basePrice + ekstraTutar) * formData.adet;

     const formGecerli = formData.isim.length >=3 && formData.boyut !== "" && formData.hamur !== "" && formData.malzemeler.length >=4 && formData.malzemeler.length <=10;

     const handleSubmit = (e) => {
        e.preventDefault();
        console.log("çalıştı")
        if(!formGecerli) return ;

        axios.post("https://reqres.in/api/pizza?api_key=reqres-free-v1",formData).then((res)=>{
            console.log("Sipariş özeti:",res.data);
            history.push("/success");
        }).catch((err)=> console.error("Sipariş hatası:",err))
     }

    return (
        <div className="pizza-page">
            <header className="header">
            <img src="/images/iteration-1-images/logo.svg" className="logo" alt="logo"/>
            <nav className="navbar">
                <a href="/">Anasayfa-</a>
                <a href="/pizza">Sipariş Oluştur</a>
            </nav>
            </header>
            <main className="main">
                <h2 className="title">Position Absolute Acı Pizza</h2>
                <div className="price-rating">
                <p className="price">{basePrice}₺</p>
                <div className="rating">
                    <span className="score">4.9</span>
                    <span className="count">(200)</span>
                    </div>
                    </div>
                <p className="desc">Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates,peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.</p>
               <div className="form-row">
                <div className="form-group boyut-group">
                 <h3>Boyut Seç <span className="star">*</span></h3>
                <label><input type="radio" name="boyut" value="Küçük" onChange={handleChange}/>Küçük</label>
                <label><input type="radio" name="boyut" value="Orta" onChange={handleChange}/>Orta</label>
                <label><input type="radio" name="boyut" value="Büyük" onChange={handleChange}/>Büyük</label>
                </div>
                <div className="form-group">
                <h3>Hamur Seç <span className="star">*</span></h3>
                <select name="hamur" value={formData.hamur} onChange={handleChange}>
                    <option value="">Hamur Kalınlığı</option>
                    <option value="ince">İnce</option>
                    <option value="normal">Normal</option>
                    <option value="kalın">Kalın</option>
                </select>
                </div>
                </div>
                 <div className="extras">
                    <h3>Ek Malzemeler</h3>
                    <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
                    <div className="checkbox-group">
                    {ekMalzemeler.map((malzeme)=>(
                        <label key={malzeme}>
                            <input type="checkbox" value={malzeme} checked={formData.malzemeler.includes(malzeme)} onChange={handleCheckbox} />{malzeme}
                        </label>
                    ))}
                    </div>
                    {formData.malzemeler.length < 4 && <p style={{color:"red"}}>En az 4 malzeme seçmelisin!</p>}
                {formData.malzemeler.length > 10 && <p style={{color:"red"}}>En fazla 10 malzeme seçebilirsin!</p>}
                </div>
                <div className="section">
                        <label>İsim:</label>
                        <input type="text" name="isim" value={formData.isim} onChange={handleChange} placeholder="İsminizi giriniz" />
                    
                    {formData.isim.length<3 && <p style={{color:"red"}}>En az 3 karakter olmalı!</p>}
               </div>
               <div className="note">
                <h3>Sipariş Notu</h3>
                <textarea placeholder="Siparişine eklemek istediğin bir not var mı ?" name="not" value={formData.not} onChange={handleChange} />
                    </div>
                    <form onSubmit={handleSubmit}>
                    <div className="order-footer">
                        <div className="quantity">
            
                        <button type="button" onClick={azalt}>-</button>
                        <span style={{margin:"0 10px"}}>{formData.adet}</span>
                        <button type="button" onClick={arttir}>+</button>
                    </div>
                    <div className="order-box">
                    <div className="order-summary">
                        <h3>Sipariş Toplamı</h3>
                        <p>Seçimler:<span>{secimler}₺</span></p>
                        <p className="total">Toplam:<span>{toplam}₺</span></p>
                        
                    </div>
                    <button className="order-btn" type="submit" disabled={!formGecerli}>SİPARİŞ VER</button>
                    </div>
                     </div>
                </form>
            </main>
        </div>

    )
}

export default Pizza;