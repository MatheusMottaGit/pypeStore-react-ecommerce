import FilterCategorySelect from "@/components/filter-category-select";
import FilterClotheSelect from "@/components/filter-clothe-select";
import FilteredProducts from "@/components/filtered-products";
import { Button } from "@/components/ui/button";
import { ArrowDown, SlidersHorizontal } from "lucide-react";
import React from "react";

const Products = () => {
  return (
    <main>
      {/* presentation */}
      <div className="bg-[url('../assets/men.png')] h-[40vh] bg-fixed bg-cover flex items-center justify-center px-44">
        <div className="flex flex-col gap-4">
          <h1 className="text-7xl font-bold">Check our summer edition!</h1>

          <span className="w-2/4 text-zinc-900">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et ullam
            dolorem ad, exercitationem doloribus nostrum voluptatum odit
            doloremque! Debitis est iure nobis molestiae vel tempore quia quis
            minima harum sunt?
          </span>

          <Button className="w-64 mt-12 bg-ground text-zinc-300 gap-1">
            View all
            <ArrowDown className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* products section */}
      <div className="bg-zinc-100 flex items-center flex-col gap-16 py-5 px-32">
        {/* filter management bar*/}
        <div className="flex items-center justify-between w-full">
          <div className="flex space-x-2 items-center">
            <SlidersHorizontal className="w-4 h-4" />
            <h2 className="border-r px-2 border-r-ground">Filters</h2>
          </div>

          <div className="flex space-x-4">
            <FilterCategorySelect />

            <FilterClotheSelect />
          </div>
        </div>

        {/* filtered products */}
        <FilteredProducts />
      </div>
    </main>
  );
};

export default Products;