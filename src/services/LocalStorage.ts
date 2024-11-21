export function setItemLocalStorage(key: string, value: string) {
  localStorage.setItem(key, value);
}

export function getItemLocalStorage(key: string) {
  return localStorage.getItem(key);
}

export function removeItemLocalStorage(key: string) {
  localStorage.removeItem(key);
}

export function clear() {
  localStorage.clear();
}
