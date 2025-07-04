export default class DateFormatterService {
  /**
   * Formats a date to a human-readable string.
   * @param date - The date to format.
   * @returns A formatted date string.
   */
  public static format(date: Date): string {
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
  }
}
