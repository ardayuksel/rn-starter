import React from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Arda', age: 25 },
        { name: 'Volkan', age: 23 },
        { name: 'Alice', age: 8 },
        { name: 'Mehmet', age: 18 },
        { name: 'Hans', age: 27 },
        { name: 'Barış', age: 9 }
    ];
    return (
        <FlatList
            keyExtractor={(item) => item.name}
            data={friends}
            renderItem={({ item }) => {
                return <Text style={style.textStyle}>{item.name} - {item.age}</Text>;
            }}
        />
    );
};

const style = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;