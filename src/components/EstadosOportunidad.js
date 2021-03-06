import React, {PureComponent} from 'react'
import {TouchableOpacity, Text} from 'react-native'
import {Col, Row} from './Grid'

import styles from '../styles/components/EstadosOportunidad'

type Props = {
    value: String,
    estadoId: Number,
    changeTabValue: Function,
    editable: Boolean
}

class EstadosOportunidad extends PureComponent<Props> {

    render() {
        const {value, changeTabValue, estadoId, editable} = this.props

        return (
            <Row style={[styles.container].concat(editable ? [] : styles.disabled)}

            >
                <Col size={33.333}>
                    <TouchableOpacity onPress={() => !editable || value === 'Activa' ? null : changeTabValue('Activa')}

                    >
                        <Row style={[styles.leftTabContainer].concat(editable ? [] : styles.disabled)}>
                            <Text style={[styles.tabText].concat(value === 'Activa' ? styles.tabTextActive : [])}>
                                Activa
                            </Text>
                        </Row>
                    </TouchableOpacity>
                </Col>

                <Col size={33.333}>
                    <TouchableOpacity onPress={() => !editable || value === 'Ganada' ? null : changeTabValue('Ganada')}

                    >
                        <Row style={editable ? [] : styles.disabled}>
                            <Text style={[styles.tabText].concat(value === 'Ganada' ? styles.tabTextActive : [])}>
                                Ganada
                            </Text>
                        </Row>
                    </TouchableOpacity>
                </Col>

                <Col size={33.333}>
                    <TouchableOpacity
                        onPress={() => !editable || value === 'Cancelada' ? null : changeTabValue('Cancelada')}
                    >
                        <Row style={[styles.rightTabContainer].concat(editable ? [] : styles.disabled)}>
                            <Text style={[styles.tabText].concat(value === 'Cancelada' ? styles.tabTextActive : [])}>
                                Cancelada
                            </Text>
                        </Row>
                    </TouchableOpacity>
                </Col>
            </Row>
        )
    }
}

export default EstadosOportunidad
