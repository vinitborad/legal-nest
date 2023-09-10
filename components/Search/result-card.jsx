"use client"

import { IndianRupee, Star } from "lucide-react";
import Image from "next/image";


const ResultCard = ({ data }) => {
    return (
        <div className=" text-black max-w-[23%] mt-5">
            <div className=" flex flex-col">
                <div className="">
                    <Image
                        src={data.photo}
                        height={300}
                        width={300}
                        alt="profile photo"
                        className="rounded-md"
                    />
                </div>

                <div className=" mt-2">
                    <div className="flex items-center">
                        {/* TODO: image ne round karvo not rectangular */}
                        <Image
                            src={data.photo}
                            height={25}
                            alt="profile photo"
                            className="rounded-md"
                        />
                        <p className=" font-bold ml-2 text-sm text-zinc-800">{data.name}</p>
                        <div className="ml-auto">
                            {data.badge}
                        </div>
                    </div>
                    <p className=" max-w-fit text-sm mt-4 text-zinc-500">{data.description}</p>

                    <div className="flex mt-5 items-center justify-start">
                        <Star className=" w-4 h-4 text-black" />
                        <p className=" ml-1 text-sm font-semibold text-zinc-800">{data.rating}</p>
                        <p className=" ml-2 text-sm ">({data.ratingCounts})</p>
                    </div>
                    
                    <div className="mt-1">
                        <p className=" text-sm ">From ₹<span className=" font-bold">{data.price}</span> </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResultCard;