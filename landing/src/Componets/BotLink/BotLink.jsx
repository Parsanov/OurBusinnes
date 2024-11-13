import "./botlink.css"
import Iphone  from "./Iphone.png"


const BotLink = () => {
    return (  
        <div>
            <div className="main-background">
                <div className="main-container">
                    <div className="main-info">
                        <div className="left-image">
                                <img src={Iphone}/>
                        </div>

                        <div className="right-info">
                            <div className="text-info">
                                <h1>
                                    Гарант Бот для безпечного продажу каналів у Telegram з глобальним масштабуванням
                                </h1>

                                <div className="button-action">
                                    <button><a   href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">Спробуй!</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default BotLink;