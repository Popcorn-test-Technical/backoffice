export interface Client {
  id: string;
  name: string;
  total_vists: number;
  points: number;
}

export interface User {
  name: string;
  email: string;
  password: string;
  role: string;
}
