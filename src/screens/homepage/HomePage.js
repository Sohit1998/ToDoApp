import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import style from './HomePageStyle';
import {useSelector} from 'react-redux';

export default function HomePage(props) {
  const {navigation} = props;

  const getCurrentDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    return date + '-' + month + '-' + year;
  };

  const handleButtonClick = nav => {
    navigation.navigate('CATEGORY', {nav});
  };

  const {data} = useSelector(state => state);

  return (
    <View style={style.mainCont}>
      <View style={style.secCont}>
        <View style={style.headCont}>
          <Text style={style.head}>Hello,</Text>
          <Text style={style.head}>Friends</Text>
          <Text style={style.date}> {getCurrentDate()}</Text>
        </View>
        <View style={style.categoryCont}>
          <TouchableOpacity
            style={style.categoryBtn}
            onPress={() => handleButtonClick('GROCERY')}>
            <View>
              <Image style= {style.imgs} source={require('../../assets/grocery.png')}></Image>
            </View>
            <View>
              <Text style={style.categoryText}>GROCERY</Text>
              <Text style={style.categoryTextsub}>
                {data['GROCERY'].length} task
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.categoryBtn}
            onPress={() => handleButtonClick('PERSONAL')}>
            <View>
              <Image style= {style.imgs} source={require('../../assets/user.png')}></Image>
            </View>
            <View>
              <Text style={style.categoryText}>PERSONAL</Text>
              <Text style={style.categoryTextsub}>
                {data['PERSONAL'].length} task
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.categoryBtn}
            onPress={() => handleButtonClick('WORK')}>
            <View>
              <Image style= {style.imgs} source={require('../../assets/work.png')}></Image>
            </View>
            <View>
              <Text style={style.categoryText}>WORK</Text>
              <Text style={style.categoryTextsub}>
                {data['WORK'].length} task
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
