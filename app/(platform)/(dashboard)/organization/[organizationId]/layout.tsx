import { OrgControl } from "./org-control";

const OrganizationIdLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return ( 
        <>
            <OrgControl/>
            {children}
        </>
     );
}
 
export default OrganizationIdLayout;