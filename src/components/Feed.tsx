import React from 'react';
import {Post} from './Post';
import {ScrollView} from 'react-native';

export const Feed = () => {
  const posts: PostProps[] = [
    {
      person: 'Shane',
      img_url:
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
      likes: 7,
    },
    {
      person: 'Shane',
      img_url:
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
      likes: 7,
    },
    {
      person: 'Shane',
      img_url:
        'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1017&q=80',
      likes: 7,
    },
    {
      person: 'Shane',
      img_url:
        'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVtZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      likes: 7,
    },
    {
      person: 'Shane',
      img_url:
        'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWVtZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      likes: 7,
    },
    {
      person: 'Shane',
      img_url:
        'https://images.unsplash.com/photo-1523406909961-95040afc761a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      likes: 7,
    },
  ];
  return (
    <ScrollView>
      {posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </ScrollView>
  );
};
