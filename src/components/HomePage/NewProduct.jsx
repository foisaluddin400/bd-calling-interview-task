
import Title from "../shared/Title";

import ProductCard from "../card/ProductCard";
import { newarrival } from "@/lib/newArival";

const NewProduct = () => {
  return (
    <div>
      <div className="flex mx-4 justify-between">
        <Title head={"This Month"} title={"New Arrival"}></Title>
        <div>
          <button className="bg-[#fe6201] px-8 mt-24  py-2 text-white rounded-sm">View All</button>
        </div>
      </div>
      <div className="grid grid-cols-4">
        {newarrival.slice(0,4).map((item) => (
          <ProductCard item={item}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default NewProduct;
