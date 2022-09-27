import { useCallback } from 'react';
import { Alert, Linking } from 'react-native';
import { Heading, Link, LinksWrapper, LinkText, Name, Paragraph, Profile, ProfileImg, ProfileInfos, Wrapper } from './styles/Styles'

export default function AboutScreen() {

  const handlePress = useCallback(async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
     
      await Linking.openURL(url);
    } else {
      Alert.alert(`can't open this URL: ${url}`);
    }
  }, [])

  return (
    <Wrapper>
      <Heading>Aflami</Heading>
      <Paragraph>
        Aflami is an open source mobile application for exploring and watching movies online for free.

        You can support the developer by donating to his paypal account.
      </Paragraph>
      <Heading>Developer Informations</Heading>
      <Profile>
        <ProfileImg source={ require("../../../asset/me.png") } />
        <ProfileInfos>
          <Name>ABDENASSAR AMIMI</Name>
          <Paragraph>Full Stack Developer From Morocco</Paragraph>
        </ProfileInfos>
      </Profile>
      <Paragraph>
        If you have the next mind google idea that going to dominate the world then you are in the right place I can help you build a production ready web/mobile application.
      </Paragraph>
      <Paragraph>
        Feel free to contact me and I will be very happy to help grow your business and solve your probleme using software.
      </Paragraph>
      <Paragraph>
        I write clean and maintainable code that is easy to maintain and be extended. and I could fix bugs and add new features to your preexisting app.
      </Paragraph>
      <LinksWrapper>
        <Link color="#7700ff" onPress={ () => handlePress("https://nassardev.me") }>
          <LinkText>Website</LinkText>
        </Link>
          <Link color="#0075ac" onPress={ () => handlePress("https://linkedin.com/in/abdenassar01") }>
          <LinkText>LinkedIn</LinkText>
        </Link>
        <Link color="#242424" onPress={ () => handlePress("https://github.com/abdenassar01") }>
          <LinkText>Github</LinkText>
        </Link> 
        <Link color="#ff0505" onPress={ () => handlePress("mailto:abdenassaramimi@gmail.com") }>
          <LinkText>Gmail</LinkText>
        </Link>
      </LinksWrapper>
    </Wrapper>
  )
}