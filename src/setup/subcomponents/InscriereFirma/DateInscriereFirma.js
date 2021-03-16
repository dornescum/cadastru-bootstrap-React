import {Form,FormGroup, Row, Col} from "react-bootstrap";
import React from "react";
// import {FormControl} from "react-bootstrap";

const DateInscriereFirma = () =>{
  return (<section>

<div className="container mt-5">
    <div className="row">

        <div className="col-md-12 form-list center-col">
            <div className="container margin-10px-top">

                <p>Daca esti firma sau PFA si iti desfasori activitatea in domeniul cadastrului,
                    iti poti crea cont gratuit chiar acum.
                </p>

                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Nume</Form.Label>
                        <Form.Control type="text" placeholder="Nume" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Descriere</Form.Label>
                        <Form.Control as="textarea" rows={5} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Adresa</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <FormGroup>
                        <Row>
                            <Col xs={12} lg={6} className="mb-1">
                                <Form.Control as="select" defaultValue="Choose...">
                                                    <option>Choose...</option>
                                                    <option>...</option>
                                                </Form.Control>
                            </Col>
                            <Col xs={12} lg={6}>
                                            <Form.Control placeholder="Last name" />
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col xs={12} lg={6} className="mb-1">

                                <Form.Control placeholder="Last name" />

                            </Col>
                            <Col xs={12} lg={6}>
                                            <Form.Control placeholder="Last name" />
                            </Col>
                        </Row>
                    </FormGroup>

                </Form>
            </div>
        </div>

    </div>
</div>

  </section>)
}
export default DateInscriereFirma;