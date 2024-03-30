import { useRouter } from "next/router";

export default function () {
  const { asPath } = useRouter();

  let titleTemplate = "Home - SRA Documentation"

  if (asPath !== '/') {
    titleTemplate = "%s - SRA Documentation"
  }

  return {
    titleTemplate
  }
};