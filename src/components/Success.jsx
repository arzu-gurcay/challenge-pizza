
function Success({order}){

    return(
    <div className="success-container">
        <img src="/images/iteration-1-images/logo.svg" alt="logo" className="logo"/>
        <h2 className="sub">lezzetin yolda</h2>
        <h1 className="title">SİPARİŞ ALINDI</h1>
        <hr/>

        {order ? (
            <div className="success-summary">
  <h3>{order.pizzaName}</h3>

  <div className="row">
    <span className="label">Boyut:</span>
    <span className="value">{order.size}</span>
  </div>
  <div className="row">
    <span className="label">Hamur:</span>
    <span className="value">{order.dough}</span>
  </div>
  <div className="row">
    <span className="label">Ek Malzemeler:</span>
    <span className="value">
      {order.extras?.length ? order.extras.join(", ") : "Seçilmedi"}
    </span>
  </div>

  <div className="price-box">
    <div className="price-box-title">Sipariş Toplamı</div>
    <div className="row">
      <span className="label">Seçimler:</span>
      <span className="value">{Number(order.extrasPrice).toFixed(2)}₺</span>
    </div>
    <div className="row">
      <span className="label">Toplam:</span>
      <span className="value">{Number(order.totalPrice).toFixed(2)}₺</span>
    </div>
  </div>
</div>
        ) : (
            <p>Sipariş bulunamadı.</p>
                
        )}
        </div>
        
    )
}
export default Success;