export interface UserProfile {
    username: string;
    full_name: string;
    location: number;
    id: string;
    avatar_url: string;
    faction: string;
    classificationPoints: number;
};
  
export interface User {
    id: string;
    username: string;
    full_name: string;
    location: number;
};