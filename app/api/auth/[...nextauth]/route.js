// app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const authOptions = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  // (optional) use your app's sign-in page if you have one
  // pages: { signIn: "/en/auth/login" },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
// Note: NextAuth handles both GET and POST requests