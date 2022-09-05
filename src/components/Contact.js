import React from'react'
function Contact() {
    return(
        <div className="contact-me">
            <div className="contact-me__container">
                <div className="contact-me__content">
                    <h2>Связаться со мной</h2>
                    <hr/>
                    <form>
                        <label for="name" id="name__label">Имя</label>
                        <input type="text" id="name"/>
                        <label for="email" id="email__label">Почта</label>
                        <input type="email" id="email"/>
                        <label for="message" id="message__label">Сообщение</label>
                        <textarea id="message"></textarea>
                        <button id="button">Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact;