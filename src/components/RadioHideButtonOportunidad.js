import React, {PureComponent} from 'react'
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native'

type Props = {
    label: String,
    value: String,
    active: String,
    handleSelectItem: func
}

class RadioHideButtonOportunidad extends PureComponent<Props> {

    state = {
        active: this.props.active
    }

    componentWillReceiveProps(nextProps) {
        const {active} = this.props

        if (active !== nextProps.active) {
            this.setState({active: nextProps.active})
        }
    }

    render() {
        const {active} = this.state
        const {handleSelectItem, value, label, rID} = this.props
        const disabledRadio = active === value ? true : false
        return (
            <View>
                <TouchableOpacity onPress={() => handleSelectItem(value)} style={styles.radioButtonContainer}
                                  disabled={disabledRadio}
                >
                    {
                        active === value
                            ? <Image source={require('./../../assets/images/icons/bool_radiobutton_active_icon.png')}/>
                            : <Image source={require('./../../assets/images/icons/bool_radiobutton_inactive_icon.png')}/>
                    }
                    <View style={styles.itemContainer}
                    >
                        <Text style={styles.label}
                        >
                            {label}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default RadioHideButtonOportunidad

const styles = StyleSheet.create({
    radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 20,
        paddingLeft: 20
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 15
    },
    label: {
        fontSize: 18,
        marginLeft: 15,
        flexWrap: 'wrap'
    }
})
