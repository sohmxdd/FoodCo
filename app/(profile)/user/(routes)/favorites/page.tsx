import React from "react";
import Image from "next/image";
import notfound from "@/public/NotFound.svg";
import getFavorites from "@/actions/getFavorites";
import FavoritesCard from "@/components/FavoritesCard";
export const dynamic = "force-dynamic";
const page = async () => {
  const favorites = await getFavorites();
  return (
    <div className="w-full md:py-8 py-4">
      <h1 className="font-bold text-bittersweet-500">Your Favorites 🤤</h1>
      <hr className="w-full h-[1px] bg-bittersweet-500/20  mt-4" />

      {favorites.length === 0 ? (
        <div className="flex items-center justify-center h-full flex-col">
          <Image src={notfound} width={250} height={250} alt="Not Found" />
          <p className="mt-4 font-medium">No Favorites Yet!</p>
        </div>
      ) : (
        <>
          <FavoritesCard />
        </>
      )}
    </div>
  );
};

export default page;