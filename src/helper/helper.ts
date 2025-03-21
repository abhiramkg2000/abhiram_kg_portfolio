export const formatNavigationLinks = (link: string) => {
  let formatedLink = link.toLowerCase();
  formatedLink = "#" + formatedLink;
  return formatedLink;
};
