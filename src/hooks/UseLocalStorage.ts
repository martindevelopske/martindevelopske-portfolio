export const useLocalStorage = (key: string) => {
  const setItem = (value: unknown) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err: unknown) {return undefined}
  };
  const getItem = () => {
    let item;
    try {
      item = window.localStorage.getItem("formValue");
      return item;
    } catch (err: unknown) {
      return undefined;
    }
  };
  return { setItem, getItem };
};
