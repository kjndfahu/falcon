import {SettingsBlock} from "@/shared/ui/settings-block";

export default async function SettingsPage() {
    return (
        <div className="flex flex-col sml:gap-[50px] gap-[25px] sml:px-[62px] px-[20px] sml:py-[77px] py-[25px]">
            <SettingsBlock title="Email" info="Emaossf@mail.ru"/>
            <SettingsBlock title="Password" info="********"/>
        </div>
    )
}