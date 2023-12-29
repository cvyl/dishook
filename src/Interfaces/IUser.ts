export interface IUser {
    id: string;                     // Unique identifier for the user
    username: string                // User's username
    discriminator: string           // User's discriminator
    avatar: string                  // URL of the user's avatar image
    bot?: boolean                   // Indicates if the user is a bot
    system?: boolean                // Indicates if the user is a system user
    mfa_enabled?: boolean           // Indicates if the user has enabled two-factor authentication
    locale?: string                 // User's preferred locale
    verified?: boolean              // Indicates if the user's email has been verified
    email?: string                  // User's email address
    flags?: number                  // User's flags
    premium_type?: number           // User's premium type
    public_flags?: number           // User's public flags
}