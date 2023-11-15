abstract class UserRepository {
  abstract create(
    name: string,
    firstname: string,
    lastname: string,
    email: string,
    partner: boolean,
    money: number,
    photo: string,
  ): Promise<void>

  abstract get(
    email: string
  ): Promise<void>

  abstract update(
    userId: string,
    name: string,
    firstname: string,
    lastname: string,
    photo: string,
    address: string
  ): Promise<void>

  abstract viewNavbar(
    userId: string
  ): Promise<void>

  abstract viewRoutine(
    userId: string
  ): Promise<void>
}

export default UserRepository