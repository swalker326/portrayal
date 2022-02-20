import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export const Avatar = ({person, img_url}: AvatarProps) => {
  return (
    <View style={styles.personContainer}>
      <Image style={styles.personImage} source={{uri: img_url}} />
      <Text style={styles.personName}>{person}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  personImage: {
    marginRight: 8,
    borderRadius: 100,
    width: 30,
    height: 30,
  },
  personContainer: {
    marginTop: 12,
    marginLeft: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  personName: {
    fontSize: 26,
  },
});
