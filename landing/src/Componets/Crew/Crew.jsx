import "./crew.css"
import Vlad from "..//../assets/TheCrew/Vlad.jpg"
import Sergey from "..//../assets/TheCrew/Sergey.png"
import Roman from "..//../assets/TheCrew/Roman.png"
import Andriy from "..//../assets/TheCrew/Andrey.png"

const Crew = () => {
    return ( 
            <div className="main-container">
                <div className="crew-conteiner">
                <h1 className="the-crew">Учасники проєкту</h1>
                <div class="cards">
                    <div class="card-crew">
                        <div class="card-photo">
                            <img src={Vlad} alt="Team member"/>
                        </div>
                        <div class="card-text">
                            <div class="title-card">
                                <h1>Павленко В.В</h1>
                            </div>
                            <div class="description">
                                <p>Фаундер, автор ідеї. Має досвід розробки популярних телеграм ботів. Володіє та знайомий з технологіями, як: TypeScript / JavaScript, NodeJS, PostgreSQL, Redis, Nginx, Linux. Відповідає за розробку самого бота.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div class="card-crew">
                        <div class="card-photo">
                            <img src={Sergey} alt="Team member"/>
                        </div>
                        <div class="card-text">
                            <div class="title-card">
                                <h1>Назаренко С.С</h1>
                            </div>
                            <div class="description">
                                <p>
                                Відповідає за управління базами даних проекту. Має базові знання PostgreSQL і буде займатися розробкою та підтримкою структури бази даних.

                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="card-crew">
                        <div class="card-photo">
                            <img src={Roman} alt="Team member"/>
                        </div>
                        <div class="card-text">
                            <div class="title-card">
                                <h1>Парсанов Р.В</h1>
                            </div>
                            <div class="description">
                               <p>Відповідає за візуальну частину сайту. Знайомий з технологіями HTML, CSS, Bootstrap, Tailwind CSS, React JS.
                               </p>
                            </div>
                        </div>
                    </div>

                    <div class="card-crew">
                        <div class="card-photo">
                            <img src={Andriy} alt="Team member"/>
                        </div>
                        <div class="card-text">
                            <div class="title-card">
                                <h1>Сітохін А.Є</h1>
                            </div>
                            <div class="description">
                               <p>Відповідає за  аналіз наших конкурентів та перевірку працездатності на операційній системі Windows. Має досвід роботи з MySQL. Володіє знаннями SQL.
                               </p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
     );
}
 
export default Crew;