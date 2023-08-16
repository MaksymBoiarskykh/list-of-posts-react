import { useMemo } from "react";

export const usePageArray = (totalItem, limitItem) => {
  return useMemo(() => {
    const totalPages = Math.ceil(totalItem / limitItem);
    let result = [];
    for (let i = 1; i <= totalPages; i++) {
      result.push(i);
    }
    return result;
  }, [totalItem, limitItem]);
};
