export interface User{
    userId: string;
    discordId?: string;
    email: string;
    username: string;
    avatar?: string;
    password: string;
    favoriteCharacter?: Character;
    pityCounter?: number;
    roll?: number;
    characters?: Character[];
    created: Date;
    lastLogin: Date;
    
}
export interface Character{
    nameWaifu: string;
    linkWaifu: string;
    anime: string;
    stars: number;
}