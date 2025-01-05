import star from '../../shared/assets/img/star.png'
import Image from 'next/image'
import {BlueBtn} from "@/shared/ui/blue-btn";

export const Banner = () => {
    return (
        <div className="flex mds:flex-row flex-col mds:gap-0 gap-[40px] items-center bg-[#0E1E5A] rounded-[15px] xl:max-w-[1480px] max-w-[1300px] lg:mx-0 mx-[50px] mb-[70px]">
            <div className="flex flex-col justify-end mds:w-auto w-[340px] mds:pt-0 pt-[36px] xl:ml-[214px] mdbvp:ml-[150px] mds:ml-[100px] ml-[23px] gap-[50px]">
                <div className="flex flex-col mdbvp:gap-[64px] md:gap-[25px] gap-[10px]">
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