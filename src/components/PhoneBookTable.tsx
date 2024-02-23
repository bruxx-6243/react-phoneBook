import { useContactStore } from "@/store/useContactStore";

export const PhoneBookTable = () => {
  const contacts = useContactStore((state) => state.contacts);

  return (
    <table className="w-full">
      <thead className="text-darkColor border border-slateColor sticky top-0">
        <tr className="bg-slateColor ">
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody className="text-center border border-slateColor ">
        {contacts.map((contact, index) => (
          <tr
            key={contact.phoneNumber}
            className={`border border-slateColor ${
              index % 2 !== 0 && "bg-slate-800"
            }`}>
            <td>{contact.firstName}</td>
            <td>{contact.lastName}</td>
            <td>{contact.phoneNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
