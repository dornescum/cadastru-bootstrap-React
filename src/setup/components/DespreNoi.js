import React from "react";
import {Container, Row, Image} from "react-bootstrap";

const DespreNoi=()=>{
    return <>
    <Container>
        <Row>
<Salaci/>
<Dan />
        </Row>
    </Container>
    </>

}
export default DespreNoi;

const Salaci =()=> {
  return  <Row className="mt-5">
      <div className="col-lg-6 text-dark margin-50px-bottom text-center mobile-padding-15px-lr">
          <p className="mr-1 ml-1">
              Suntem o echipa tanara, plina de idei inovatoare si utile,
              care a activat de-a lungul timpului in domenii precum geodezia,
              topografia, cadastru si nu in ultimul rand IT.
          </p>
          <p className="ml-3 mr-3">
              Acest proiect a luat nastere din dorinta de a pune in legatura clientul,
              care are nevoie de servicii in domeniile prezentate mai sus, cu firma/PFA care
              activeaza in aceste domenii. Practic asiguram o legatura care il ajuta pe client
              sa obtina cea mai buna oferta intr-un interval scurt de timp, pe de-o parte si pe de alta parte,
              ofera un numar mai mare de potentiali clienti firmelor/PFA.
          </p>
      </div>

      <div className="col-md-6 xs-margin-20px-bottom">
          <div className="card-list-img">
                  {/*<img className="border-radius-5" src="img/content/salaci.jpeg" alt="Big Logo"/>*/}
          </div>
      </div>
  </Row>
}
const Dan =()=> {
  return  <Row >
      <div className="col-md-6 xs-margin-20px-bottom">
          <div className="card-list-img">
              {/*<img className="border-radius-5" src="../img/logo.jpg" alt="Big Logo"/>*/}
          </div>
      </div>

      <div className="col-lg-6 text-dark margin-50px-bottom text-center">
          <p className="ml-3 mr-3">
              Unul din avantajele care trebuie prezentate este faptul ca
              <a href="/" target="_blank" className="text-theme-color">firmecadastru.ro</a> este absolut <b
              className="text-black">gratuit</b> pentru potentialul client.
              Tot ce trebuie sa faca este sa aleaga firma cu care vrea sa colaboreze si treaba poate sa
              inceapa.
          </p>
          <p className="ml-3 mr-3">
              Ne place sa credem ca <a href="/" target="_blank" className="text-theme-color">firmecadastru.ro</a>
              este locul unde
              cererea si oferta se intalnesc si speram ca va veti convinge de acest lucru.
          </p>
      </div>


  </Row>
}