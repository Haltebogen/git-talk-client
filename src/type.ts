export interface Iuser {
  name?: string;
  nickName: string;
  company?: string;
  followersNum?: number;
  followingsNum?: number;
  profileImageUrl?: string;
  statusMessage?: string;
}

export interface Imember {
  bio?: string;
  company?: string;
  email?: string;
  followersNum?: number;
  followingsNum?: number;
  name?: string;
  nickName?: string;
  profileImageUrl: string;
  statusMessage?: string;
}
