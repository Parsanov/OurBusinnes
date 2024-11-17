import "./hero.css"


const Hero = () => {
    return ( 
        <div class="iphone-container">
        <div class="iphone">
            <div class="notch"></div>
            <div class="status-bar">
                <span>9:41</span>
                <span>100%</span>
            </div>
            <div class="screen">
                <div class="message-container">
                    <div class="message">Привіт! Я Гарант Бот 👋</div>
                    <div class="message sent">Безпечні угоди в Telegram</div>
                    <div class="message">Почнімо співпрацю!</div>
                </div>
                <div class="typing-indicator">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            </div>
        </div>
    </div>
    );
}
 
export default Hero;