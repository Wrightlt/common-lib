export function firstCharUpper(string) {
  return string.substring(0, 1).toUpperCase() + string.substring(1, string.length)
}