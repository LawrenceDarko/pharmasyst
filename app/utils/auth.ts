// your-auth-module.ts

export interface IUserInfo {
    exp: number; // Expiration timestamp
    role: string; // User role
}

export const userRole = {
    RECEPTIONIST: 'receptionist',
    CASHIER: 'cashier',
    SUPER_ADMIN: 'super_admin',
    // Add other roles as needed
};

export const user = {
    role: 'receptionist'
}

export function decodedToken(token: string): IUserInfo | null {
    
    try {
        const decoded = JSON.parse(atob(token.split('.')[1]));
        return decoded as IUserInfo;
    } catch (error) {
        console.error('Token decoding error:', error);
        return null;
    }
}