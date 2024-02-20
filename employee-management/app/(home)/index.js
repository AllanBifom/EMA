import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';

const index = () => {
    return (
        <ScrollView>
            <LinearGradient colors={["#7F7FD5", "#E9E4F0"]} style={{ flex: 1 }}>
                <View style={{ padding: 12 }}>
                    <View style={{ flexDirection: "row", alingItems: "center", justifyContent: "space-between" }}>
                        <AntDesign name="barchart" size={24} color="black" />
                        <Text style={{ fontSize: 16, fontWeight: "600" }}>
                            Employee Management Sysytem
                        </Text>
                        <Entypo name="lock" size={24} color="black" />
                    </View>
                    <View style={{ marginTop: 20, flexDirection: "row", alignItems: "center", gap: 20 }}>
                        <Pressable style={{
                            backgroundColor: "#D3CCE3",
                            padding: 12,
                            borderRadius: 6,
                            alignItems: "center",
                            justifyContent: "center",
                            flex:1
                        }}>
                            <View
                                style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: 25,
                                    backgroundColor: "white",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                <Ionicons name="people-sharp" size={24} color="black" />
                            </View>
                            <Text style={{
                                marginTop: 7,
                                fontWeight: "600"
                            }}>
                                Employee List
                            </Text>
                        </Pressable>
                        <Pressable style={{
                            backgroundColor: "#D3CCE3",
                            padding: 12,
                            borderRadius: 6,
                            alignItems: "center",
                            justifyContent: "center",
                            flex: 1
                        }}>
                            <View
                                style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: 25,
                                    backgroundColor: "white",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                <AntDesign name="check" size={24} color="black" />
                            </View>
                            <Text style={{
                                marginTop: 7,
                                fontWeight: "600"
                            }}>
                                Mark Attendance
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </LinearGradient>
        </ScrollView>
    )
}

export default index

const styles = StyleSheet.create({})