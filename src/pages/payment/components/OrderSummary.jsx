export default function OrderSummary() {
  const items = [
    { name: "Product 1", price: 19.99 },
    { name: "Product 2", price: 29.99 },
    { name: "Product 3", price: 39.99 },
  ];

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="flex justify-between">
          <span>{item.name}</span>
          <span className="font-semibold">${item.price.toFixed(2)}</span>
        </div>
      ))}
      <div className="border-t pt-4 mt-4">
        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
