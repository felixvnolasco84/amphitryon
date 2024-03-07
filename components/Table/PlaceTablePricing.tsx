import { PricePlace, formatCurrency } from "@/lib/utils";

export default function PlaceTablePricing({
  prices,
}: {
  prices: PricePlace[];
}) {
  return (
    <div className="bg-gray-100 p-12">
      <h2 className="mb-12 text-center text-6xl font-bold">Precios</h2>
      <div className="w-full overflow-x-auto">
        <table className="w-full border-spacing-7 text-3xl">
          <thead>
            <tr>
              <th className="text-center">Día</th>
              {prices[0].type.map((priceType) => (
                <th key={priceType.type} className="text-center">
                  {priceType.type.toUpperCase()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {prices.map((priceInfo) => (
              <tr key={priceInfo.day} className="border-b">
                <td className="text-center font-semibold">{priceInfo.day}</td>
                {priceInfo.type.map((priceType) => (
                  <td key={priceType.type} className="py-4 text-center">
                    {formatCurrency(priceType.price)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
