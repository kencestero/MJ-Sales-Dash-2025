import { getDictionary } from "@/app/dictionaries";
import DashboardClientWrapper from "@/components/auth/dashboard-client-wrapper";

const Layout = async ({ children, params: { lang } }) => {
  const trans = await getDictionary(lang);

  return (
    <DashboardClientWrapper trans={trans}>
      {children}
    </DashboardClientWrapper>
  );
};

export default Layout;
