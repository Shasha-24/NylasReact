import { useState, FormEvent } from "react";
import styles from "./ContactPage.module.css";


type Contact = {
  name: string;
  email: string;
  reason: string;
  notes: string;
};

// Composant
export function ContactPage() {
  // hook d'etat, fonction qui retourne un tableau
  const [contact, setContact] = useState<Contact>({
    name: "",
    email: "",
    reason: "",
    notes: "",
  });

  const fieldStyle = "flex flex-col mb-2";

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Submitted details:", contact);
  }

  return (
    <div className="test flex flex-col py-10 max-w-md mx-auto">
      <h2 className="text-3xl font-bold underline mb-3">Nous contacter</h2>
      <p className="mb-3">
        Si vous entrez vos coordonnées, nous vous répondrons dès que possible.
      </p>
      <form onSubmit={handleSubmit}>
        <div className={fieldStyle}>
          <label htmlFor="name">Ton nom</label>
          <input
            type="text"
            id="name"
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
          />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="email">Ton adresse email</label>
          <input
            type="email"
            id="email"
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
          />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="reason">
            Raison pour laquelle vous devez nous contacter
          </label>
          <select
            id="reason"
            value={contact.reason}
            onChange={(e) => setContact({ ...contact, reason: e.target.value })}
          >
            <option value=""></option>
            <option value="Support">Support</option>
            <option value="Feedback">Retour</option>
            <option value="Other">Autre</option>
          </select>
        </div>
        <div className={fieldStyle}>
          <label htmlFor="notes">Notes complémentaires</label>
          <textarea
            id="notes"
            value={contact.notes}
            onChange={(e) => setContact({ ...contact, notes: e.target.value })}
          />
        </div>
        <div>
          <button
            type="submit"
            className="mt-2 h-10 px-6 font-semibold bg-black text-white"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
}


