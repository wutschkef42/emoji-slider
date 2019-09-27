
import React, { PureComponent } from 'react'
import noUiSlider from 'nouislider'
import "nouislider/distribute/nouislider.css"

const INITIAL_STATE = {
    sliderValue: null,
}

class StepRangeSlider extends PureComponent {
    state = INITIAL_STATE

    componentDidMount = () => {
        const {
            parentNodeId,
            rangeMin,
            rangeMax,
            stepSize,
            startValue,
        } = this.props

        const slider = document.getElementById(parentNodeId)

        noUiSlider.create(slider, {
            start: startValue,
            connect: 'lower',
            range: {
                min: rangeMin,
                max: rangeMax,
            },
            step: stepSize,
        })

        slider.noUiSlider.on('update', value =>
            this.setState({
                sliderValue: Math.floor(value)
            }))
    }

    render = () => {
        const { sliderValue } = this.state
        const { parentNodeId, visualizer } = this.props

        return (
            <div>
                <h3>Excessive Emojis</h3>
                <p>Set up the Emoji limit</p>
                <div className='emoji-bar'>
                    <div>
                        { React.cloneElement(visualizer,
                            { n: sliderValue })
                        }
                    </div>
                    <p className='slider-value'>
                        { sliderValue }
                    </p>
                </div>
                <div id={ parentNodeId }></div>
            </div>
        )
    }
}


export default  StepRangeSlider