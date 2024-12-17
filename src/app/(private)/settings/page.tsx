import {SettingsBlock} from "@/shared/ui/settings-block";

export default async function SettingsPage() {
    return (
        <div className="flex flex-col gap-[50px] px-[62px] py-[77px]">
            <SettingsBlock title="Email" info="Emaossf@mail.ru"/>
            <SettingsBlock title="Password" info="********"/>

        </div>
    )
}