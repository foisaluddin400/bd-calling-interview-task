import Image from "next/image";

export default function HomePage() {
  return (
    <div className="h-screen bg-white">
      <div className="lg:grid grid-cols-5 gap-6">
        <div className="col-span-1 border-r ">
          <div className="flex flex-col gap-2 lg:pl-9 lg:pt-11">
            <li>Woman's Fashion</li>
            <li>Men's Fashion</li>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Baby's & Toys</li>
            <li>Groceries & pets</li>
            <li>Health & Beauty</li>
          </div>
        </div>
        <div className="col-span-4 lg:pt-11 lg:lg:pl-5">
          <div>
            <Image
              alt="logo"
              src="/img/banner.png"
              height={400}
              width={500}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
