import { PhoneBookForm } from "@/components/PhoneBookForm";
import { PhoneBookTable } from "@/components/PhoneBookTable";
import type { ContactProps } from "@/types";
import { useEffect, useState } from "react";

function HomePage() {
  const [contacts, setContacts] = useState<ContactProps[]>([]);

  useEffect(() => {
    const storedContacts = localStorage.getItem("contacts") || "[]";

    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  const submitForm = (newContact: ContactProps) => {
    const updatedContacts = [...contacts, newContact].sort((a, b) =>
      a.lastName.localeCompare(b.lastName)
    );

    setContacts(updatedContacts);
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
  };

  return (
    <div className="container">
      <h1 className="text-center text-5xl mt-6 font-bold">
        React Phone<span className="text-orangeColor">Book</span>
      </h1>

      <div className="mt-20 max-w-4xl mx-auto space-y-8">
        <PhoneBookForm addEntryToTable={submitForm} />
        {contacts.length > 0 && <PhoneBookTable contacts={contacts} />}
      </div>
    </div>
  );
}

export default HomePage;
