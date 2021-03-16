import {Form, Col, Container, FormGroup, Row} from "react-bootstrap"
import Contact from "../../components/Contact";
import React from "react";
const DateANCPI =()=>{
    return (
        <Container>
            <Form>
                <Container>
                    <h3>Date ANCPI</h3>
                    <FormGroup>
                        <Row>
                            <Col xs={12} lg={6} className="mb-1">

                                <Form.Control placeholder="Categoria / clasa" />

                            </Col>
                            <Col xs={12} lg={6} className="mb-1">
                                <Form.Control placeholder="Seria si numarul" />
                            </Col>
                        </Row>
                    </FormGroup>
                </Container>

            </Form>
        </Container>

        )
}
export default DateANCPI;