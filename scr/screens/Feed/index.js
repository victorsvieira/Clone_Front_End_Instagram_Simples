//ESSA É A TAL DA TELA FEED, ONDE ACONTECE AS COISAS
//IMPORTES TRADICIONAIS
import React from 'react';
import {View, Text, FlatList, Image, StyleSheet, TouchableOpacity} from 'react-native'

//IMPORTES DOS ÍCONES
import options from '../../../assets/three_dots.png'
import like from '../../../assets/like.png';
import comment from '../../../assets/comment.png';
import send from '../../../assets/send.png';
import save from '../../../assets/save.png';

//A TELA EM SI, COMPONENTE PRINCIPAL QUE SERÁ RETORNADO
function feed(){
    //TABELA DE DADOS QUE SERÁ APRESENTADA NA FLATLIST
    const posts = [
        {
            id: '1',
            author: 'mary.silva.585',
            picture_url: 'https://scontent-gru1-1.cdninstagram.com/v/t51.2885-15/e35/201842373_2775909559332733_7313183597471356450_n.jpg?tp=1&_nc_ht=scontent-gru1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=D_bEup7qesYAX_HrlS6&edm=APU89FABAAAA&ccb=7-4&oh=fec5b499d2b4d93dd46cbd6cb09f35d3&oe=60D15241&_nc_sid=86f79a',
            profile_url: 'https://scontent-gru1-2.cdninstagram.com/v/t51.2885-19/s150x150/192594732_515724289564098_1477848793816468294_n.jpg?tp=1&_nc_ht=scontent-gru1-2.cdninstagram.com&_nc_ohc=8osmxn-HElUAX8Dn5mc&edm=AP_V10EBAAAA&ccb=7-4&oh=13beb59faaf35ee7aeafdf854ab1ea76&oe=60D16493&_nc_sid=4f375e',
            likes: '31',
            description: 'Foram mais 365 dias da minha história e sinto uma enorme gratidão por cada um deles.',  
        },
        {
            id: '2',
            author: 'crischinii',
            picture_url: 'https://scontent-gru2-2.cdninstagram.com/v/t51.2885-15/e35/200940804_581332439712023_6127109092406950000_n.jpg?se=7&tp=1&_nc_ht=scontent-gru2-2.cdninstagram.com&_nc_cat=111&_nc_ohc=OaU3sqNoFRcAX-PkfEc&edm=ABfd0MgBAAAA&ccb=7-4&oh=402d32f940acf95c4d7e82a6db4eb7e9&oe=60D1AB46&_nc_sid=7bff83',
            profile_url: 'https://scontent-gru1-2.cdninstagram.com/v/t51.2885-19/s150x150/192594732_515724289564098_1477848793816468294_n.jpg?tp=1&_nc_ht=scontent-gru1-2.cdninstagram.com&_nc_ohc=8osmxn-HElUAX8Dn5mc&edm=AP_V10EBAAAA&ccb=7-4&oh=13beb59faaf35ee7aeafdf854ab1ea76&oe=60D16493&_nc_sid=4f375e',
            likes: '86',
            description: '💋✨🍒',
        },
        {
            id: '3',
            author: 'lucivetemizael',
            picture_url: 'https://scontent-gru2-2.cdninstagram.com/v/t51.2885-15/e35/201256237_232438431725970_5628709127824308691_n.jpg?tp=1&_nc_ht=scontent-gru2-2.cdninstagram.com&_nc_cat=106&_nc_ohc=eJBKvBpTS4gAX9jb_1R&edm=AIQHJ4wBAAAA&ccb=7-4&oh=97bfdc94cd9e3db80aad08a390eb83f8&oe=60D16239&_nc_sid=7b02f1',
            profile_url: 'https://scontent-gru1-2.cdninstagram.com/v/t51.2885-19/s150x150/192594732_515724289564098_1477848793816468294_n.jpg?tp=1&_nc_ht=scontent-gru1-2.cdninstagram.com&_nc_ohc=8osmxn-HElUAX8Dn5mc&edm=AP_V10EBAAAA&ccb=7-4&oh=13beb59faaf35ee7aeafdf854ab1ea76&oe=60D16493&_nc_sid=4f375e',
            likes: '7',
            description: 'Ela resolveu ser como o sol,brilhar intensamente!',
        },
        {
            id: '4',
            author: 'deiagraupner',
            picture_url: 'https://scontent-gru1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/202729016_373452560778589_9145778824955694487_n.jpg?tp=1&_nc_ht=scontent-gru1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=xgcet0xaSxcAX8F_1pb&edm=AIQHJ4wBAAAA&ccb=7-4&oh=b3c2d494039de37cc86163639819c06c&oe=60D1809A&_nc_sid=7b02f1',
            profile_url: 'https://scontent-gru1-2.cdninstagram.com/v/t51.2885-19/s150x150/192594732_515724289564098_1477848793816468294_n.jpg?tp=1&_nc_ht=scontent-gru1-2.cdninstagram.com&_nc_ohc=8osmxn-HElUAX8Dn5mc&edm=AP_V10EBAAAA&ccb=7-4&oh=13beb59faaf35ee7aeafdf854ab1ea76&oe=60D16493&_nc_sid=4f375e',
            likes: '151',
            description: '"Se benze, porque a sua felicidade vai ofender muita gente!"',
        },
        {
            id: '5',
            author: 'cabanadasborboletas',
            picture_url: 'https://scontent-gru1-2.cdninstagram.com/v/t51.2885-15/e35/201183120_142393837865907_6186662364391376547_n.jpg?tp=1&_nc_ht=scontent-gru1-2.cdninstagram.com&_nc_cat=103&_nc_ohc=ZR4cw6ygXacAX9MBIUF&edm=AIQHJ4wBAAAA&ccb=7-4&oh=321ccdfb11f1bc8fc30ce001a7586a66&oe=60D1DDF7&_nc_sid=7b02f1',
            profile_url: 'https://scontent-gru1-2.cdninstagram.com/v/t51.2885-19/s150x150/192594732_515724289564098_1477848793816468294_n.jpg?tp=1&_nc_ht=scontent-gru1-2.cdninstagram.com&_nc_ohc=8osmxn-HElUAX8Dn5mc&edm=AP_V10EBAAAA&ccb=7-4&oh=13beb59faaf35ee7aeafdf854ab1ea76&oe=60D16493&_nc_sid=4f375e',
            likes: '4',
            description: 'Cabana caminho das Borboletas Bom Retiro',
        },
    ];

    //FAMOSA FUNÇÃO RENDER ITEM QUE RENDERIZA OS ELEMENTOS PARA SEREM APRESENTADOS NA FLATLIST
    //NOVAMENTE O DETALHE DO "item:post" JÁ ESPLICADO NO EXEMPLO SIMPLES DE FLATLIST
    function renderItem({item: post}) {
        return (
            //VIEW DO POST COMPLETO
            <View style={styles.post}>
                {/*VIEW DO HEADER*/}
                <View style={styles.postHeader}>
                    {/*VIEW DO USER INFO*/}
                    <View style={styles.userInfo}>
                        {/*ADIÇÃO DE UMA IMAGEM NÃO-LOCAL, QUE VEM DE UMA URL*/}
                        <Image source={{uri: post.picture_url}} style={styles.image} />
                        <View style={{flexDirection: 'column', justifyContent: 'center'}} >
                            <Text style={styles.author}>{post.author}</Text>
                        </View>
                    </View>
                    {/*VIEW DO BOTÃOZINHO DE SETTINGS*/}
                    <View style={styles.postOptions}>
                        <TouchableOpacity>
                            <Image source={options} />
                        </TouchableOpacity>
                    </View>
                </View>
                {/*VIEW DA IMAGEM DO POST, A FOTO EM SI*/}
                <View>
                    <Image style={styles.picture_url} source={{uri: post.picture_url}} />
                </View>
                {/*VIEW DO FOOTER*/}
                <View style={styles.footer} >
                    {/*VIEW DOS BOTÕES DE AÇÃO*/}
                    <View style={styles.actions} > 
                    {/*VIEW ESQUERDA*/}
                    <View style={styles.leftActions} > 
                        <TouchableOpacity style={styles.action} >
                            <Image source={like} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.action}>
                            <Image source={comment} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={send} />
                        </TouchableOpacity>
                    </View>
                    {/*VIEW DO DIREITA*/}
                    <View>
                        <TouchableOpacity>
                            <Image source={save} />
                        </TouchableOpacity>
                    </View>    
                    </View>
                    <View>
                        <Text>Curtido por<Text style={{fontWeight: 'bold'}}> fulano.silva </Text><Text>e </Text><Text style={{fontWeight: 'bold'}}>outras pessoas</Text></Text>
                        <Text style={styles.likes}>{post.likes} curtidas</Text>
                        <Text style={styles.comment}><Text style={{fontWeight: 'bold'}} >{post.author}</Text> {post.description}</Text>
                        </View>
                    <View >
                        <Text style={{color: '#666', fontSize: 11}}>Há 7 horas • <Text style={{color: '#000'}}>Ver Tradução</Text></Text>
                    </View>
                </View>
                    
            </View>
        )
    } 
    //RETORNA A NOSSA FLATLIST
    return (
        <View  style={{backgroundColor: '#fff'}} >
            {/*LEMBRANDO QUE A FLATLIST POSSUI ESSAS 3 PROPRIEDADES BÁSICAS*/}
            <FlatList
                data={ posts }
                keyExtractor={ (item) => {item.id} }
                renderItem={ renderItem }
            />
        </View>
    )
}
//AQUI É SÓ A ESTILIZAÇÃO
const styles = StyleSheet.create({
    post: {
        marginVertical:15,
        backgroundColor: '#fff'
    },
    image: {
        width: 35,
        height: 35,
        marginRight: 10,
        borderRadius: 150 / 2,
        overflow: "hidden",
        
      },
    postHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'center',
        marginBottom: 8,
        marginTop: 8

    },
    postOptions: {

    },
    userInfo: {
        flexDirection: 'row'
        
    },
    author: {
        fontSize: 14,
        color: '#000',
        fontWeight: 'bold'
    },
    place: {
        fontSize: 12,
        color: '#444'

    },
    picture_url: {
        width: '100%',
        height: 400
    },
    footer: {
        
        paddingHorizontal: 15
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15
    },
    action: {
        marginRight: 8
    },
    leftActions:{
        flexDirection: 'row'
    },
    likes: {
        fontWeight: 'bold',
        fontSize: 12
    },
    hashtags:{
        color: '#002d5e'
    },
    description: {
        color: '#000',
        lineHeight: 18
    }
});

export default feed;
