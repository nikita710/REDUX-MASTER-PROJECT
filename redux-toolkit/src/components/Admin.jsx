import React from "react";
import {
  useAddAccountsMutation,
  useDeleteAccountsMutation,
  useGetAccountsQuery,
  useUpdateAccountsMutation,
} from "../api/adminSlice";

const Admin = () => {
  const { data, error, isLoading, isSuccess } = useGetAccountsQuery();

  const [addAccount] = useAddAccountsMutation();

  const [deleteAccount] = useDeleteAccountsMutation();
  const [updateAccount] = useUpdateAccountsMutation();

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Admin Component</b>
        </h4>

        {isLoading ? <p>Loading...</p> : ""}

        {isSuccess &&
          data &&
          data.map((account) => (
            <p key={account.id}>
              {account.id} : {account.amount}
              <button onClick={() => deleteAccount(account.id)}>Delete</button>
              <button
                onClick={() => updateAccount({ id: account.id, amount: 100 })}
              >
                Update
              </button>
            </p>
          ))}

        <button onClick={() => addAccount(125, data.length + 1)}>
          Add Account
        </button>
      </div>
    </div>
  );
};

export default Admin;
