import { Vehicle } from "../../app/models/Vehicle";
import { store } from "../../app/store/ConfigureStore";
import ProductCard from "../../app/components/ProductCard";

interface Props {
  products: Vehicle[];
}

export default function ProductList({ products }: Props) {
  const userLogin = store.getState().account.userDetail;
  if (products.length === 0)
    return (
      <div className="h-20 w-full flex items-center justify-center font-bold">
        No Vehicle Found
      </div>
    );
  return (
    <>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-4 xl:grid-cols-4 xl:gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            userLogin={userLogin}
          />
        ))}
      </div>
    </>
  );
}
