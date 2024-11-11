import "./competitors.css"
import Time from "../../assets/CompetionImages/Time.jpg"
import Economic from "../../assets/CompetionImages/Economic.png"
import Auto from "../../assets/CompetionImages/Auto.png"
import Safty from "../../assets/CompetionImages/Safty.png"




const Competitors = () => {
    return ( 
        <div class="main-container">

        <h2 class="title-competitors">Переваги на конкурентами</h2>

            <div class="cards-competitors">
            
                <div class="card-competitors">
                  
                    
                    <div class="image-competitors">
                        <img src={Time} alt="Time comparison" />
                    </div>

                    <div class="description-competitors">

                        <h2>Гнучкість часу</h2>
                        <p>
                            Ви більше не залежите від людського фактора. Вам не потрібно чекати, поки гарант з'явиться для завершення угоди.
                            Бот завжди готовий виконати свою функцію, незалежно від часу доби.
                        </p>
                    </div>
                </div>


                <div class="card-competitors">
                  
                    
                  <div class="image-competitors">
                      <img src={Auto} alt="Time comparison" />
                  </div>

                  <div class="description-competitors">

                      <h2>Автоматизація</h2>
                      <p>
                        Пошук гаранта більше не буде проблемою, адже бот завжди доступний і готовий прийняти угоду негайно.
                      </p>
                  </div>
              </div>

              <div class="card-competitors">
                  
                    
                  <div class="image-competitors">
                      <img src={Economic} alt="Time comparison" />
                  </div>

                  <div class="description-competitors">

                      <h2>Економічність</h2>
                      <p>
                      Послуги бота-гаранта значно дешевші, оскільки немає потреби сплачувати кошти людині за виконання цієї функції.

                      </p>
                  </div>
              </div>


              <div class="card-competitors">
                  
                    
                  <div class="image-competitors">
                      <img src={Safty} alt="Time comparison" />
                  </div>

                  <div class="description-competitors">

                      <h2>Безпека</h2>
                      <p>
                      Ризик обману виключено, адже бот-гарант не має людських слабкостей і не може обдурити користувачів.

                      </p>
                  </div>
              </div>
                
            </div>
    </div>
 );
}
 
export default Competitors;