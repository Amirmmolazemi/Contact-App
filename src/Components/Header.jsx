import style from "./Header.module.css";

function Header() {
  return (
    <>
      <div className={style.container}>
        <h1>Contact App</h1>
        <p>
          <a href="https://github.com/amirmmolazemi">Amirmmolazemi</a> | React
          js Practice
        </p>
      </div>
    </>
  );
}

export default Header;
