export class CreateUser {
  name: string;
  firstname: string;
  lastname: string;
  email: string;
  partner: boolean;
  money: number;
  photo: string;
}

export class getUser {
  email: string;
}

export class UpdateUser {
  userId: string;
  name: string;
  firstname: string;
  lastname: string;
  photo: string;
  address: string
}
