import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// import Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './style';

function TodoHeader({
  headerTitle,
  navigation,
  todosCollection,
  user,
  setUser,
  googleUser,
  setGoogleUser,
  lists,
}) {
  // <AddTodo todosCollection={todosCollection} />
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={[{marginLeft: -1}, styles.footerItem]}
        onPress={toggleMenuModal}>
        <Icon
          name="menu"
          size={styles.icon.size + 4}
          color={styles.colors.white}
        />
      </TouchableOpacity>

      <View style={styles.rightSide}>
        <TouchableOpacity style={[styles.footerItem]}>
          <Icon
            name="basket-outline"
            size={styles.icon.size + 4}
            color={styles.colors.dim2}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem}>
          <Icon
            name="timer-outline"
            size={styles.icon.size + 4}
            color={styles.colors.dim2}
          />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.footerItem]}>
          <Icon
            name="dots-horizontal-circle-outline"
            size={styles.icon.size + 4}
            color={styles.colors.dim2}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default TodoHeader;

/*
<Text style={[styles.headerTitle]}>{headerTitle}</Text>
<AddTodo todosCollection={todosCollection} />
<TouchableOpacity
        style={[{marginLeft: -1}, styles.menuIcon]}
        onPress={navigation.toggleDrawer}>
        <Icon
          name="menu-outline"
          size={styles.icon.size + 12}
          color={styles.colors.white}
        />
      </TouchableOpacity>

<TouchableOpacity style={[styles.pomodoro]}>
          <Icon
            name="ios-basket-outline"
            size={styles.icon.size + 4}
            color={styles.colors.white}
          />
        </TouchableOpacity>
<Icon
          name="md-reorder-two-outline"
          size={styles.icon.size + 25}
          color={styles.icon.color}
        />
        <TouchableOpacity>
          <Image
            style={styles.avatar}
            source={require('../../assets/avatar.png')}
          />
        </TouchableOpacity>
      <TouchableOpacity
      // onPress={navigation.toggleDrawer}
      >
        <Icon
          name="ios-ellipsis-vertical"
          size={styles.icon.size}
          color={styles.icon.color}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={navigation.toggleDrawer}>
        <Image
          style={styles.avatar}
          source={require('../../assets/avatar.png')}
        />
      </TouchableOpacity>
<Text style={[styles.sectionTitle, styles.headerTitle]}>Today</Text>
      <Text style={[styles.sectionTitle, styles.headerTitle2]}>
        September 19
      </Text>
<Text style={[styles.title, styles.remaining]}>
        You have {remaining} tasks today.
      </Text>
style={{marginLeft: 'auto'}}
      <View style={styles.rightSide}>
        <TouchableOpacity
          style={styles.pomodoro}
          onPress={navigation.toggleDrawer}>
          <Icon
            name="ios-file-tray-full-outline"
            size={styles.icon.size - 18}
            color={styles.icon.color}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.pomodoro}>
          <Icon
            name="person-outline"
            size={styles.icon.size - 18}
            color={styles.icon.color}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.remaining}>{remaining}</Text>
<TouchableOpacity onPress={navigation.toggleDrawer}>
        <Icon
          name="ios-menu"
          size={styles.icon.size - 18}
          color={styles.icon.color}
        />
      </TouchableOpacity>
      <Text style={[styles.sectionTitle, styles.headerTitle]}>
        {headerTitle}
      </Text>
      <TouchableOpacity onPress={navigation.toggleDrawer}>
        <Icon
          name="ios-ellipsis-vertical"
          size={styles.icon.size}
          color={styles.icon.color}
        />
      </TouchableOpacity>

      <Modal
        style={{margin: 0}}
        isVisible={menuModal}
        onBackdropPress={toggleMenuModal}
        useNativeDriver
        hideModalContentWhileAnimating
        animationIn="fadeInUp"
        animationOut="fadeOutDown"
        animationInTiming={300}>
        <MenuModal
          navigation={navigation}
          lists={lists}
          user={user}
          setUser={setUser}
          googleUser={googleUser}
          setGoogleUser={setGoogleUser}
          toggleMenuModal={toggleMenuModal}
        />
      </Modal>


*/
