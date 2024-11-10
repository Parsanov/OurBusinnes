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
                                    Бот-ґарант для безпечного продажу каналів у Telegram з глобальним масштабуванням
                                </h1>

                                <div className="button-action">
                                    <button>Спробуй!</button>
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