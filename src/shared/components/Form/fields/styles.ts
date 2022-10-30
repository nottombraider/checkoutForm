import classnames from "classnames";

export const sharedFieldWrapper = "w-full flex flex-col relative";

export const sharedFieldStyles = (
  isError: boolean,
  isIcon: boolean,
  isValid: boolean
): string =>
  classnames(
    "w-full border border-gray-200 outline-none focus:ring-indigo-300 focus:ring-2 rounded py-1 px-3 text-xs",
    { "pl-6": isIcon },
    {
      "border-red-500 focus:border-red-500 focus:ring-red-500 focus:ring-1 animate__animated animate__shakeX":
        isError,
    },
    { "focus:border-green-300 focus:ring-green-300 focus:ring-1": isValid }
  );

export const errorMessage = "text-xs text-red-600";

export const fieldIcon = "w-3 my-1 mx-2 absolute z-10";

export const endIconIdentifier =
  "absolute right-2 top-1 animate__animated animate__zoomIn";
