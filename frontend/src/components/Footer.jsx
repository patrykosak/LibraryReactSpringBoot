import React from 'react'
import styles from './Footer.module.css'
import { Link } from "react-router-dom";

function Footer() {
    return (
        <section className={`${styles.footerposition} section spl footer bg-dark text-white`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mt-4">
                        <h6>O nas</h6>
                        <hr />
                        <p>Nasza historia rozpoczęła się w 2002 roku z chwilą otwarcia biblioteki. Od tej pory nieustannie się rozwijamy, dzięki czemu nasze zbiory są stale wzbogacane.
                        </p>
                    </div>
                    <div className="col-md-4 mt-4">
                        <h6>Na skróty</h6>
                        <hr />
                        {/* <div><Link to="/">Strona główna</Link></div>
                        <div><Link to="/about">O nas</Link></div>
                        <div><Link to="/contact">Kontakt</Link></div> */}
                    </div>
                    <div className="col-md-4 mt-4">
                        <h6>Kontakt</h6>
                        <hr />
                        <div><p className="text-white mb-1">34 377 00 00</p></div>
                        <div><p><small>pon.-pt. 8:00-16:00<br />
                            sob.-ndz. 9:00-14:00</small></p></div>
                        <div><p className="text-white mb-1">biuro@biblioteka.pl</p></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Footer