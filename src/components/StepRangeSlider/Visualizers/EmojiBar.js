
import React, { Component } from 'react'
import Emoji from '../../Emoji'

/*
** max number of emojis in emoji bar
*/

const MAX_EMOJIS = 10

/*
** returns random integer between min (inclusive) and max (inclusive)
*/

const randomIntInRange = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

/*
** renders a row of n emojis
*/

const INITIAL_STATE = {
    charset: null
}

class EmojiBar extends Component {
    emojis = '😀 😁 😂 🤣 😃 😄 😅 😆 😉 😊 😋 😎 😍 😘 🥰 😗 😙 😚 🙂 🤗 🤩 🤔 🤨 😐 😑 😶 🙄 😏 😣 😥 😮 🤐 😯 😪 😫 😴 😌 😛 😜 😝 🤤 😒 😓 😔 😕 🙃 🤑 😲 🙁 😖 😞 😟 😤 😢 😭 😦 😧 😨 😩 🤯 😬 😰 😱 🥵 🥶 😳 🤪 😵 😡 😠 🤬 😷 🤒 🤕 🤢 🤮 🤧 😇 🤠 🤡 🥳 🥴 🥺 🤥 🤫 🤭 🧐 🤓 😈 👿 👹 👺 💀 👻 👽 🤖 💩 😺 😸 😹 😻 😼 😽 🙀 😿 😾'.split(' ')
    state = INITIAL_STATE

    componentDidMount() {
        this.selectCharSet()
    }

    selectCharSet = () => {
        const charset = Array(MAX_EMOJIS).fill().map(() => this.emojis[randomIntInRange(0, this.emojis.length - 1)]);
        this.setState({ charset })
    }

    render = () => {
        const { charset } = this.state;
        const { n } = this.props;

        if (!charset) return null
        return (<div>
            { [...Array(n)]
                .map((_, i) =>
                    <Emoji
                        symbol={charset[i]}
                        key={ i }
                        label='heart-eyes'
                        className='emoji'
                    />
            )}
        </div>)
    }

}

export default EmojiBar;