import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";


const isProtectedRoute = createRouteMatcher([
  "/favorits(.*)",
]);

const isAdminRoute = createRouteMatcher([
  "/webone/admin(.*)",
  "/webtwo/admin(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  // ต้อง login ก่อนถึงจะเข้าหน้า protected ได้
  if (isProtectedRoute(req)) await auth.protect();

  // หน้า Admin ต้อง login ก่อน (การเช็ค IsAdmin อยู่ในแต่ละ page)
  if (isAdminRoute(req)) await auth.protect();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
