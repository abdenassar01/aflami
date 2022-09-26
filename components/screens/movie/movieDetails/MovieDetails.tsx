import { ButtonText, DetailsWrapper, GoBackBtn, Heading, Info, MovieDetailsWrapper, Qualities, QualityItem, QualityItemText, SmallHeading, Streamer, Title } from "./styles/Styles";

export default function MovieDetails({ navigation }) {
  return (
    <MovieDetailsWrapper>
      <GoBackBtn onPress={ () => navigation.goBack() }>
        <ButtonText>Go Back</ButtonText>
      </GoBackBtn>
      <DetailsWrapper>
        <Streamer source={{ uri: "https://sydneymillage.files.wordpress.com/2021/05/bear-cross.jpg?w=301" }} />
        <Title>A Cross To Bear (2012)</Title>
        <Info>
          <SmallHeading>Rating: {6.8}</SmallHeading>
          <SmallHeading>Year: {2012}</SmallHeading>
        </Info>
        <Heading>Available Quality:</Heading>
        <Qualities horizontal={true}>
          <QualityItem onPress={ () => console.log("I'm Pressed") }><QualityItemText>1080p</QualityItemText></QualityItem>
          <QualityItem onPress={ () => console.log("I'm Pressed") }><QualityItemText>720p</QualityItemText></QualityItem>
          <QualityItem onPress={ () => console.log("I'm Pressed") }><QualityItemText>480p</QualityItemText></QualityItem>
          <QualityItem onPress={ () => console.log("I'm Pressed") }><QualityItemText>360p</QualityItemText></QualityItem>
        </Qualities>
        <Heading>Discription: </Heading>
        <SmallHeading>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptate, perferendis dolor recusandae debitis illo voluptatibus ratione quasi sint qui tempore inventore sit esse quo rem! Cupiditate unde quibusdam obcaecati.
        </SmallHeading>
      </DetailsWrapper>
    </MovieDetailsWrapper>
  )
}