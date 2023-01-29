export default function ClientDetails({ clientName, clientAddress }) {
  return (
    <>
      <section className="mt-5">
        <h2 className="uppercase font-bold">Nom Client:{clientName}</h2>
        <p>Adresse:{clientAddress}</p>
      </section>
    </>
  );
}
