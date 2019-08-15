export default function ValidateEthereumAddress(
  address: any
): string | undefined {
  if (typeof address !== "string") {
    return undefined;
  }
  if (address.length !== 40) {
    return undefined;
  }
  for (const ch of address) {
    if (
      (ch >= "0" && ch <= "9") ||
      (ch >= "a" && ch <= "f") ||
      (ch >= "A" && ch <= "F")
    ) {
      continue;
    }
    return undefined;
  }
  return address;
}
