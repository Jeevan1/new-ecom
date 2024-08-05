import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { supabase } from "../../../../lib/db";
import { compareSync, hashSync } from "bcrypt-ts";

const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorizationUrl:
        "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
    }),
    Github({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Credentials({
      credentials: {
        email: { label: "email", type: "text", placeholder: "email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "******",
        },
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;

        const hashPassword = hashSync(password, 10);

        const { data, error } = await supabase
          .from("users")
          .select("*")
          .eq("email", email)
          .eq("password", password);
        const user = data[0];
        if (user) {
          //   const decryptedPassword = compareSync(password, user.password);

          if (user.password === password) {
            return {
              name: user.name,
              email: user.email,
              image: user.image,
            };
          }

          return null;
        }

        return null;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
