import React from "react";
import { Text, Image, View, StyleSheet, Alert} from "react-native";
import { Button, ListItem, Icon } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";

// import Icon from 'react-native-vector-icons/FontAwesome';

const TeamDetailScreen = ({route, navigation}) => {
  const { id, name, logopath } = route.params;
  const applyButtonAlert = () =>
    Alert.alert(
      "팀 가입 신청",
      JSON.stringify(name) + "팀 가입을 신청하시겠습니까?",
      [
        {
          text: "취소",
          onPress: () => console.log("팀 가입 신청 취소"),
          style: "cancel"
        },
        { text: "확인", onPress: () => console.log("팀 가입 신청 완료") }
      ],
      { cancelable: false }
    );

  const cancelButtonAlert = () =>
    Alert.alert(
      "팀 가입 취소",
      JSON.stringify(name) + "팀 가입을 취소하시겠습니까?",
      [
        {
          text: "취소",
          onPress: () => console.log("팀 가입 신청 유지"),
          style: "cancel"
        },
        { text: "확인", onPress: () => console.log("팀 가입 신청 취소 완료") }
      ],
      { cancelable: false }
    );

  return (
    <ScrollView style={styles.background}>
      {/* 팀로고(이미지) + 팀이름(텍스트) */}
      <View style={styles.teamprofile}>
        <Image source={{uri: JSON.stringify(logopath)}} style={{width:100, height:100, borderRadius: 150/2}} />
        <View style={{flexDirection:'column'}}>
          <Text styles={styles.teamname} style={{fontSize:20}}>{JSON.stringify(name)}</Text>
        </View>
      </View>


      {/* 설명 */}
      <View style={{marginBottom:30}}>
        <ListItem bottomDivider>
          <Icon name='info' />
          <ListItem.Content>
            <ListItem.Title >설명</ListItem.Title>
            <ListItem.Subtitle >{team_name}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </View>


      {/* 멤버 목록 페이지로 이동하는 버튼 */}
      <View style={{marginBottom:30}}>
        <Button
          onPress={() => {}}
          title="팀원 목록"
          type="outline"
        />
      </View>

      {/* 신청/취소 버튼 */}
      <View style={styles.oxbutton}>
        <Button
          onPress={applyButtonAlert}
          title="신청"
        />
        <Button
          onPress={cancelButtonAlert}
          title="취소"
          disabled
        />
      </View>


    </ScrollView>
  );
}


const styles = StyleSheet.create({
  background: {
    margin:30
  },
  teamprofile: {
    margin:20,
    alignItems:'center'
  },
  teamname: {
    marginLeft:10,
    alignContent:'center',
    fontWeight:'bold',
    textAlign:'center',
    alignSelf:'center'
  },
  oxbutton: {
    marginTop:30,
    marginBottom:30
  }
});

export default TeamDetailScreen;