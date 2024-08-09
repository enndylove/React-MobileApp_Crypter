import Icons from "./Icons";

/**
 * Wallet component
 *
 * Renders a wallet section with a logo, title, arrow, and info text.
 *
 * @param {JSX.Element} logo - The logo to display
 * @param {string} hrefLogo - The link to navigate to when the logo is clicked
 * @param {string} title - The title of the wallet section
 * @param {JSX.Element} arrow - The arrow icon to display
 * @param {string} info - The info text to display
 *
 * @returns {JSX.Element} The wallet section component
 *
 * @example
 * <Wallet
 *   logo={<Icons.IconLogo />}
 *   hrefLogo="/"
 *   title="Connect wallet."
 *   arrow={<Icons.IconWhiteArrow />}
 *   info="Choose how you want to connect. There are several wallet providers."
 * />
 */
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
            <a className="wallet__back" href={"/"}></a>
        </section>
    )
}


/**
 * WalletContent component
 *
 * Renders a wallet content section with a Wallet component.
 *
 * @returns {JSX.Element} The wallet content section component
 *
 * @example
 * <WalletContent />
 */
const WalletContent = () => {
    return (
        <>
            {Wallet(Icons.IconLogo, "/", "Connect wallet.", Icons.IconWhiteArrow, "Choose how you want to connect. There are several wallet providers.")}
        </>
    );
};

export default WalletContent;