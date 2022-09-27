import { Field, GoHome, InputField, Logo, NavBarWrapper, SearchAvatar } from "./styles/Styles";
import { useNavigation } from '@react-navigation/native';

export default function Navbar() {

  const navigation = useNavigation();

  return (
    <NavBarWrapper>
      <GoHome onPress={ () => navigation.canGoBack() && navigation.goBack() }>
        <Logo source={require("../../../asset/movie.png")} />
      </GoHome>
      <Field>
        <InputField placeholder="Tap to search"></InputField>
        <SearchAvatar source={require("../../../asset/search.png")} />
      </Field>
    </NavBarWrapper>
  )
}