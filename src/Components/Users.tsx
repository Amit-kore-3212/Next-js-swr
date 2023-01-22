import React from "react";
import useGetHook from "@/Utils/useGetHook";

export const Users = () => {
  const propstoSend = {
    url: "https://jsonplaceholder.typicode.com/users",
    method: "GET",
  };
  const { data, error } = useGetHook(propstoSend);

  return (
    <div>
      <h3>users</h3>
      <ul>
        {data &&
          data.map((ele: any) => {
            return (
              <li key={ele.id}>
                {ele.id} -{ele.name} -{ele.email}
              </li>
            );
          })}
      </ul>
    </div>
  );
};
