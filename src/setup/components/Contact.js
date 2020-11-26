import React from 'react';
import {Button, Container, Row, Form, Col} from "react-bootstrap";
import {FaBuilding, FaMoneyCheck} from "react-icons/all";



const Test = () => {
    return <>

        <InfoContact/>

        <Container className="p-1 mt-5 mb-5 background-gri">
            <Form>
                <Row className="mb-2">
                    <Col>
                        <Form.Control placeholder="Nume"/>
                    </Col>
                    <Col>
                        <Form.Control as="select">
                            <option>Selecteaza</option>
                            <option>Potential Client</option>
                            <option>Firma Cadastru</option>

                        </Form.Control>
                    </Col>
                </Row>
            </Form>
            <Form>
                <Row>
                    <Col>
                        <Form.Control placeholder="Telefon"/>
                    </Col>
                    <Col>
                        <Form.Control type="email" placeholder="Email"/>
                    </Col>
                </Row>
            </Form>

            <Form.Group controlId="exampleForm.ControlTextarea1" className="mt-2">
                {/*<Form.Label>Example textarea</Form.Label>*/}
                <Form.Control as="textarea" rows={5}/>
            </Form.Group>
            {/*buton*/}
            <Container>
                <Row className="justify-content-between">
                    <Col xs="auto" className="my-1">
                        <Form.Check type="checkbox" id="autoSizingCheck2" label="Remember me"/>
                    </Col>
                    <Col xs="auto" className="my-1">
                        <Button type="submit">Submit</Button>
                    </Col>
                </Row>
            </Container>

        </Container>

    </>

}

export default Test;

const InfoContact = () => {
    return <section className="no-padding-bottom">
        <div className="container">
            <div className="row m-4">
                <div className="col-lg-6 order-1 order-lg-1">
                    <div className="padding-40px-left sm-no-padding">
                        <h6>
                            <FaBuilding className="text-theme-color" size={22}/>
                            Companie
                        </h6>
                        <div className="margin-30px-bottom sm-margin-20px-bottom">
                            <table className="table">
                                <tr>
                                    <td><b>Denumire</b></td>
                                    <td> GEOCAD IT SOLUTIONS SRL</td>
                                </tr>
                                <tr>
                                    <td><b>CUI</b></td>
                                    <td> 39843328</td>
                                </tr>
                                <tr>
                                    <td><b>Nr. reg. com.</b></td>
                                    <td> J23/4300/2018</td>
                                </tr>
                                <tr>
                                    <td><b>Email</b></td>
                                    <td> contact [@] firmecadastru.ro</td>
                                </tr>
                                <tr>
                                    <td><b>Telefon</b></td>
                                    <td> +40 734 760 808</td>
                                </tr>
                                <tr>
                                    <td><b>Sediu social</b></td>
                                    <td> jud. Ilfov, 1 Decembrie, str. 15 nr. 15</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>


                <div className="col-lg-6 order-2 order-lg-2 sm-margin-30px-bottom">
                    <div className="padding-40px-left sm-no-padding">
                        <h6>
                            <FaMoneyCheck className="text-theme-color"/>
                            Date bancare</h6>

                        <div className="margin-30px-bottom sm-margin-20px-bottom">
                            <table className="table">
                                <tr>
                                    <td><b>Banca</b></td>
                                    <td> ING Bank</td>
                                </tr>
                                <tr>
                                    <td><b>IBAN</b></td>
                                    <td> RO29 INGB 0000 9999 0827 0027</td>
                                </tr>
                                <tr>
                                    <td><b>Moneda</b></td>
                                    <td> RON</td>
                                </tr>
                                <tr>
                                    <td><b>SWIFT</b></td>
                                    <td> INGBROBU</td>
                                </tr>
                                <tr>
                                    <td><b>BIC</b></td>
                                    <td> INGB</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
};