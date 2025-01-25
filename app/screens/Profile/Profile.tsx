import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from 'twrnc';

const Profile = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [language, setLanguage] = useState('en');

  const handleSave = () => {
    if (!name || !phone || !email) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      Alert.alert('Error', 'Please enter a valid phone number');
      return;
    }
    Alert.alert('Success', 'Profile updated successfully!');
  };

  return (
    <View style={tw`flex-1 justify-center items-center bg-gray-100 p-4`}>

      <Text style={tw`text-sm text-gray-700 mb-2`}>Name</Text>
      <TextInput
        style={tw`border p-2 rounded w-full mb-4`}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      <Text style={tw`text-sm text-gray-700 mb-2`}>Phone Number</Text>
      <TextInput
        style={tw`border p-2 rounded w-full mb-4`}
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <Text style={tw`text-sm text-gray-700 mb-2`}>Email</Text>
      <TextInput
        style={tw`border p-2 rounded w-full mb-4`}
        placeholder="Enter your email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={tw`text-sm text-gray-700 mb-2`}>Select Language</Text>
      <View style={tw`border p-2 rounded w-full mb-4`}>
        <Picker
          selectedValue={language}
          onValueChange={(itemValue) => setLanguage(itemValue)}
        >
          <Picker.Item label="English" value="en" />
          <Picker.Item label="Spanish" value="es" />
          <Picker.Item label="French" value="fr" />
        </Picker>
      </View>

      <TouchableOpacity
        style={tw`bg-blue-500 p-2 rounded w-full`}
        onPress={handleSave}
      >
        <Text style={tw`text-white text-center text-lg`}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
