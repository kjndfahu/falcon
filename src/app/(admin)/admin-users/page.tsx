import {AdminAbilities} from "@/widgets/admin-page/admin-abilities";

export default async function AdminUsersPage() {
    return (
        <div className="flex flex-col lg:gap-[50px] gap-[25px] lg:px-[62px] px-[20px] pt-[77px]">
            <AdminAbilities/>
        </div>
    )
}