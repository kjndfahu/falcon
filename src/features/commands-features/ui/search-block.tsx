import {Search} from "lucide-react";

export const SearchBlock = () => {
    return (
        <div className="flex text-[18px] items-center justify-between px-4 py-[18px] border-[1px] bg-[#F5F9FC] border-[#DDE6EF] rounded-[15px]">
            <input className="bg-transparent w-full text-black focus:outline-none focus:ring-0"
                   placeholder="Search by team... " type="text"/>
            <Search color="#67748E" />
        </div>
    )
}