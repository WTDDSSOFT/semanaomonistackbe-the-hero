import React from "react";

export default function Header({ children }) {
  return (
    <header>
      {/* <h1>{props.title}</h1> */}
      <h1>{children}</h1>
      {/* retorna todo o conteudo passado pela
      props(propriedades),seja texto ou html */}
    </header>
  );
}

// export default Header;
