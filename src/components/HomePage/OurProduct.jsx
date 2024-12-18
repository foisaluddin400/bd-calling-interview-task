import { product } from "@/lib/product";
import Title from "../shared/Title";
import ProductCard from "../card/ProductCard";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const OurProduct = () => {
  return (
    <div>
      <div className="flex mx-4 justify-between">
        <Title head={"Our Product"} title={"Explore Our Products"}></Title>
        <div className="flex gap-2 md:mt-20 mt-11 mr-4">
            <div >
              <div className="bg-neutral-300 hover:bg-orange-600 hover:text-white rounded-full text-2xl p-2 text-gray-500 cursor-pointer">
                <FaArrowLeft />
              </div>
            </div>
            <div>
              <div className="bg-neutral-300 hover:bg-orange-600 hover:text-white rounded-full text-2xl p-2 text-gray-500 cursor-pointer">
                <FaArrowRight />
              </div>
            </div>
          </div>
       
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2">
        {product.slice(0,8).map((item) => (
          <ProductCard key={item.id} item={item}></ProductCard>
        ))}
        
      </div>
      <div className="flex justify-center">
      <Link href={'/allproduct'}><button className="bg-[#fe6201] md:px-8 md:mt-24 mt-5  md:py-2 py-1 px-4 text-white rounded-sm">View All Product</button></Link>
      </div>
    </div>
  );
};

export default OurProduct;