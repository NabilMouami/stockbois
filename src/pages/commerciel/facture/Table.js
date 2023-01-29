import React from "react"

export default function Table({ list, total }) {
  function toPrecision(num,precision)
  {
    num=Math.trunc(num*10**precision)/10**precision;
    return num;
  }

  return (
    <>
      <table width="100%" className="mb-10">
        <thead>
          <tr className="bg-gray-100 p-1">
            <td className="font-bold">Quantity</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Amount</td>
            <td className="font-bold">Category</td>
            <td className="font-bold">Type</td>
            <td className="font-bold">Status</td>
          </tr>
        </thead>
        {list.map(({ id, description, quantity, price, amount,category,type,status }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr className="h-10">
                <td>{quantity}</td>
                <td>{price}</td>
                <td>{toPrecision(amount,2)}</td>
                <td>{category}</td>
                <td>{type}</td>
                <td>{status}</td>

              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>

      <div>
        <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">
          Total: {total.toLocaleString()}
        </h2>
      </div>
    </>
  )
}
