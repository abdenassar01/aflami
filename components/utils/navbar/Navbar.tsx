import { Field, InputField, Logo, NavBarWrapper, SearchAvatar } from "./styles/Styles";

export default function Navbar() {
  return (
    <NavBarWrapper>
      <Logo source={require("../../../asset/movie.png")} />
      <Field>
        <InputField></InputField>
        <SearchAvatar source={require("../../../asset/movie.png")} />
      </Field>
    </NavBarWrapper>
  )
}