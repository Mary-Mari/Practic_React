import "./promo.css";
import promoImage from "../../img/image 19.png"

const Promo = () => {
    return (
        <section className="promo">
            <div className="container">
                <div className="promo__content">
                    <div className="promo__text">
                        <span className="promo__rectangle"></span>
                        <div className="promo__title">
                            I’m Sonali a Web developer
                        </div>
                        <div className="promo__desc">
                            I craft high-performing, beautiful websites that are conversion-focused, 
                            brand-accurate, & people-friendly.
                        </div>
                        <div className="promo__btn-wrapper">
                            <a href="#!" className="promo__btn">Let’s Talk</a>
                        </div>
                    </div>
                    <div className="promo__img">
                        <img src={promoImage} alt="Promo" />
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Promo;