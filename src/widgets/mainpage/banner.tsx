import star from '../../shared/assets/img/star.png'
import Image from 'next/image'
import {BlueBtn} from "@/shared/ui/blue-btn";

export const Banner = () => {
    return (
        <div className="flex items-center bg-[#0E1E5A] rounded-[15px] max-w-[1480px] mb-[70px]">
            <div className="flex flex-col justify-end ml-[214px] gap-[50px]">
                <div className="flex flex-col gap-[64px]">
                    <div className="flex flex-col text-[42px] leading-[42px] font-medium gap-[25px]">
                        <h3>85% of our clients set up the program once.</h3>
                        <h3>2 clicks. 100+ accounts. Save time with us:</h3>
                    </div>
                    <BlueBtn title="Take all benefits now"/>
                </div>
            </div>
            <Image src={star} alt="star"/>
        </div>
    )
}