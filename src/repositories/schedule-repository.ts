abstract class ScheduleRepository {
  abstract create(
    userId: string
  ): Promise<void>

  abstract remove(
    userId: string
  ): Promise<void>

  abstract get(
    userId: string
  ): Promise<void>
}

export default ScheduleRepository