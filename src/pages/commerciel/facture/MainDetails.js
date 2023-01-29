export default function MainDetails({ name, address }) {
  return (
    <>
      <section className="flex flex-col  justify-center">
        <h2 className="font-bold text-3xl uppercase mb-1">{name}</h2>
        <p>{address}</p>
      </section>
    </>
  )
}
