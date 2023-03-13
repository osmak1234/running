import NextAuth, {NextAuthOptions} from "next-auth";
import CreadentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt"
    },
    providers: [
        CreadentialsProvider({
            type: "credentials",
            credentials: {},
            authorize(credentials, req){
                const { username, email, password, passwordRepeat} = credentials as {
                    username: string;
                    email: string;
                    password: string;
                    passwordRepeat: string;
                }

                if (email !== "lol" && password !== "lol") {
                    return null;
                }

                if (password !== passwordRepeat) {
                    return null;
                }

                return {id: 1, name: username, email: email, password: password}
            }
        })
    ],
    pages: {
        signIn: "/register",
    },
}
export default NextAuth(authOptions);