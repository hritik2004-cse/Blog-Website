"use client";
import SubscriptionTable from "@/components/AdminComponents/SubscriptionTable";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const page = () => {
  const [emails, setEmails] = useState([]); // [] because to get all the emails in array

  // function to get all the emails from database
  const fetchEmails = async () => {
    const res = await axios.get("/api/email");
    setEmails(res.data.emails);
  };

  // function to delete the subscription email
  const deleteEmail = async (mongoId) => {
    const res = await axios.delete("/api/email", {
      params: {
        id: mongoId,
      },
    });
    if (res.data.success) {
      toast.success(res.data.msg);
      fetchEmails(); // to load all emails again 
    } else {
      toast.error("error");
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  return (
    <div className="flex-1 p-5 sm:p-8">
      <h1 className="text-3xl text-center font-bold mb-4">All Subscriptions</h1>
      <div className="relative rounded-2xl shadow-lg h-[85vh] max-w-full overflow-x-auto mt-4 border-gray-900 border-2 scrollbar-hide bg-white">
        <table className="w-full">
          <thead className="text-md text-left text-white bg-black">
            <tr className="">
              <th className="px-6 py-3 capitalize" scope="col">
                Email Subscription
              </th>
              <th className="hidden sm:block px-6 py-3 capitalize" scope="col">
                date
              </th>
              <th className="px-6 py-3 capitalize" scope="col">
                action
              </th>
            </tr>
          </thead>
          <tbody>
            {emails.map((item, index) => {
              return (
                <SubscriptionTable
                  key={index}
                  date={item.date}
                  email={item.email}
                  mongoId={item._id}
                  deleteEmail={deleteEmail}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
