import { HeaderProps } from "./schema";

export default async (props: HeaderProps) => {
  const response = await fetch("https://affirmations.dev");
  const affirmation = await response.json();
  return {
    ...props,
    ...affirmation,
  };
};
