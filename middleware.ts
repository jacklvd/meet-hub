import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const protectedRoutes = createRouteMatcher([
    "/meet-hub(.*)",
    "/dashboard",
    "/",
]);

//👇🏻 protects the route
export default clerkMiddleware((auth, req) => {
    if (protectedRoutes(req)) {
        auth().protect();
    }
});

export const config = {
    matcher: ["/((?!.*\\\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};