import { useCallback, useState } from "react";

export default (
  initialValue: string | null
): [string, React.ChangeEventHandler] => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);
  return [value, handler];
};
