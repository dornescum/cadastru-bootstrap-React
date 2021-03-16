import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import TopImage from "./Ui/TopImage";

const CumFunctioneaza=()=>{
return (
    <div>
        <TopImage  title="Cum Functioneaza"/>
        <Container className="mt-5 mb-3">

            <Row>
                <Col>
                    <p className="grey-color-font font-size16">
                        Aceasta aplicatie isi propune sa puna in legatura potentialii clienti
                        cu firmele/PFA de cadastru. Practic va dam posibilitatea, dumneavoastra ca si client
                        , sa alegeti dintr-o lista de firme pe cea care intruneste toate conditiile dumneavoastra (ex:
                        experienta, numarul de angajati, dotari, pret etc.).
                    </p>
                    <p className="grey-color-font font-size16">
                        De asemenea, puteti consulta
                        <a href="ce-este-cadastru.html" target="_blank" className="text-theme-color"> articolele de
                            legislatie</a>
                        pentru a afla mai multe informatii despre ceea ce presupune un cadastru.
                    </p>
                    <p className="grey-color-font font-size16">
                        Sunt doua modalitati prin care puteti intra in legatura cu firmele/PFA de cadastru:
                    </p>
                    <ol className="ml-3 grey-color-font font-size16">
                        <li className="margin-20px-left sm-margin-5px-left">Din <a href="index.html" target="_blank"
                                                                                   className="text-theme-color">pagina
                            principala</a> selectati de pe harta
                            judetul corespunzator lucrarii dumneavoastra, apoi urmarind lista afisata
                            alegeti firma/PFA dorita.
                        </li>
                        <li className="margin-20px-left sm-margin-5px-left">Cautati firma/PFA, accesand meniul
                            '<a href="cauta-firma.html" target="_blank" className="text-theme-color">Cauta Firma</a>'.
                            Practic filtrati rezultatele afisarii utilizand diferite criterii:
                            denumire, judet, tipuri de lucrari prestate etc.
                        </li>
                    </ol>
                    <p className="grey-color-font font-size16">Daca firma/PFA cautata de dumneavoastra nu se regaseste in lista noastra,
                        luati legatura cu noi folosind <a href="contact.html" target="_blank" className="text-theme-color">formularul
                            de contact</a>
                        si echipa noastra va face tot ce ii sta in putinta pentru a identifica
                        si a va pune in legatura directa cu firma/PFA cautata.</p>
                    <div className="border-bottom mb-3"></div>


                </Col>
            </Row>
        </Container>
    </div>

)
}
export default CumFunctioneaza;