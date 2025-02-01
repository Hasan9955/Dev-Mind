import { PrismaAdapter } from "@auth/prisma-adapter";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import prisma from "./connect";
import { getServerSession } from "next-auth";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      redirectUri: process.env.GOOGLE_REDIRECT_URI || 'https://dev-mind-seven.vercel.app/api/auth/callback/google'
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      redirectUri: process.env.GITHUB_REDIRECT_URI || 'https://dev-mind-seven.vercel.app/api/auth/callback/github'
    }),
  ],
};

export const getAuthSession = () => getServerSession(authOptions);
