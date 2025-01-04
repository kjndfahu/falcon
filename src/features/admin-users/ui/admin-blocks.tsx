'use client'

interface Props {
    title?: string;
    logo?: React.ReactNode;
    styles?: string;
    child?: React.ReactNode;
    isActive: boolean;
    onClick: () => void;
}

export const AdminBlocks: React.FC<Props> = ({ title, isActive, onClick, logo, child, styles }) => {
    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        onClick();
    };

    return (
        <div
            onClick={handleClick}
            className={`flex items-center justify-center mdbvp:gap-[40px] gap-[10px] font-semibold mdbvp:w-[413px] md:w-[365px] w-full ${styles} mdbvp:px-[25px] pt-[28px] pb-[34px] border-[1px] text-black sm:text-[25px] text-[18px] rounded-[15px] border-[#BEDAE9] cursor-pointer relative`}
        >
            {title}
            {logo}
            {isActive && (
                <div onClick={e => e.stopPropagation()} className="absolute top-0 left-0">
                    {child}
                </div>
            )}
        </div>
    );
};