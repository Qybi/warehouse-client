export interface User {
  id: number;
  username: string;
  passwordHash: string;
  passwordSalt: string;
  roles: string;
  enabled: boolean;
  studentId: number;
}
