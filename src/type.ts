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
  id?: number | null;
  bio?: string | null;
  company?: string | null;
  email?: string | null;
  followersNum?: number | null;
  followingsNum?: number | null;
  name?: string | null;
  nickName?: string | null;
  profileImageUrl?: string | null;
  statusMessage?: string | null;
}
