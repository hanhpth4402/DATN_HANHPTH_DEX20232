import {Interface} from "@ethersproject/abi";
import {abiRouteChiHang, abiRouterV2Uniswap} from "@/src/config/abi";
import useBalance from "@/src/components/addLiquidity/useBalance";
import BigNumber from "bignumber.js";

const useSwapCallParameters = ({tokens, address, inputValue, chainId}: {tokens: (`0x${string}` | undefined)[], address: `0x${string}` | undefined, inputValue: number, chainId: number }) => {
    if (!tokens[0] || !tokens[1] || !address || !inputValue) return {};
    const [amountIn, amountOut, formatted] = useBalance({
        token0: tokens[0],
        token1: tokens[1],
        inputValue,
        chainId
    });
    const timeStamp = `0x${(Number((Number(new Date())/1000).toFixed(0)) + 60*5).toString(16)}`;

    const INTERFACE = new Interface(abiRouteChiHang);
    const methodName = 'swapExactETHForTokens';
    const path = [...tokens] //in dung truoc
    const to = address //gia tri cua address cua tai khoan muon swap
    const deadline = timeStamp;

    ///Chu y den amountOut va amountIn + deadline => neu lech hai cai nay thi deu khong estimate duoc

    const args = [amountOut, path, to, deadline];
    const In = new BigNumber(amountIn);
    const Out = new BigNumber(amountOut);
    const dl = new BigNumber(deadline);
    return {
        deadline: dl.toString(10),
        amount: [In.toString(10), Out.toString(10)],
        calldata: INTERFACE.encodeFunctionData(methodName, args),
        value: amountIn,
        formatted
    };
};

export const getabc = (inputValue: number): number => {
    return inputValue*5;
}

export default useSwapCallParameters;
