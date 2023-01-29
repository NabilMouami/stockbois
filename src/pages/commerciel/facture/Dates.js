export default function Dates({post}) {
  return (
    <>
      <article className="mt-10 mb-14 flex items-end justify-end">
        <ul>
          <li className="p-1 ">
            <span className="font-bold">Num:</span> {post.nemuro}
          </li>
          <li className="p-1 bg-gray-100">
            <span className="font-bold">Date Facture:</span> {post.dateCreated}
          </li>
          <li className="p-1 ">
            <span className="font-bold">Date D'Echeance:</span> {post.dateEcheance}
          </li>
        </ul>
      </article>
    </>
  )
}
