import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  addNewData,
  editingData,
  toggleEditing,
  updateData,
  UPDATE_DATA,
} from '../../redux/action/action';
import style from './UserInputStyle';

export default function UserInput({route, navigation}) {
  const {editedData} = useSelector(state => state);
  console.log('editedData =>>>>>>>>>', editedData);

  const [title, setTitle] = useState(route?.params?.data?.title || '');
  const [subTitle, setSubtitle] = useState(route?.params?.data?.subTitle || '');
  const {data, is_editing} = useSelector(state => state);
  // const {is_editing} = useSelector(state => state)
  const dispatch = useDispatch();
  const {nav, btn} = route.params;

  const handleAddTodo = () => {
    if(title ==='', subTitle===''){
      return alert('Empty Inputs')
    }
    if (is_editing) {
      console.log(route?.params?.index);
      console.log('index=====>', data[nav][route?.params?.index]);
      // dispatch(editingData({title: title, subTitle: subTitle, id: route?.params?.data?.id}));
      // dispatch(updateData([...data[nav],]))
      const prevData = data[nav];
      const updatedData = prevData.map(element => {
        if (element.id === route?.params?.data?.id) {
          return {
            ...element,
            title: title,
            subTitle: subTitle,
          };
        } else {
          return element;
        }
      });
      dispatch(updateData(updatedData, nav));
      dispatch(toggleEditing());
    } else {
      dispatch(
        addNewData(
          [...data[nav], {title: title, subTitle: subTitle, id: +new Date()}],
          nav,
        ),
      );
    }
    navigation.navigate("CATEGORY", {nav});
  };
  return (
    <View style={style.inputCont}>
      <View style= {style.inputContSec}>
        <TextInput
          style={style.title}
          value={title}
          onChangeText={text => setTitle(text)}
          placeholder="Enter the title"></TextInput>
        <TextInput
          style={style.title}
          value={subTitle}
          onChangeText={text => setSubtitle(text)}
          placeholder="Enter subtitle"></TextInput>
      </View>
      <TouchableOpacity onPress={handleAddTodo} style={style.btnCont}>
        <Text style={style.btnText}>{btn}</Text>
      </TouchableOpacity>
    </View>
  );
}
