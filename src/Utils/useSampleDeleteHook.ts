import { useState } from "react";
import useSWRMutation from "swr/mutation";
import usePostHook from "./usePostHook";
interface IProps {
  url: string;
}
export default function useSamplePosttHook(props: IProps) {
  const [dataToBePosted, setDataToBePosted] = useState<any>({});
  const { trigger } = useSWRMutation(props.url, usePostHook);

  function triggerFunction({ args }: any) {
    if (args) {
      try {
        const result = trigger({ ...args });
        setDataToBePosted({ ...result });
      } catch (err: any) {
        console.log(err);
      }
    }
  }

  return [dataToBePosted, triggerFunction];
}
