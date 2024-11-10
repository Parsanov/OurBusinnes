import "./forWho.css"
import SmallAndMedium from "../../assets/Images/SmallAndMedium.jpg"
import Business from "../../assets/Images/Business.jpg"
import FreeLancer from "../../assets/Images/ManFreelancer.jpg"

const ForWho = () => {
    return ( 
        <div className="main-container">
            <div className="forwhom-conteiner">
                <h1 className="title">Для кого</h1>

                <div className="main-content-who">
                    <div className="card-content">
                        <div className="cards-for">

                            <div className="card">

                                <div className="main-image">
                                    <img src={SmallAndMedium}/>
                                </div>

                                <div className="description-for">
                                    <p>
                                    Підприємці, яким потрібні швидкі та безпечні фінансові транзакції для обслуговування клієнтів та постачальників. Вони цінують надійність та автоматизацію процесів, що дозволяє мінімізувати затримки та ризики.
                                    </p>
                                </div>
                            </div>

                            <div className="card">

                                <div className="main-image">
                                    <img className="image-business" src={Business}/>
                                </div>

                                <div className="description-for">
                                        <p>
                                        Люди, що здійснюють торгівлю через платформи оголошень чи спеціалізовані маркетплейси. Для них важлива безпека угод та гарантія, що оплата відбувається тільки після виконання всіх умов.
                                        </p>
                                </div>
                            </div>

                            <div className="card">

                                <div className="main-image">
                                    <img src={FreeLancer}/>
                                </div>

                                <div className="description-for">
                                    <p>
                                        Люди, які працюють на фріланс-біржах або продають цифрові товари та послуги. Безпечне виконання замовлень та отримання оплат без затримок має вирішальне значення для їхньої діяльності
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ForWho;