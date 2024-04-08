'use client'
import {abiRouteChiHang} from "@/src/config/abi";
import { useProvider} from "wagmi";
import {tokenList} from "@/src/config/tokenList";
import BigNumber from "bignumber.js";
import {Contract} from "@ethersproject/contracts";
import {RouteChiHang} from "@/src/config/configRoute";

const useGetParamAddLiquidity  = ({token0, token1, inputValue, chainId}: {token0: `0x${string}`; token1: `0x${string}`; inputValue: number; chainId: number}):
    [`0x${string}`, `0x${string}`, any] => {
    const provider = useProvider({chainId});
    const routeContract = new Contract(RouteChiHang, abiRouteChiHang, provider);
    const method = routeContract.getAmountsOut;
    const decimal0 = tokenList.find((item) =>
        item.address == token0
    )?.decimals;
    const decimal1 = tokenList.find((item) =>
        item.address == token1
    )?.decimals;
    const bigNumber = new BigNumber(inputValue * (10**(Number(decimal0))));
    const inputValueExact = `0x${bigNumber.toString(16)}`;
    const args = [inputValueExact, [token0, token1]];
    const abc = ['0x16bcc41e9000', '0x39ff2c2608'];
    const number0 = new BigNumber(abc[0]);
    const number1 = new BigNumber(abc[1]);
    const data = [Number(number0)/10**Number(decimal0), (Number(number1)/10**Number(decimal1))];
    return [`0x${number0.toString(16)}`, `0x${Number((Number(number1)*0.85).toFixed(0)).toString(16)}`, data];
};

export default useGetParamAddLiquidity;
