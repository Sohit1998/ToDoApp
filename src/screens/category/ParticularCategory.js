import {View, Text, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import style from './ParticularCatStyle';
import {useDispatch, useSelector} from 'react-redux';
import {
  deleteData,
  editingData,
  toggleEditing,
  updateData,
} from '../../redux/action/action';
import CheckBox from '@react-native-community/checkbox';

const ParticularCategory = ({route, navigation}) => {
  const dispatch = useDispatch();
  const {data} = useSelector(state => state);
  // console.log(route.params);
  const {nav} = route.params;

  const handleAddButton = () => {
    navigation.navigate('USERINPUT', {nav, btn: 'ADD NEW DATA'});
  };

  const editBtnHandler = (id, item, index) => {
    const newData = data[nav].filter(item => item.id === id);
    // console.log('newData =>>>>>>>>>', newData);
    dispatch(toggleEditing());
    dispatch(editingData(newData));
    navigation.navigate('USERINPUT', {
      nav,
      btn: 'UPDATE DATA',
      data: item,
      index: index,
    });
  };
  const deleteBtnHandler = id => {
    // console.log(data[nav]);
    const newData = data[nav].filter(item => item.id !== id);
    // console.log(newData);
    dispatch(deleteData(newData, nav));
  };

  const setToggleCheckBox = (bool,id) => {
    console.log('booool====>',bool);
    const prevData = data[nav];
    const updatedData = prevData.map((e) => {
      console.log('itemmmmmmm=====>',e);
      if(e.id === id){
        return{
          ...e,
          check: bool,
        }
      }else{
        return e;
      }
    })
    dispatch(updateData(updatedData, nav));

  }

  return (
    <View style={style.categoryCont}>
      {data &&
        Object.keys(data).length > 0 &&
        data[nav]?.map((item, index) => {
          const {id} = item;
          console.log(data[nav][index]);
          return (
            <View key={index} style={[style.particularDataCont, item.check ? style.uncheck : null]}>
              <View style={style.dataCont }>
                <CheckBox
                  disabled={item.check ? true : false}
                  value={item.check}
                  onValueChange={(bool) => setToggleCheckBox(bool,id)}
                />
                <Text style={style.title}>{item.title}</Text>
                <Text style={style.subTitle}>{item.subTitle}</Text>
              </View>
              <View style={style.btnCont}>
                <TouchableOpacity
                  style={style.editBtnCont}
                  onPress={() => editBtnHandler(id, item, index)}>
                  <Text style={style.editBtnText}>EDIT</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={style.editBtnCont}
                  onPress={() => deleteBtnHandler(id)}>
                  <Text style={style.editBtnText}>DELETE</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      <TouchableOpacity style={style.addBtnCont} onPress={handleAddButton}>
        <Text style={style.addBtnText}>+ADD</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ParticularCategory;


