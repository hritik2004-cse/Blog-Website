const SubscriptionTable = ({ email, date, mongoId, deleteEmail }) => {
  const emaildate = new Date(date);

  return (
    <tr className="text-[#04da00] bg-[#e0fedf] border-b">
      <th className="text-left font-medium text-sm md:text-md lg:text-lg px-6 py-4 whitespace-nowrap">
        {email ? email : "No Email"}
      </th>
      <td className="hidden px-6 py-4 text-sm font-medium capitalize sm:block md:text-md lg:text-lg">
        {emaildate.toDateString()}
      </td>
      <td className="px-6 py-4 capitalize font-medium">
        <button
          className="cursor-pointer rounded-lg bg-red-200 px-6 py-2 text-lg font-medium capitalize text-red-900 transition hover:shadow-lg"
          onClick={() => deleteEmail(mongoId)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default SubscriptionTable;
