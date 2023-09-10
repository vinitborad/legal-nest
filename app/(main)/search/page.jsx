
// import DropdownMenu from "@/components/common/DropdownMenu"

import DropdownMenu from "@/components/common/DropdownMenu";
import profile from "./profile.jpg"
import ResultCard from "@/components/search/result-card";

const SerachPage = () => {


    const data = {
        photo: profile,
        name: "Lawyer Some",
        badge: "Top rated",
        description: "I will be your legal business consultant. i will be lawyer for your [need]",
        rating: 4.2,
        ratingCounts: 102,
        price: 10000,
    }




    return (
        <div className=" w-fit">
            <div className="bg-zinc-700 w-full flex items-center justify-center h-12"><p>ASSUMING NAVBAR</p></div>

            {/* SEARCH FILTER BAR */}

            <div className="bg-zinc-100 h-14">
                <div className=" w-11/12 mx-auto flex justify-between items-center">
                    <div className="flex items-center justify-center">
                        <DropdownMenu title="Catogary"/>
                        <DropdownMenu title="Service Option"/>
                        <DropdownMenu title="Price"/>
                        <DropdownMenu title="Delivery Time"/>
                    </div>
                    <div className="flex items-center justify-center">
                        <DropdownMenu title="title"/>
                        <DropdownMenu title="title"/>
                        <DropdownMenu title="title"/>
                        <DropdownMenu title="title"/>
                    </div>
                </div>
            </div>

            {/* MAIN RESULTS */}
            <div className="bg-zinc-50 w-screen h-full flex justify-center">
                <div className="w-11/12 flex flex-wrap mt-2 justify-between">
                    <ResultCard
                        data={data}
                    />
                    <ResultCard
                        data={data}
                    />
                    <ResultCard
                        data={data}
                    />
                    <ResultCard
                        data={data}
                    />
                    <ResultCard
                        data={data}
                    />
                    <ResultCard
                        data={data}
                    />
                    <ResultCard
                        data={data}
                    />
                    <ResultCard
                        data={data}
                    />
                    <ResultCard
                        data={data}
                    />
                    <ResultCard
                        data={data}
                    />
                    <ResultCard
                        data={data}
                    />
                    <ResultCard
                        data={data}
                    />
                    <ResultCard
                        data={data}
                    />
                    <ResultCard
                        data={data}
                    />
                    <ResultCard
                        data={data}
                    />
                    <ResultCard
                        data={data}
                    />
                </div>
            </div>
        </div>
    );
}

export default SerachPage;