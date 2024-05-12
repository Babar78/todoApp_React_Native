import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.checkbox} onPress={handleToggle}>
                    {isChecked && <View style={styles.checkedIndicator} />}
                </TouchableOpacity>
                <Text style={[styles.itemText, isChecked && styles.itemTextChecked]}>
                    {props.text}
                </Text>
            </View>
            <View style={[styles.circular, isChecked && styles.completeCircular]}>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: 24,
        height: 24,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkedIndicator: {
        width: 12,
        height: 12,
        backgroundColor: '#55BCF6',
        borderRadius: 3,
    },
    itemText: {
        maxWidth: '80%',
        fontSize: 16,
    },
    itemTextChecked: {
        textDecorationLine: 'line-through',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    },
    completeCircular: {
        backgroundColor: '#55BCF6',
    },
});

export default Task;
