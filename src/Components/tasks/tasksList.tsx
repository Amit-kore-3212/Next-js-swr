import React from "react";
import { useState } from "react";
import useGetHook from "@/Utils/useGetHook";
import "../../app/globals.css";
import { useRouter } from "next/router";
import useSWRMutation from "swr/mutation";
import useDeleteHook from "@/Utils/useDeleteHook";

export const TasksList = () => {
  const [tasks, setTasks] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  const { push } = useRouter();

  const propstoSend = {
    url: "http://localhost:3033/api/tasks",
    method: "GET",
  };

  const { data, error } = useGetHook(propstoSend);

  const { trigger } = useSWRMutation(
    "http://localhost:3033/api/tasks",
    useDeleteHook /* options */
  );

  const handleCreate = () => {
    push("/tasks/new");
  };

  const handleEdit = (id: string) => {
    push(`/tasks/${id}`);
  };

  const handleDelete = async (id: string) => {
    try {
      const result = await trigger({ id });
      if (result) {
        alert("data Deleted Successfully");
      }
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <div>
      <h3>Tasks</h3>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button onClick={handleCreate}>Create </button>
      </div>
      {data && data.length > 0 ? (
        <table className="table">
          <thead className="thead">
            <tr>
              <th className="th">Id</th>
              <th>Title</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {data &&
              data.map((ele: any) => {
                return (
                  <tr key={ele.id}>
                    <td className="td">{ele.id}</td>
                    <td className="td">{ele.title}</td>
                    <td className="td">{ele.status}</td>
                    <td>
                      <button
                        className="button"
                        onClick={() => handleEdit(ele.id)}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(ele.id)}
                        className="button"
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      ) : (
        <h3>No data Available</h3>
      )}
    </div>
  );
};
