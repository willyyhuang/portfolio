export const hexEncode = (str: string): string =>
    str.split('').map((char: string) => char.charCodeAt(0).toString(16)).join('')
