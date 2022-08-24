export interface Iuser {
  name?: string;
  nickName: string;
  company?: string;
  followersNum?: string;
  followingsNum?: string;
  profileImageUrl?: string;
}

export interface Imember {
  email: string;
  isFollower: boolean;
  isFollowing: boolean;
  isMember: boolean;
  nickName: string;
  profileImageUrl: string;
  providerId: number;
  statusMessage: string;
}
