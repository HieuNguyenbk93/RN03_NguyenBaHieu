import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import axios from 'axios';

export default class DemoCallAPI extends Component {

    state = {
        product: {
            image: '',
            price: 0,
            name: '',
            description: '',
        },
    }

    componentDidMount(){
        // fetch('http://svcy3.myclass.vn/api/Product')
        //     .then(response => response.json())
        //     .then(data => {
        //         const image = data.content[0].image;
        //         const price = data.content[0].price;
        //         const name = data.content[0].name;
        //         const description = data.content[0].description;
        //         const product = {image, price, name, description};
        //         this.setState({product});
        //     })
        //     .catch(error => console.log(error));
        axios({
            url: 'http://svcy3.myclass.vn/api/Product',
            method: 'GET'
        }).then(({data}) => {
            //console.log(result)
            const image = data.content[0].image;
            const price = data.content[0].price;
            const name = data.content[0].name;
            const description = data.content[0].description;
            const product = {image, price, name, description};
            this.setState({product});
        })
        .catch((err) => console.log(err));
    }

    render() {
        console.log(this.state.product);
        const {product} = this.state;
        return (
            <View style={styles.container}>
                <Text> Demo Call API </Text>
                <Text>{product.name}</Text>
                <Text>{product.price}</Text>
                <Text>{product.description}</Text>
                <Image source={{uri: product.image}} style={styles.image}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
    }
})
