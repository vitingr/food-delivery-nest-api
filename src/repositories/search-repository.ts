abstract class searchRepository {
  abstract search(
    text: string
  ): Promise<void>
}

export default searchRepository