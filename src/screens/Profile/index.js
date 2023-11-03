import React from 'react';
import { View, Image, Button, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container } from './styles';

import Api from '../../Api';

export default () => {
    const navigation = useNavigation();

    const handleLogoutClick = async() => {
        await Api.logout();
        navigation.reset({
            routes:[{name:'SignIn'}]
        });
    }

    return (
        <View style={{ flex: 1 }}>
            {/* Cabeçalho personalizado */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Perfil</Text>
                <TouchableOpacity onPress={handleLogoutClick}>
                    <Text style={{ color: 'blue' }}>Sair</Text>
                </TouchableOpacity>
            </View>

            {/* Conteúdo da tela de perfil */}
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={{ uri: 'URL_DA_IMAGEM' }} // Substitua 'URL_DA_IMAGEM' pela URL da foto do perfil
                    style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 20 }}
                />
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Nome do Usuário</Text>
                <Text style={{ fontSize: 16 }}>Outras informações do perfil</Text>
                {/* Adicione outras informações do perfil aqui */}
            </View>
        </View>
    );
}