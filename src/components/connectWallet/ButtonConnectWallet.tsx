import Button from "react-bootstrap/Button";
import ConnectorModal from "@/src/components/connectWallet/ConnectorModal";
import {useEffect, useState} from "react";
import {useAccount, useConnect, useDisconnect} from "wagmi";
import useModal from "@/src/hooks/useModal";

const ButtonConnectWallet = () => {
    const { address, connector, isConnected } = useAccount();
    const [connected, setConnected] = useState(false);
    const { disconnect } = useDisconnect();
    const [onPresentModalCallback] = useModal('connect', <ConnectorModal/>)
    useEffect(() => {
        setConnected(isConnected);
    }, [isConnected]);

    const [label, setLabel] = useState('');
    useEffect (() => {
        const _label = connected ? `${address?.substring(0,5)}...${address?.substring(address?.length-5, address?.length)}` :
            `Connect Wallet`;
        setLabel(_label);
    }, [address, connected]);
    return (
        <>
            {/*<SwitchNetworkSelect/>*/}
            <Button
                suppressHydrationWarning
                onClick={() => {
                    if (connected) {
                        disconnect();
                    } else {
                        onPresentModalCallback();
                    }
                }}
                style={{ background: 'radial-gradient(circle at 10% 20%, rgb(67, 144, 233) 0%, rgb(78, 226, 198) 90.1%)' }}
            >
                {label}
            </Button>
        </>
    )
}

export default ButtonConnectWallet;
