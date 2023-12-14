import { NextRequest, NextResponse } from "next/server";
import { decodedToken, IUserInfo, userRole, user } from "./app/utils/auth"; // Import your authentication-related modules

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const url = request.nextUrl.clone();

    // const cookie = request.cookies.get(process.env.TOKEN as string);
    // const token = cookie?.value;
    const token = true

    const receptionistRoutes = [
        "/appointments",
    ];

    const cashierRoutes = [
        "/dashboard/admin/profile",
        "/dashboard/admin/change-password",
    ];

    const superAdminRoutes = [
        ...cashierRoutes,
        "/dashboard/super-admin/admins",
        "/dashboard/super-admin/add-admin",
    ];

    if (token) {
        url.pathname = "/not-found";

        // const user = decodedToken(token as string) as IUserInfo;

        // if token is expired then redirect to login page
        // if (user.exp < Date.now() / 1000) {
        //     url.pathname = "/signin";
        //     return NextResponse.redirect(url);
        // }
        // if user role is not admin and user is trying to access admin routes then redirect to login page
        if (user.role !== userRole.RECEPTIONIST  && receptionistRoutes.includes(pathname)) {
            return NextResponse.redirect(url);
        }
        // if admin is trying to access user routes then redirect to login page
        if (user.role !== userRole.CASHIER && cashierRoutes.includes(pathname)) {
            return NextResponse.redirect(url);
        }
        // // if admin is trying to access super-admin routes then redirect to login page
        // if (user.role === userRole.RECEPTIONIST && superAdminRoutes.includes(pathname)) {
        //     return NextResponse.redirect(url);
        // }
        // // if super-admin is trying to access user routes then redirect to login page
        // if (user.role === userRole.SUPER_ADMIN && receptionistRoutes.includes(pathname)) {
        //     return NextResponse.redirect(url);
        // }
    }
}


// if user role is not admin and user is trying to access admin routes then redirect to login page
// if (
//     (user.role !== userRole.ADMIN || user.role !== userRole.SUPER_ADMIN) &&
//     (adminRoutes.includes(pathname) || superAdminRoutes.includes(pathname))
//   ) {
//     return NextResponse.redirect(url);
//   }

//   // if admin is trying to access user routes then redirect to login page
//   if (user.role === userRole.ADMIN && userRoutes.includes(pathname)) {
//     return NextResponse.redirect(url);
//   }
//   // if admin is trying to access super-admin routes then redirect to login page
//   if (user.role === userRole.ADMIN && superAdminRoutes.includes(pathname)) {
//     return NextResponse.redirect(url);
//   }
//   // if super-admin is trying to access user routes then redirect to login page
//   if (user.role === userRole.SUPER_ADMIN && userRoutes.includes(pathname)) {
//     return NextResponse.redirect(url);
//   }
