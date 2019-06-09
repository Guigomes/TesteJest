import React, { Component } from "react";
import { View, FlatList, DeviceEventEmitter, Text, ActivityIndicator } from 'react-native';

export interface GSTInicioPageParams { }

export interface GSTInicioPageProps {
   navigation?: any;
}

export interface GSTInicioPageState {

   isLoading: boolean;
   modalState: any;
}

export default class GSTInicioPage2 extends Component<GSTInicioPageProps, GSTInicioPageState> {

   static navigationOptions = {
      /*
      headerStyle: {
         backgroundColor: '#005aa5',
         borderBottomWidth: 4,
         borderBottomColor: '#fae128',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
         color: '#fff',
      },*/
      title: "Gerenciamento de Serviços Técnicos"
   };

   state: GSTInicioPageState = {
      isLoading: false,
      modalState: ""
   }

   subscriber: any | undefined = undefined;

   navegarInicio = () => {
      this.props.navigation.popToTop();
   };

   componentDidMount() {


      DeviceEventEmitter.addListener(`gam/apps/navigation/selectTab/aba_1`, this.navegarInicio);





   }

   componentWillUnmount() {
      DeviceEventEmitter.removeListener(`gam/apps/navigation/selectTab/aba_1`, this.navegarInicio);
   }

   render() {
      return (

         this.state.isLoading ?
            (
               <View style={{ flex: 1, backgroundColor: '#efefef', justifyContent: 'center', alignItems: 'center' }}>
                  <ActivityIndicator size="large" color={'#007AFF'} />
               </View>
            )
            : (
               <View style={{ flex: 1, backgroundColor: '#efefef' }}>
                  <Text style={{ backgroundColor: 'transparent', color: '#7A7A7A', alignSelf: 'flex-end', marginRight: 8 }}>v1.0.34</Text>
                  <Text style={{ backgroundColor: 'transparent', color: '#7A7A7A', alignSelf: 'flex-end', marginRight: 8 }}>gst-aplic-api 1.6.6</Text>
                  {/* https://plataforma.desenv.bb.com.br/gst-aplic-api/v3/api/info-provider/v1/manifest url versão da API */}

               </View>
            )
      );
   }


}