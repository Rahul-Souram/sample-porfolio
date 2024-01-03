export const truncate = (str, max) => {
  const suffix = "...";
  return str.length < max
    ? str
    : `${str.substr(
        0,
        str.substr(0, max - suffix.length).lastIndexOf(" ")
      )}${suffix}`;
};

export const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
