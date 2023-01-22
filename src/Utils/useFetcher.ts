export type Imethod = "GET" | "POST" | "PUT" | "DELETE";

interface IGetHookProps {
  url: string;
  method: Imethod | string;
}
export default async function useFetcher(props: IGetHookProps) {
  const response = await fetch(props?.url as string, {
    method: props.method,
  });
  const data = response.json();
  return data;
}
