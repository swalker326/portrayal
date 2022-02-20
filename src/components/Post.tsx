import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Avatar} from './Avatar';

export const Post = ({person, img_url, likes}: PostProps) => {
  const [activelikes, setLikes] = useState(likes);
  return (
    <View style={styles.postContainer}>
      <ImageBackground
        style={styles.postPhotoBackground}
        source={{uri: img_url}}>
        <Avatar
          person={person}
          img_url="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        />
        <TouchableOpacity
          style={styles.likeContainer}
          onPress={() => setLikes(activelikes + 1)}>
          <Text style={styles.likeCount}>{activelikes}</Text>
          <FontAwesomeIcon size={22} icon={faHeart} color={'purple'} />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  postAuthor: {
    fontSize: 25,
  },
  postContainer: {
    display: 'flex',
    marginBottom: 22,
  },
  postPhotoBackground: {
    height: 400,
    display: 'flex',
    justifyContent: 'space-between',
  },
  likeContainer: {
    margin: 12,
    elevation: 10,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  likeCount: {
    fontSize: 22,
    color: 'white',
    marginRight: 6,
  },
});
