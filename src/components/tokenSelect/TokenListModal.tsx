import Modal from "react-bootstrap/Modal";
import Token from "@/src/entities/token";
import {Container} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import useModal from "@/src/hooks/useModal";
import styles from './TokenSelect.module.scss';

const TokenRow: React.FC<{
    token: Token;
    selectToken: (address: `0x${string}`) => void;
}> = ({ token, selectToken }) => {
    return (
        <Container onClick={() => {selectToken(token.address as `0x${string}`)}} className={styles.TokenContainerRow}>
            {token.logoURI ? (
                <Image width="30px"
                       src={token.logoURI}
                       roundedCircle
                />
                ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-question-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
                </svg>
            )}
            <div>{token.symbol}</div>
        </Container>
    )
};

const TokenListModal: React.FC<{
    onDismiss?: () => void,
    tokens: Token[];
    selectToken: (address: `0x${string}`) => void;
}> = ({ onDismiss = () => null, tokens, selectToken }) => {
    return (
        <Modal.Body>
            <Container style={{ padding: 0 }}>
                {tokens.map((token, index) => (
                    <TokenRow
                        key={`token-row-${index}`}
                        token={token}
                        selectToken={(address: `0x${string}`) => {
                            selectToken(address);
                            onDismiss();
                        }} />
                ))}
            </Container>
        </Modal.Body>
    )
}

export default TokenListModal;
