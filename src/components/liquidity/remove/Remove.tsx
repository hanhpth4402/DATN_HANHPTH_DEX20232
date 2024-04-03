import {Container} from "react-bootstrap";
import {useEffect, useMemo, useState} from "react";
import ReceiveAmount from "@/src/components/liquidity/remove/components/receiveAmount";
import BigNumber from "bignumber.js";
import Button from "react-bootstrap/Button";
import RemoveAmount from "@/src/components/liquidity/remove/components/removeAmount";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ArrowDown from "@/src/assets/icons/arrowDown";

const Remove: React.FC<{slippageTolerance?: number}> = () => {
    const [token0, setToken0] = useState("0x2DAcbf2E82e5F78564DB1C5005bEC00A34DFBC6F");
    const [token1, setToken1] = useState("0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9");
    const balance = "0";

    const [state, setState] = useState(0);
    const [receiveAmounts, setReceiveAmounts] = useState(['0', '0']);
    const handleChangeState = (value: number) => {
        setState(value);
    };

    const liquidityAmount = useMemo(() => (
        new BigNumber(balance).multipliedBy(state).div(100).toString(10)
    ), [state, balance]);

    return (
        <Row className={'d-flex col'} style={{marginLeft: '12px'}}>
            <Col>
                <RemoveAmount state={state} handleChangeState={handleChangeState} liquidityAmount={liquidityAmount} />
                <div className={'d-flex col'} style={{marginTop: '12px', minWidth: '500px'}}>
                    <ArrowDown style={{margin: 'auto'}} width={"25px"} fill={'#D8D9DA'}/>
                </div>
                <ReceiveAmount amountPooledTokens={receiveAmounts} pooledTokens={[token0, token1]}/>
                <Container
                    className={'d-flex row'}
                    style={{
                        borderRadius: 'var(--bs-border-radius-xl)',
                        padding: '0px 0px',
                        marginTop: '12px',
                        minWidth: '500px'
                    }}
                >
                    <Button
                        style={{
                            background: 'radial-gradient(circle at 10% 20%, rgb(67, 144, 233) 0%, rgb(78, 226, 198) 90.1%)',

                        }}
                        className="w-100 mb-3"
                    >
                        Remove Liquidity
                    </Button>
                </Container>
            </Col>
        </Row>
    )
}

export default Remove;
