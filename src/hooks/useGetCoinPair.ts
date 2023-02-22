import { useAppSelector } from "../store/hooks";
import { selectCoinPair } from "../store/header";

const useGetCoinPair = () => {
  const coinPair = useAppSelector(selectCoinPair).split("/");

  let coin2 = coinPair[0];
  let coin1 = coinPair[1];

  return { coin1, coin2 };
};

export default useGetCoinPair;
