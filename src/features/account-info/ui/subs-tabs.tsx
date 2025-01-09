
interface Props {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

export const SubsTabs: React.FC<Props> = ({ activeTab, setActiveTab }) => {
    const tabs = ['Basic', 'Fast', 'Turbo'];

    return (
        <div className="flex w-full rounded-[25px]">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 text-center text-[16px] font-medium py-[10px] rounded-full transition ${
                        activeTab === tab
                            ? 'bg-[#005dff] text-white'
                            : 'text-[#000] hover:bg-[#e8f3ff]'
                    }`}
                >
                    {tab}
                </button>
            ))}
        </div>
    )
}