export default function UserWrapper() {
  const [listClicked, setListClick] = React.useState("");
  let upload;

  let showElement;
  switch (listClicked) {
    case "Infosetting":
      showElement = (
        <InfoSetting />
      );

      break;

    case "Suscripcion":
      showElement = (
        <Suscripcion />
      );
      break;

    case "Perfil":
      showElement = (
        <Perfil />
      );
      break;

    case "Ubicacion":
      showElement = (
        <Ubicacion />
      );
      break;

    default:
      showElement = (
        <InfoSetting />
      );
  }

  return (
    <>
      <list>
        <ul
          onClick={(e) => {
            console.log("a");
            setListClick("settings");
          }}
        >
          a
        </ul>
        <ul
          onClick={(e) => {
            setListClick("usuario");
          }}
        >
          a
        </ul>
        <ul
          onClick={(e) => {
            setListClick("shop");
          }}
        >
          a
        </ul>
        <ul
          onClick={(e) => {
            setListClick("security");
          }}
        >
          a
        </ul>
        <ul
          onClick={(e) => {
            setListClick("banannero");
          }}
        >
          a
        </ul>
      </list>
      {showElement}
    </>
  );
}
