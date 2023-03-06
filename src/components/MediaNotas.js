import React, {Component} from 'react';

export default class MediaNotas extends Component {
    contructor(props) {
            super(props)
            this.state = {
                nota1: '',
                nota2: '',
                nota3: '',
                media: null
        }
    }
}