export const dynamic = 'force-dynamic';

const products = [
  { id: 1, name: 'Developer Hoodie', price: 59.99, description: 'Stay cozy while you ship.' },
  { id: 2, name: 'Varity T-Shirt', price: 29.99, description: 'Ship fast. Look good.' },
  { id: 3, name: 'Sticker Pack', price: 9.99, description: 'Deck your laptop.' },
];

export default function ShopPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-8">Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="border rounded-lg p-6 flex flex-col">
            <div className="flex-1">
              <h2 className="text-xl font-semibold">{p.name}</h2>
              <p className="text-gray-600 mt-2">{p.description}</p>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-2xl font-bold">${p.price}</span>
              <button className="bg-green-600 text-white px-4 py-2 rounded">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h2 className="font-semibold">Cart (0 items)</h2>
        <p className="text-gray-500 text-sm mt-1">Checkout powered by Stripe</p>
        <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded w-full" disabled>
          Proceed to Checkout
        </button>
      </div>
    </main>
  );
}
