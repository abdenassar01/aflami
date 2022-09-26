import { Field, InputField, Logo, NavBarWrapper, SearchAvatar } from "./styles/Styles";

export default function Navbar() {
  return (
    <NavBarWrapper>
      <Logo source={require("../../../asset/movie.png")} />
      <Field>
        <InputField placeholder="Tap to search"></InputField>
        <SearchAvatar source={require("../../../asset/search.png")} />
      </Field>
    </NavBarWrapper>
  )
}