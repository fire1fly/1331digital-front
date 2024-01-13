export interface IEmployee {
  id: string;
  name: string;
  surname?: string;
  type: string;
  position?: string;
  avatarURL?: string;
  stat?: {type: string; value: number}[];
  skills?: {label: string; iconURL: string}[];
  description?: string;
}
