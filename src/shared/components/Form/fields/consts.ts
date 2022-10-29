export const sharedFieldWrapper = "w-full flex flex-col";

export const sharedFieldStyles = (isError: boolean): string => {
  const baseStyling =
    "w-full border border-gray-200 outline-none focus:ring-indigo-300 focus:ring-2 rounded py-1 px-3 text-xs";

  if (isError) return `${baseStyling} border-red-500 focus:border-indigo-300`;

  return baseStyling;
};

export const errorMessage = "text-xs text-red-600";
