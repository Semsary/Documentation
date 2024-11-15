const formatCurrency = (value, currency = "EGP", locale = "en-EG") => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};

export default formatCurrency;
