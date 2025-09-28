import axios, { formToJSON } from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {FaTwitter} from "react-icons/fa";


function Pizza({addOrder}){
    const history=useHistory();
    const basePrice=(85.50);
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
     const toplam = ((basePrice + ekstraTutar) * formData.adet);

     const formGecerli = formData.isim.length >=3 && formData.boyut !== "" && formData.hamur !== "" && formData.malzemeler.length >=4 && formData.malzemeler.length <=10;

     const handleSubmit = (e) => {
        e.preventDefault();
        if(!formGecerli) return ;

        const newOrder = {
            pizzaName: "Position Absolute Acı Pizza",
            size: formData.boyut,
            dough: formData.hamur,
            extras: formData.malzemeler,
            extrasPrice:secimler,
            totalPrice:toplam,
            note: formData.not,
            adet: formData.adet,
            name: formData.isim,};

        axios.post("https://reqres.in/api/pizza?api_key=reqres-free-v1",newOrder).then((res)=>{
           
            addOrder(res.data);
            history.push("/success");
        }).catch((err)=> console.error("Sipariş hatası:",err))
     }

    return (
        <div className="pizza-page">
            <header className="header">
            <img src="/images/iteration-1-images/logo.svg" className="logos" alt="logo"/>
            
            </header>
            
                <div className="arkaplan">
                    
                <nav className="navbar">
                <a href="/">Anasayfa  -</a>
                <a href="/">Seçenekler  -</a>
                <span className="star">Sipariş Oluştur</span>
            </nav>
                <h2 className="title">Position Absolute Acı Pizza</h2>
                <div className="price-rating">
                <p className="price">{basePrice}₺</p>
                <div className="rating">
                    <span className="score">4.9</span>
                    <span className="count">(200)</span>
                    </div>
                    </div>
                <p className="desc">Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates,peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.</p>
               
               </div>
               <main className="main">
               <form onSubmit={handleSubmit}>
                <div className="form-row">
                <div className="form-group boyut-group">
                 <h3>Boyut Seç <span className="star">*</span></h3>
                 <div className="boyut-options">
                <label><input type="radio" name="boyut" value="S" onChange={handleChange} data-cy="radio-size-küçük"/><span>S</span></label>
                <label><input type="radio" name="boyut" value="M" onChange={handleChange} data-cy="radio-size-orta"/><span>M</span></label>
                <label><input type="radio" name="boyut" value="L" onChange={handleChange} data-cy="radio-size-büyük"/><span>L</span></label>
                </div>
                </div>
                <div className="form-group">
                <h3>Hamur Seç <span className="star">*</span></h3>
                <select name="hamur" value={formData.hamur} onChange={handleChange} data-cy="select-hamur">
                    <option value="">- Hamur Kalınlığı Seç -</option>
                    <option value="ince">İnce</option>
                    <option value="normal">Normal</option>
                    <option value="kalın">Kalın</option>
                </select>
                </div>
                </div>
                 <div className="extras">
                    <h3>Ek Malzemeler</h3>
                    <p className="info">En fazla 10 malzeme seçebilirsiniz. 5₺</p>
                    <div className="checkbox-group">
                    {ekMalzemeler.map((malzeme)=>(
                        <label key={malzeme} className="malzeme-item"> 
                            <input type="checkbox" value={malzeme} checked={formData.malzemeler.includes(malzeme)} onChange={handleCheckbox} data-cy={`checkbox-${malzeme}`}/>
                            
                            {malzeme}
                        </label>
                    ))}
                    </div>
                    {formData.malzemeler.length < 4 && <p style={{color:"red"}} className="error">En az 4 malzeme seçmelisin!</p>}
                {formData.malzemeler.length > 10 && <p style={{color:"red"}} className="error">En fazla 10 malzeme seçebilirsin!</p>}
                </div>
                <div className="section">
                        <label>İsim:</label>
                        <input type="text" name="isim" value={formData.isim} onChange={handleChange} placeholder="İsminizi giriniz" data-cy="input-name"/>
                    
                    {formData.isim.length<3 && <p style={{color:"red"}} className="error">En az 3 karakter olmalı!</p>}
               </div>
               <div className="note">
                <h3>Sipariş Notu</h3>
                <textarea placeholder="Siparişine eklemek istediğin bir not var mı ?" name="not" value={formData.not} onChange={handleChange} data-cy="textarea-note"/>
                    </div>
                    
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
                    <button className="order-btn" type="submit" disabled={!formGecerli} data-cy="btn-submit">SİPARİŞ VER</button>
                    </div>
                     </div>
                </form>
                 </main>
                <footer className="foot">
                    <div className="foot-container">
        <div className="foot-left">
           <img src="/images/iteration-2-images/footer/logo-footer.svg" alt="logo" className="logo"/>
          <div className="foot-item">
      <img src="/images/iteration-2-images/footer/icons/icon-1.png" alt="Adres" />
      <span>341 Londonderry Road, İstanbul Türkiye</span>
    </div>

    <div className="foot-item">
      <img src="/images/iteration-2-images/footer/icons/icon-2.png" alt="Mail" />
      <span>aciktim@teknolojikyemekler.com</span>
    </div>

    <div className="foot-item">
      <img src="/images/iteration-2-images/footer/icons/icon-3.png" alt="Telefon" />
      <span>+90 216 123 45 67</span>
    </div>
  </div>
        <div className="foot-menu">
          <h4>Hot Menu</h4>
          <ul>
            <li>Terminal Pizza</li>
            <li>5 Kişilik Hackathon Pizza</li>
            <li>useEffect Tavuklu Burger</li>
            <li>Beyaz Console Frosty</li>
            <li>Testler Geçti Mutlu Burger</li>
            <li>Position Absolute Acı Burger</li>
          </ul>
        </div>
        <div className="foot-instagram">
          <h4>Instagram</h4>
          <div className="instagram-grid">
            <img src="/images/iteration-2-images/footer/insta/li-0.png" alt="" />
            <img src="/images/iteration-2-images/footer/insta/li-1.png" alt="" />
            <img src="/images/iteration-2-images/footer/insta/li-2.png" alt="" />
            <img src="/images/iteration-2-images/footer/insta/li-3.png" alt="" />
            <img src="/images/iteration-2-images/footer/insta/li-4.png" alt="" />
            <img src="/images/iteration-2-images/footer/insta/li-5.png" alt="" />
          </div>
        </div>
        </div>
        <hr class="foot-sep" />
        <div className="foot-bottom">
          <h2>© 2023 Teknolojik Yemekler</h2>
          <FaTwitter className="twitter-icon" />
        </div>
      </footer>
           
        </div>

    )
}

export default Pizza;