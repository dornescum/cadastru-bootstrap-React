import {Button, Container, Form} from "react-bootstrap";

const BottomInscriereFirma =()=>{
    return(
        <Container>
            <Form className="bottom-form">

                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label=" * Campuri obligatorii" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>

    )
}
export default BottomInscriereFirma