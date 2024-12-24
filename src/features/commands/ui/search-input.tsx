import {Search} from "lucide-react";

export const SearchInput = () => {
    return (
        <div className="flex text-black flex-row border-[1px] border-[#DDE6EF] p-4 rounded-[15px] bg-[#F3F5F9]">
            <input placeholder="Search by team..." className="bg-transparent w-full focus:outline-none focus:ring-0" type="text"/>
            <Search color="#67748E" />
        </div>
    )
}