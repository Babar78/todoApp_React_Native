import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";
import { Button } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Task = (props) => {
    const [isChecked, setIsChecked] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    }

    const handleDelete = () => {
        // Delete the task
        props.completeTask(props.itemIndex);
    }


    return (
        <>
            <Modal isVisible={isModalVisible}>
                <View style={{
                    backgroundColor: 'white',
                    padding: 22,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 4,
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                }}>
                    <Text style={{
                        fontSize: 18,
                    }}>
                        Are you sure you want to delete this task?
                    </Text>
                    <View style={{ width: "100%", flexDirection: 'row', justifyContent: "flex-end", marginTop: 20, gap: 10, }}>
                        <Button mode="contained" onPress={toggleModal} style={{
                            backgroundColor: 'gray',
                            color: 'white',
                        }}>Cancel</Button>
                        <Button mode="contained" onPress={handleDelete} style={{
                            backgroundColor: 'red',
                            color: 'white',
                        }}>
                            Delete
                        </Button>
                    </View>
                </View>
            </Modal>

            <View style={styles.item}>
                <View style={styles.itemLeft}>
                    <TouchableOpacity style={styles.checkbox} onPress={handleToggle}>
                        {isChecked && <View style={styles.checkedIndicator} />}
                    </TouchableOpacity>
                    <Text style={[styles.itemText, isChecked && styles.itemTextChecked]}>
                        {props.text}
                    </Text>
                </View>

                {/* Add a button with Delete Icon */}
                <Icon name="delete-circle" size={28} color="gray" onPress={toggleModal} />
            </View >
        </>
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
