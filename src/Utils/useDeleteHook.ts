import axios from "axios";

export default async function useDeleteHook(url: string, { arg }: any) {
  const response = await axios
    .delete(`${url}/${arg.id}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return response;
}
