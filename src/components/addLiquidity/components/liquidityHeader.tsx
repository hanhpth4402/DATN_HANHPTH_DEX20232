import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import liquidityTabs from "@/src/constants/liquidityTabs";
import styles from "../Liquidity.module.scss";

const LiquidityHeader: React.FC<{
    currentTab: string;
    selectTab: (tabForm: string) => void;
}> = ({ currentTab, selectTab }) => {
    return (
        <Container className="m-0 mb-3" style={{ width: '700px' }}>
            <Row className="align-items-center w-100">
                <Col xs={7}>
                    <Row>
                        {liquidityTabs.map((tab, index) => (
                            <Col
                                key={`liquidity-header-tab-${index}`}
                                onClick={() => selectTab(tab.form)}
                                className={`${styles.LiquidityHeaderTab} ${currentTab === tab.form ? styles.LiquidityHeaderTabActive : ''}`}
                            >
                                {tab.title}
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col xs={2}></Col>
            </Row>
        </Container>
    )
}

export default LiquidityHeader;
