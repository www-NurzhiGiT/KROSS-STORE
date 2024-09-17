import React from "react";
import "./Header.scss";

import LogoKross from "../../assets/svg/Logo.svg";
import Cart from "../../assets/svg/Cart.svg";
import Heart from "../../assets/svg/Heart.svg";
import User from "../../assets/svg/User.svg";

function Header() {
  return (
    <>
      <div className="header ">
        <div className="header-bor container">
          <div className="header-top">
            <img src={LogoKross} alt="" />
            <div>
              <h1>KROSS STORE</h1>
              <p>Магазин лучших кроссовок</p>
            </div>
          </div>
          {/* // ...v1 */}
          <div className="header-bottom">
            <div className="header-bottom-item">
              <img src={Cart} alt="" />
              <p>1205 руб.</p>
            </div>
            <div className="header-bottom-item">
              <img src={Heart} alt="" />
              <p>Закладки</p>
            </div>
            <div className="header-bottom-item">
              <img src={User} alt="" />
              <p>Профиль</p>
            </div>
          </div>
          {/* // ...v2 */}
        </div>
      </div>
    </>
  );
}

export default Header;
