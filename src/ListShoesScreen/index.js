import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, FlatList, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import axios from 'axios';

export default class ListShoesScreen extends Component {
    state = {
        listCategory: [],
        listProduct: [],
    }

    componentDidMount() {
        axios({
            url: 'http://svcy3.myclass.vn/api/Product/getAllCategory',
            method: 'GET',
        }).then(({data}) => {
            const listCategory = data.content;
            for (let category of listCategory){
                category.selected = false;
            }
            // console.log('Categories: ',listCategory);
            listCategory[0].selected = true;
            axios({
                url: 'http://svcy3.myclass.vn/api/Product/getProductByCategory',
                method: 'GET',
                params: {
                    categoryId: listCategory[0].id
                }
            }).then (({data})=>{
                const listProduct = data.content;
                this.setState({
                    listCategory: listCategory,
                    selectCategory: listCategory[0],
                    listProduct: listProduct,
                });
            }).catch(err => console.log(err));
        }).catch(err => console.log(err));
    }

    selectCategory = (item) => {
        const listCategory = this.state.listCategory;
        console.log('Seclected: ',item);
        for (let category of listCategory) {
            if (item.id == category.id){
                category.selected = true;
            }
            else {
                category.selected = false;
            }
        }
        axios({
            url: 'http://svcy3.myclass.vn/api/Product/getProductByCategory',
            method: 'GET',
            params: {
                categoryId: item.id
            }
        }).then (({data})=>{
            const listProduct = data.content;
            this.setState({
                listCategory: listCategory,
                listProduct: listProduct,
            });
        }).catch(err => console.log(err));
    }

    renderListProduct = ({item, index}) => {
        return (
            <View style={[styles.cardProduct]} >
                <Image
                    style = {{height: 150, width: 150, position:'relative', top: -20, left: 5}}
                    source = {{uri: item.image}}
                />
                <View style={{position:'relative', top: -40,marginHorizontal:5, flexDirection: 'row', justifyContent:'center'}}>
                    <Text style={{fontSize: 16, fontWeight:'bold', width: '80%'}}>{item.name}</Text>
                    <TouchableOpacity>
                        <FontAwesome name="heart-o" size={20}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    render() {
        const {listCategory, listProduct} = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.barHeader}>
                        <Ionicons name="ios-reorder-two" size={40} color="#fff"/>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity style={styles.buttonHeader}>
                                <FontAwesome name="shopping-bag" size={20} color="#fff"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonHeader}>
                                <Ionicons name="md-person-outline" size={20} color="#fff"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.search}>
                        <TextInput
                            style={{marginLeft: 10}}
                            placeholder="Search your product"
                        />
                        <TouchableOpacity>
                            <FontAwesome name="search" size={20}/>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        style={{flexGrow: 0, padding: 10}}
                        horizontal
                        data = {listCategory}
                        renderItem = { ({item}) => (
                            <TouchableOpacity style={styles.itemCategory}
                                onPress = { () => {this.selectCategory(item)} }
                            > 
                                <Text style={[{color:'#fff', fontSize:20}, item.selected && styles.borderHighlight]}>{item.category}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
                <View style={styles.maincontent}>
                    <FlatList 
                        columnWrapperStyle={{justifyContent: 'space-around'}}
                        data={listProduct}
                        renderItem={this.renderListProduct}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
                <View style={styles.tabBarBottom}>
                    <TouchableOpacity>
                        <SimpleLineIcons name="home" size={30}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <SimpleLineIcons name="heart" size={30}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <SimpleLineIcons name="handbag" size={30}/>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0D2815",
    },
    header: {
        flex: 3,
    },
    barHeader: {
        backgroundColor: "#0D2815",
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    search: {
        borderRadius: 30,
        backgroundColor: '#fff',
        paddingRight: 20,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    maincontent: {
        flex: 7,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: '#fff',
        paddingTop: 30,
    },
    tabBarBottom: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        borderTopWidth: 2,
        borderTopColor: '#adaca4',
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonHeader: {
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
        justifyContent: 'center',
        paddingHorizontal:9,
        marginHorizontal: 5,
    },
    itemCategory: {
        marginVertical: 5,
        marginHorizontal: 10,
    },
    borderHighlight: {
        borderBottomWidth: 3,
        borderBottomColor: '#fff',
    },
    cardProduct: {
        width: '40%',
        height: 170,
        backgroundColor: '#fff',
        marginBottom: 30,
        borderRadius: 10,
        // marginRight: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    }
})

