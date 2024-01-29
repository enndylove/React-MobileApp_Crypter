import Icons from "./Icons";

const Wallet = (logo, hrefLogo, title, arrow, info) => {
  return (
    <section className="section wallet default-padding position-relative">
      <a className="wallet__logo" href={hrefLogo}>
        {logo}
      </a>
      <div className="wallet__text-content">
        <h3 className="wallet__title font-h3 color-darken">{title}</h3>
        <div className="wallet__arrow">
          {arrow}
        </div>
        <p className="wallet__info font-body2 color-darken" style={{ fontWeight: "bold" }}>
          {info}
        </p>
      </div>
      <div className="wallet__back" onClick={() => window.history.back()}></div>
    </section>
  )
}


const WalletContent = () => {
  return (
    <>
      {Wallet(Icons.IconLogo, "/", "Connect wallet.", Icons.IconWhiteArrow, "Choose how you want to connect. There are several wallet providers.")}
    </>
  );
};

export default WalletContent;
