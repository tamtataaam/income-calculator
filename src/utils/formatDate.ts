export const formatDate = (date: string) => {
  const inputDateTime = new Date(date);

  const localDateTimeString = inputDateTime.toLocaleString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/Moscow',
  });

  return localDateTimeString.replace(',', '');
};
