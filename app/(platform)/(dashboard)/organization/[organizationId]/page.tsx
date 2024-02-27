import { OrganizationSwitcher, auth } from "@clerk/nextjs";

const OrganizationIdPage = () => {
    const {userId, orgId} = auth()

    return ( 
        <div>
            Organnization page
        </div>
     );
}
 
export default OrganizationIdPage;