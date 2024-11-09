import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Ionicons } from '@expo/vector-icons'

const employees = () => {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        const fetchEmployeeData = async () => {
            try{
                const response = await axios.get("http://localhost:8000/employees")
                setEmployees(response.data);
            } catch(error){
                console.log("error fetching employee data", error);
            }
        }
        fetchEmployeeData();
    })
  return (
    <View
    style={{flex:1, backgroundColor:"white"}}
    >
    <View>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Pressable>
            
        </Pressable>
    </View>
    </View>
  )
}

export default employees

const styles = StyleSheet.create({})