'use client'
import Trade from "@/src/components/Trade";
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";

const Swap = () => {
    return (
        <Container style={{ margin: '0 0 0 20px' }}>
            <Row
                style={{
                    padding: 0,
                    gap: '12px'
                }}
            >
                <Trade/>
            </Row>
        </Container>
    )
};

export default Swap;
