import { format } from "date-fns";
import { enUS } from "date-fns/locale";

const formatData = (isoString) => {
  const date = new Date(isoString);
  return format(date, "dd 'de' MMM 'de' yyyy", { locale: enUS });
};

export default formatData;
