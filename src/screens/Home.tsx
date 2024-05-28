import React from "react";
import {View, Text, Image} from "react-native";
import { StatusBar } from 'expo-status-bar';
import styles from '../screens/Style';

import { BatLogo } from "../components/BatLogo/BatLogo";

export default function Home() {
    return (
        <View style={styles.container}>
            
            <View style={styles.logoContainer}>
                <BatLogo/>
            </View>

            <Text style={styles.container}>yo</Text>
            <StatusBar style="auto"/>

        </View>
    )
}