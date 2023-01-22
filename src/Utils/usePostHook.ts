import axios from "axios";

export default async function usePostHook(url: string, { arg }: any) {
  // console.log("args", url, arg);
  // const response = await fetch(url as string, {
  //   method: "POST",
  //   body: JSON.stringify(arg),
  // });
  // const data = response.json();
  // return data;

  const response = await axios
    .post(url, arg)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return response;
}
