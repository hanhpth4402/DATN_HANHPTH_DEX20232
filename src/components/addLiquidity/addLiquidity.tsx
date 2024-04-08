import {Container, Form} from "react-bootstrap";
import TokenInput from "@/src/components/swap/tokenInput";
import {useAccount, useChainId, useProvider, useSigner} from "wagmi";
import {field} from "@/src/state/swap/actionSwap";
import {useSelector} from "react-redux";
import useActionAddLiquidity from "@/src/state/addLiquidity/useActionAddLiquidity";
import Button from "react-bootstrap/Button";
import BigNumber from "bignumber.js";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {useBalance} from "@/src/hooks/useBalanceToken";

const AddLiquidity: React.FC<{}> = () => {
    const {address} = useAccount();
    const chainId = useChainId();

    const {data: signer} = useSigner();
    const provider = useProvider({chainId});
    const signerOrProvider = signer ?? provider;

    const {
        independentField,
        [field.INPUT]: {
            currencyId: tokenIn,
            value: valueIn
        },
        [field.OUTPUT]: {
            currencyId: tokenOut,
            value: valueOut
        },
    } = useSelector((state: {addLiquidity: any}) => state.addLiquidity);

    const {handleSelectToken, handleChangeAmount} = useActionAddLiquidity();
    const [balance0, isLoading0] = useBalance(tokenIn, address, signerOrProvider);
    const [balance1, isLoading1] = useBalance(tokenOut, address, signerOrProvider);
    return (
        <Row className={'d-flex col'}>
            <Col>
                <Container style={{minWidth: '500px'}}>
                    <Col className="mb-3 w-100" controlId="formBasicEmail">
                        <TokenInput
                            key="token0"
                            value={valueIn}
                            tokenId={tokenIn || `0x0`}
                            setToken={handleSelectToken}
                            setValue={handleChangeAmount}
                            field={field.INPUT}
                            balance={new BigNumber(balance0)}
                            isLoading={isLoading0}
                        />
                    </Col>

                    <Col className="mb-3 w-100" controlId="formBasicPassword">
                        <TokenInput
                            key="token1"
                            value={valueOut}
                            tokenId={tokenOut || `0x0`}
                            setToken={handleSelectToken}
                            setValue={handleChangeAmount}
                            field={field.OUTPUT}
                            balance={new BigNumber(balance1)}
                            isLoading={isLoading1}
                        />
                    </Col>
                    <Col className={'w-100'}>
                        <Button
                            style={{
                                background: 'radial-gradient(circle at 10% 20%, rgb(67, 144, 233) 0%, rgb(78, 226, 198) 90.1%)',
                            }}
                            className="w-100 mb-3"
                        >
                            Supply
                        </Button>
                    </Col>
                </Container>
            </Col>
        </Row>
    )
}

export default AddLiquidity;
