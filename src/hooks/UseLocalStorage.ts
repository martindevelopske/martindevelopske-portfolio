export const useLocalStorage = () => {
  const setItemToLocalStorage = (key: string, value: unknown) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err: unknown) {
      return undefined;
    }
  };
  const getItemFromLocalStorage = (key: string) => {
    let item;
    try {
      item = window.localStorage.getItem(key);
      return item;
    } catch (err: unknown) {
      return undefined;
    }
  };
  const removeItemFromLocalStorage = (key: string) => {
    let item;
    try {
      item = window.localStorage.removeItem(key);
      return item;
    } catch (err: unknown) {
      return undefined;
    }
  };
  return {
    setItemToLocalStorage,
    getItemFromLocalStorage,
    removeItemFromLocalStorage,
  };
};
