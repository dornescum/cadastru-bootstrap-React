import React from "react";
import {Container, Row, Image} from "react-bootstrap";
import Iframe from 'react-iframe'

const Localizare = () => {
    return <>
        <main-wrapper>
            <Container>
                <Row className="margin-50px-bottom">
                    <div className="col-lg-7 col-md-6">
                        <p>
                            Aceasta este o mica aplicatie cu ajutorul careia se poate determina pozitia unui punct de
                            coordonate
                            cu precizie metrica. Tot ce trebuie sa faceti este sa introduceti in campurile de mai jos
                            valorile
                            pentru coordonatele <i>X(Nord)</i> si <i>Y(Est)</i>, iar dupa ce ati verificat datele
                            apasati
                            butonul '<i className="text-theme-color font-size14 text-uppercase">Localizare</i> '
                            .
                        </p>
                        <p>
                            Trebuie mentionat ca aceste coordonate sunt exprimate in metri si au ca sistem de referinta
                            <a rel="noopener noreferrer" href="http://www.topo-online.ro/ro/stereo70.php" target="_blank" className="text-theme-color">
                                Sistemul de Proiectie Stereografic 1970
                            </a>.
                        </p>
                        <p>
                            Exemplu de coordonate: X(Nord) = <i>329976.803</i> ; Y(Est) = <i>589696.632</i>
                        </p>


                    </div>

                    <div className="col-lg-5 col-md-6">
                        <Image src="../img/santier.png"/>

                    </div>
                </Row>
                <Butoane/>
                <h5>Locatie</h5>
            </Container>
            <Container>
                <Iframe src="https://maps.google.com/maps?q=romania&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="500px"
                        id="myId"
                        className="myClassname"
                        display="initial"
                        position="relative"/>
            </Container>

            <Container className="mt-3">
                <Butoane2 />

            </Container>

        </main-wrapper>
    </>
}
export default Localizare;

const Butoane = () => {
    return <>

        <Row>
            <div className="col-lg-4 text-dark">

                <div className="input-group input-group-sm mb-3">

                    <input type="text" className="form-control" aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-sm"
                           placeholder="X (Nord) 500000.000"/>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="input-group input-group-sm mb-3">

                    <input type="text" className="form-control" aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-sm"
                           placeholder="Y (Est) 500000.000"/>
                </div>
            </div>
            <div className="col-lg-4">
                <button className="butn btn-block text-center" style={{width: '100%'}}>Localizare</button>
            </div>
        </Row>
    </>
}
const Butoane2 = () => {
    return <>

        <Row>
            <div className="col-lg-7 text-dark">

                <div className="input-group input-group-sm mb-3">

                    <input type="text" className="form-control" aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-sm"
                           placeholder="https://firmecadastru.ro/localizare-teren/@500000.000,500000.000"/>
                </div>
            </div>

            <div className="col-lg-5">
                <button className="butn btn-block text-center" style={{width: '100%'}}>Localizare</button>
            </div>
        </Row>
    </>
}
