//IMPORTES TRADICIONAIS
import React from 'react'
import {TouchableOpacity, Image, View} from 'react-native'

//IMPORTES DO REACT NAVIGATION
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

//IMPORT DA TELA FEED NA PASTA SCREENS
import Feed from '../screens/Feed'

//IMPORTES DOS ICONES DOS BOTOES
import Logo from '../../assets/logo.png';
import three_dots from '../../assets/three_dots.png';
import heart from '../../assets/heart.png';
import add_post from '../../assets/add_post.png';

//CRIACÃO DA PILHA DE NAVEGAÇÃO
//O QUE TEM AQUI EU NÃO ENTENDI MUITO BEM
const MainNavigator = createStackNavigator({
    //ADICIONO A TELA MAIN
    Feed
    }, 
    {//CUSTOMIZAÇÃO DO HEADER, ISSO É BACANA
        defaultNavigationOptions: {
            headerTitle:  <Image source={Logo}/>,
            headerRight: (
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{marginRight:20}} >
                        <Image source={add_post} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginRight:20}} >
                        <Image source={heart} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginRight:20}} >
                        <Image source={three_dots} />
                    </TouchableOpacity>
                </View>
        )
    }
});

//CRIO AQUI ESSE TAL DE APP CONTAINER
export default createAppContainer(MainNavigator);