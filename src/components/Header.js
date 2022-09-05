import React from 'react'
function Header() {
    return(
        <header>
            <div className="header__container">
                <div className="header__content">
                    <h1>Привет, меня зовут Аскар!</h1>
                    <hr/>
                    <p>Я ПРОФЕССИОНАЛЬНЫЙ ФОТОГРАФ. МОЕ ХОББИ ПУТЕШЕСТВОВАТЬ И ФОТОГРАФИРОВАТЬ ВСЕ, ЧТО МНЕ ПОНРАВИТСЯ. ТАК ЖЕ ВЫ МОЖЕТЕ ЗАКАЗАТЬ ЧАСТНУЮ ФОТОСЕССИЮ.</p>
                    <button className="header__button">Связаться со мной</button>
                </div>
                <div className="header__cover">
                    
                </div>
            </div>
        </header>   
    )
}
export default Header;