import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {FaTwitter} from "react-icons/fa";


function Home(){
    const history = useHistory();
    return (
        <div className="home">
            <section className="home-header">
            <img src="/images/iteration-1-images/logo.svg" alt="logo" className="home-logo" />
            <h1>fırsatı kaçırma</h1>
            <h2>KOD ACIKTIRIR</h2>
            <h3>PİZZA, DOYURUR</h3>
            <button onClick={()=> history.push("/pizza")} className="btn">ACIKTIM</button>
            </section>
            <div className="categories">
            <div className="category">
                <img src="/images/iteration-2-images/icons/1.svg" alt="Kore" />
                <span>YENİ! Kore</span>
            </div>
            <div className="category">
                <img src="/images/iteration-2-images/icons/2.svg" alt="Pizza" />
                <span>Pizza</span>
            </div>
            <div className="category">
                <img src="/images/iteration-2-images/icons/3.svg" alt="Burger" />
                <span>Burger</span>
            </div>
            <div className="category">
                <img src="/images/iteration-2-images/icons/4.svg" alt="Kızartmalar" />
                <span>Kızartmalar</span>
            </div>
            <div className="category">
                <img src="/images/iteration-2-images/icons/5.svg" alt="Fast food" />
                <span>Fast food</span>
            </div>
            <div className="category">
                <img src="/images/iteration-2-images/icons/6.svg" alt="Gazlı İçecek" />
                <span>Gazlı İçecek</span>
            </div>
            </div>
            
            <section className="campaigns">
        <div className="card big special">
          <h2>Özel Lezzetus</h2>
          <h3>Position:Absolute Acı Burger</h3>
          <button className="btn">Sipariş Ver</button>
        </div>
        <div className="card big burger">
          <h2>Hackathon Burger Menü</h2>

          <button className="btn">Sipariş Ver</button>
        </div>
        <div className="card big kurye">
          <h2> <span className="err">Çooook</span> hızlı npm gibi kurye</h2>
          <button className="btn">Sipariş Ver</button>
        </div>
      </section>
          <section className="menu">
            <h2> en çok paketlenen menüler</h2>
        <h3>Acıktıran Kodlara Doyuran Lezzetler</h3>
        <div className="tabs">
           <button> <img src="/images/iteration-2-images/icons/1.svg" alt="Ramen" />
               Ramen</button>
                <button className="isActive"> <img src="/images/iteration-2-images/icons/2.svg" alt="Pizza" />
                Pizza</button>
                <button> <img src="/images/iteration-2-images/icons/3.svg" alt="Burger" />
                Burger</button>
                <button> <img src="/images/iteration-2-images/icons/4.svg" alt="French Fries" />
                French Fries</button>
                <button> <img src="/images/iteration-2-images/icons/5.svg" alt="Fast food" />
                Fast food</button>
                <button> <img src="/images/iteration-2-images/icons/6.svg" alt="Soft Drinks" />
                Soft Drinks</button>
          
        </div>
        <div className="menu-items">
          <div className="item">
            <img src="/images/iteration-2-images/pictures/food-1.png" alt="Pizza" />
            <p>Terminal Pizza</p>
            <span>60₺</span>
          </div>
          <div className="item">
            <img src="/images/iteration-2-images/pictures/food-2.png" alt="Pizza" />
            <p>Position Absolute Acı Pizza</p>
            <span>85₺</span>
          </div>
          <div className="item">
            <img src="/images/iteration-2-images/pictures/food-3.png" alt="Burger" />
            <p>useEffect Tavuklu Burger</p>
            <span>75₺</span>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-left">
           <img src="/images/iteration-2-images/footer/logo-footer.svg" alt="logo" className="logo"/>
          <div className="footer-item">
      <img src="/images/iteration-2-images/footer/icons/icon-1.png" alt="Adres" />
      <span>341 Londonderry Road, İstanbul Türkiye</span>
    </div>

    <div className="footer-item">
      <img src="/images/iteration-2-images/footer/icons/icon-2.png" alt="Mail" />
      <span>aciktim@teknolojikyemekler.com</span>
    </div>

    <div className="footer-item">
      <img src="/images/iteration-2-images/footer/icons/icon-3.png" alt="Telefon" />
      <span>+90 216 123 45 67</span>
    </div>
  </div>
        <div className="footer-menu">
          <h4>Sıccacık Menüler</h4>
          <ul>
            <li>Terminal Pizza</li>
            <li>5 Kişilik Hackathon Pizza</li>
            <li>useEffect Tavuklu Burger</li>
            <li>Beyaz Console Frosty</li>
            <li>Testler Geçti Mutlu Burger</li>
            <li>Position Absolute Acı Burger</li>
          </ul>
        </div>
        <div className="footer-insta">
          <h4>Instagram</h4>
          <div className="insta-grid">
            <img src="/images/iteration-2-images/footer/insta/li-0.png" alt="" />
            <img src="/images/iteration-2-images/footer/insta/li-1.png" alt="" />
            <img src="/images/iteration-2-images/footer/insta/li-2.png" alt="" />
            <img src="/images/iteration-2-images/footer/insta/li-3.png" alt="" />
            <img src="/images/iteration-2-images/footer/insta/li-4.png" alt="" />
            <img src="/images/iteration-2-images/footer/insta/li-5.png" alt="" />
          </div>
        </div>
        <hr class="footer-sep" />
         <div className="footer-bottom">
          <h2>© 2023 Teknolojik Yemekler</h2>
          <FaTwitter className="twitter-icon" />
        </div>
      </footer>
      
        </div>
    )
}

export default Home;