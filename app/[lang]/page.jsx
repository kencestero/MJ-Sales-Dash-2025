import { redirect } from "next/navigation";

const page = ({ params }) => {
  // Redirect to login page
  redirect(`/${params.lang}/auth/login`);
};

export default page;
