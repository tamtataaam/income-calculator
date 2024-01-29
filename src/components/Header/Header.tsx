import './Header.scss';

export const Header = () => {
  return (
    <div className="header">
      <a href="#">Отправить благодарность автору</a>

      <div className="user-info">
        user@mail.ru
        <a href="#">Выход</a>
      </div>
    </div>
  );
};
