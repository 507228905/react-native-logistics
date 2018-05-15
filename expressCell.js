import React, { Component}  from 'react';
import{ View,Dimensions,StyleSheet,Text}from "react-native";

import styles from './expressCell_css'
import PropTypes from 'prop-types';
export default class ExpressCell   extends Component{

        constructor (){
            super();

        }

        static PropTypes = {
            topTitle:PropTypes.string.isRequired,
            bottomTitle:PropTypes.string.isRequired,
            borderColor:PropTypes.string.isRequired,
            textColor:PropTypes.string.isRequired,

        }

        static defaultProps = {

            topTitle:'',
            bottomTitle:'',
            borderColor:'gray',
            textColor:'gray',
        }

        //render方法渲染整个界面
        render() {


            return (<View style = {styles.contaier}>
                    <View style = {styles.middleView}>
                      <View style = {styles.bottomView}>
                             <Text style = {{fontSize:15,color:this.props.textColor}}>{this.props.topTitle}</Text>
                             <Text style = {{fontSize:15,color:this.props.textColor}}>{this.props.bottomTitle}</Text>
                      </View>
                    </View>
                    <View style = {[styles.expressLeft,{backgroundColor:this.props.borderColor} ]}></View>
                 </View>);

        }

        




}