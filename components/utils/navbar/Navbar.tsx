import { Field, GoHome, InputField, Logo, NavBarWrapper, Search, SearchAvatar } from "./styles/Styles";
import { useNavigation } from '@react-navigation/native';

export default function Navbar() {

  const navigation = useNavigation();

  return (
    <NavBarWrapper>
      <GoHome onPress={ () => navigation.canGoBack() && navigation.goBack() }>
        <Logo source={require("../../../asset/logo.png")} />
      </GoHome>   
      <Field>
        <InputField placeholder="Tap to search"></InputField>
        <Search onPress={ () => navigation.navigate("SearchMovie") }>
          <SearchAvatar source={require("../../../asset/search.png")} />
        </Search>
      </Field>
    </NavBarWrapper>
  )
}