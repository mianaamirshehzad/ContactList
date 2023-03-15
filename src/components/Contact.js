import React from 'react';
import { View, Text, ScrollView, StyleSheet, Button, Image } from 'react-native';

const Contact = () => {
    return (
        <View style={styles.container}>
            {/* Contact Row  */}
            <View style={styles.row} >
                <Text style={{ marginLeft: 5 }} >
                    786 contacts
                </Text>
                <Text style={styles.title} >
                    CONTACTS
                </Text>
                <Image
                    source={require('../../assets/images/users.png')}
                    style={styles.image} />
            </View>

            {/* Profile sections */}
            <View style={styles.profileView} >
                <Image
                    source={require('../../assets/images/profile.jpg')}
                    style={styles.profileImage} />
                <Text style={{ fontSize: 18, fontWeight: 'bold' }} >
                    Edin Adam
                </Text>
                <Text style={styles.plus} >
                    +
                </Text>
            </View>
            {/* Line separation */}
            <Text style={styles.line} >
                _______________________________________________________
            </Text>

            <View style={styles.row} >
                <Text>
                    A
                </Text>
                <Text style={{ color: '#BE9F56' }}>
                    A
                </Text>
            </View>
            <ScrollView>
                {/* Contact List Section */}
                <View style={styles.contactRow} >
                    <Text>
                        Abbey Longton
                    </Text>
                    <Text>
                        +44 7867 123987
                    </Text>
                    <Text style={{ color: '#BE9F56' }}>
                        INVITE
                    </Text>
                </View>
                <View style={styles.contactRow} >
                    <Text>
                        Abbot Jones
                    </Text>
                    <Text>
                        +44 7867 489411
                    </Text>
                    <Text style={{ color: '#BE9F56' }}>
                        ZIMO
                    </Text>
                </View>
                <View style={styles.contactRow} >
                    <Text>
                        Abdulla Suleman
                    </Text>
                    <Text>
                        +44 7861 498474
                    </Text>
                    <Text style={{ color: '#BE9F56' }}>
                        ZIMO
                    </Text>
                </View>
                <View style={styles.contactRow} >
                    <Text>
                        Adele Parkar
                    </Text>
                    <Text>
                        +44 7860 498996
                    </Text>
                    <Text style={{ color: '#BE9F56' }}>
                        INVITE
                    </Text>
                </View>
                <View style={styles.contactRow} >
                    <Text>
                        Adrian Thompson
                    </Text>
                    <Text>
                        +44 7867 123987
                    </Text>
                    <Text style={{ color: '#BE9F56' }}>
                        ZIMO
                    </Text>
                </View>
                <View style={styles.contactRow} >
                    <Text>
                        Adriana
                    </Text>
                    <Text>
                        +44 7867 489411
                    </Text>
                    <Text style={{ color: '#BE9F56' }}>
                        INVITE
                    </Text>
                </View>
                <View style={styles.contactRow} >
                    <Text>
                        Allan Wilson
                    </Text>
                    <Text>
                        +44 7861 498474
                    </Text>
                    <Text style={{ color: '#BE9F56' }}>
                        ZIMO
                    </Text>

                </View>

                <View style={styles.contactRow} >
                    <Text>
                        Anaya Zahid
                    </Text>
                    <Text>
                        +44 7867 498474
                    </Text>
                    <Text style={{ color: '#BE9F56' }}>
                        ZIMO
                    </Text>
                </View>
                <View style={styles.contactRow} >
                    <Text>
                        Andrew Hart
                    </Text>
                    <Text>
                        +44 7860 498996
                    </Text>
                    <Text style={{ color: '#BE9F56' }}>
                        ZIMO
                    </Text>
                </View>
                <View style={styles.contactRow} >
                    <Text>
                        Abbey Longton
                    </Text>
                    <Text>
                        +44 7867 123987
                    </Text>
                    <Text style={{ color: '#BE9F56' }}>
                        INVITE
                    </Text>
                </View>
                <View style={styles.contactRow} >
                    <Text>
                        Alison Vitam
                    </Text>
                    <Text>
                        +44 7860 498996
                    </Text>
                    <Text style={{ color: '#BE9F56' }}>
                        INVITE
                    </Text>
                </View>
                <View style={styles.contactRow} >
                    <Text>
                        Abbey Longton
                    </Text>
                    <Text>
                        +44 7867 123987
                    </Text>
                    <Text style={{ color: '#BE9F56' }}>
                        INVITE
                    </Text>
                </View>
            </ScrollView>
            <View style={styles.row} >
                <Text>
                    B
                </Text>
                <Text style={{ color: '#BE9F56' }}>
                    B
                </Text>
            </View>
            <ScrollView>
                <View style={styles.contactRow} >
                    <Text>
                        Ben Davis
                    </Text>
                    <Text>
                        +44 7867 123987
                    </Text>
                    <Text style={{ color: '#BE9F56' }}>
                        INVITE
                    </Text>
                </View>
                <View style={styles.contactRow} >
                    <Text>
                        Bil Lomas
                    </Text>
                    <Text>
                        +44 7867 123411
                    </Text>
                    <Text style={{ color: '#BE9F56' }}>
                        ZIMO
                    </Text>
                </View>
                <View style={styles.contactRow} >
                    <Text>
                        Bob Dillan
                    </Text>
                    <Text>
                        +44 7867 123474
                    </Text>
                    <Text style={{ color: '#BE9F56' }}>
                        INVITE
                    </Text>
                </View>
            </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center'
    },
    row: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 5,
    },
    contactRow: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 8,
        marginLeft: 14,
        marginRight: 14
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    image: {
        height: 40,
        width: 40,
        marginLeft: 5,
        marginRight: 5,
    },
    profileImage: {
        height: 80,
        width: 80,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 40
    },
    profileView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    plus: {
        position: 'absolute',
        right: 0,
        marginRight: 10,
        fontSize: 28,
        color: '#BE9F56'
    },
    line: {
        justifyContent: 'center',
        alignSelf: 'center',
        color: '#BE9F56'
    }
});
export default Contact;