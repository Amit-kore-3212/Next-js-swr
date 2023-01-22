import axios from "axios";

export default async function usePutHook(url: string, { arg }: any) {
  const response = await axios
    .put(url, arg)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return response;
}
