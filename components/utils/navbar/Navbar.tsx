import { Field, InputField, Logo, NavBarWrapper, Search, SearchAvatar } from "./styles/Styles";
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";

export default function Navbar() {

  const navigation: any = useNavigation();

  const [ title, setTitle ] = useState<string>('');

  return (
    <NavBarWrapper>
      <Logo source={ require("../../../asset/logo.png") } /> 
      <Field>
        <InputField placeholder="Tap to search" value={ title } onChangeText={ setTitle } ></InputField>
        <Search onPress={ () => navigation.navigate('SearchMovie', { movieTitle: title }) }>
          <SearchAvatar source={require("../../../asset/search.png")} />
        </Search>
      </Field>
    </NavBarWrapper>
  )
}