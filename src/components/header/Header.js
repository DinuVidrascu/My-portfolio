import "./style.css"
function Header() {
   return (
      <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>Hi, my name is <en>Dinu</en></strong><br />
          a front-end developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a href="#!" className="btn">View CV</a>
      </div>
    </header>
   )
}

export default Header;