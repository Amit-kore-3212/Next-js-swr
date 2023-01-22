import useSWR from "swr";
import useFetcher from "./useFetcher";

interface IProps {
  url: string;
  method: string;
}

export default function useGetHook({ ...props }: IProps) {
  const { data, error } = useSWR(props, useFetcher);
  return {
    data,
    error,
  };
}
