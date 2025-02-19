import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { Resend } from "resend";
import { CustomSendVerificationRequest } from "@/app/api/auth/components/CustomVerificationRequest";

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY);

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    {
      id: "resend",
      type: "email",
      async sendVerificationRequest(params) {
        await CustomSendVerificationRequest(params, resend);
      },
    },
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
