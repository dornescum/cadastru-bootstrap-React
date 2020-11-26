import React from 'react';
import {Link} from 'react-router-dom'

import {
    FaMapMarkedAlt,
    FaBook,
    FaBuilding,
    FaMapMarker, FaComment, FaUserPlus, FaSearch, FaInfoCircle, FaGlobe
} from "react-icons/fa";

import 'bootstrap/dist/css/bootstrap-grid.min.css'

const Footer1 = () => {
    return <footer>
        <div className="footer-area padding-90px-tb md-padding-70px-tb sm-padding-50px-tb">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4  sm-margin-30px-bottom">
                        <ul className="col-center">
                            <li><a href="index.html">
                                <FaMapMarkedAlt className="text-theme-color mr-1" size={22}/>
                                Harta judete
                            </a></li>
                            <li><a href="ce-este-cadastru.html">
                                <FaBook className="text-theme-color mr-1" size={22}/>
                                Ce este cadastrul</a></li>
                            <li><a href="oficii-birouri-cadastru.html">
                                <FaBuilding className="text-theme-color mr-1" size={22}/>
                                Oficii si birouri de cadastru</a>
                            </li>
                            <li><a href="localizare.html">
                                <FaMapMarker className="text-theme-color mr-1" size={22}/>
                                Localizare teren</a></li>
                            <li><a href="parerile-clientilor.html">
                                <FaComment className="text-theme-color mr-1" size={22}/>
                                Parerile clientilor</a></li>
                        </ul>
                    </div>
                    {/*//==============================================================================================*/}
                    <div className="col-lg-4 sm-margin-30px-bottom">
                        <ul className="col-list">
                            <li><a href="inscriere-firme.html">
                                <FaUserPlus className="text-theme-color mr-1"/>
                                Inscriere firma / PFA</a></li>
                            <li><a href="cauta-firma.html">
                                <FaSearch className="text-theme-color mr-1"/>
                                Cauta firma / PFA</a></li>
                            <li><a href="termeni-conditii.html">
                                <FaInfoCircle  className="text-theme-color mr-1"/>
                                Termeni si conditii</a></li>
                            <li><a href="politica-de-confidentialitate.html">
                                <FaInfoCircle  className="text-theme-color mr-1"/>
                                Politica de confidentialitate</a></li>
                            <li><a href="politica-cookies.html">
                                <FaInfoCircle  className="text-theme-color mr-1"/>
                                Politica Cookies</a></li>
                        </ul>
                    </div>
                    {/*============================================================================================*/}
                    <div className="col-lg-4 sm-margin-30px-bottom">
                        <ul className="col-list">
                            <li>
                                <Link to="http://www.ancpi.ro/" target="_blank" onClick={(event) => {event.preventDefault(); window.open(this.makeHref("route"));}}>
                                    <FaGlobe  className="text-theme-color mr-1"/>
                                    ANCPI
                                </Link>
                            </li>
                            <li>
                                <Link to="http://geoportal.ancpi.ro/geoportal/imobile/Harta.html" target="_blank" onClick={(event) => {event.preventDefault(); window.open(this.makeHref("route"));}}>
                                    <FaGlobe  className="text-theme-color mr-1"/>
                                    Geoportal ANCPI (Harta)
                                </Link>
                            </li>
                            <li><Link to="http://epay.ancpi.ro/epay/SelectProd.action?prodId=1420" target="_blank" onClick={(event) => {event.preventDefault(); window.open(this.makeHref("route"));}}>
                                <FaGlobe  className="text-theme-color mr-1"/>
                                Extras carte funciara online
                            </Link></li>
                            <li>
                                <Link to="http://www.topo-online.ro/" target="_blank" onClick={(event) => {event.preventDefault(); window.open(this.makeHref("route"));}}>
                                    <FaGlobe  className="text-theme-color mr-1"/>
                                    Topo-Online
                                </Link>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="http://url.com" target="_blank">
                                    <FaGlobe  className="text-theme-color mr-1"/>
                                    Statii Permanente GPS
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {/*------------------------------------------------------------------------------------------------------------------*/}

    </footer>

}
export default Footer1;