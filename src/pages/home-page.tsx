import { PhoneBookForm } from "@/components/PhoneBookForm";
import { PhoneBookTable } from "@/components/PhoneBookTable";
import { useContactStore } from "@/store/useContactStore";
import type { ContactProps } from "@/types";
import { useEffect } from "react";

function HomePage() {
  const contacts = useContactStore((state) => state.contacts);
  const addContact = useContactStore((state) => state.addContact);

  useEffect(() => {
    const storedContacts = localStorage.getItem("contacts");
    if (storedContacts) {
      const parsedContacts: ContactProps[] = JSON.parse(storedContacts);

      useContactStore.setState({ contacts: [] });

      parsedContacts.forEach((contact) => {
        addContact({ contact });
      });
    }
  }, [addContact]);

  const submitForm = (newContact: ContactProps) => {
    const updatedContacts = [...contacts, newContact].sort((a, b) =>
      a.lastName.localeCompare(b.lastName)
    );

    addContact({ contact: newContact });
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
  };

  return (
    <div className="container">
      <h1 className="text-center text-5xl mt-6 font-bold">
        React Phone<span className="text-orangeColor">Book</span>
      </h1>

      <div className="mt-20 max-w-4xl mx-auto space-y-8">
        <PhoneBookForm addEntryToTable={submitForm} />
        {contacts.length > 0 && <PhoneBookTable />}
      </div>
    </div>
  );
}

export default HomePage;
