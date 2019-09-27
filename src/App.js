
import React, { useState, Fragment } from 'react'
import StepRangeSlider from './components/StepRangeSlider/StepRangeSlider'
import EmojiBar from './components/StepRangeSlider/Visualizers/EmojiBar'
import Fade from "./components/Fade";
import './App.scss'


const App = () => {
    const [show, setShow] = useState(false);

    return (
        <Fragment>
            <div className='container'>
                    <button
                        id='btn-hello'
                        class='btn btn-save'
                        onClick={ () => setShow(show => !show) }
                    >
                        { show ? 'Close Card' : 'Open Card'}
                    </button>
            </div>

            <Fade show={show}>
                <div className="App">
                    <div className='card'>
                        <div className='card-content'>
                            <StepRangeSlider
                                rangeMin={ 0 }
                                rangeMax={ 10 }
                                stepSize={ 1 }
                                startValue={ 6 }
                                parentNodeId='emoji-slider'
                                visualizer={ <EmojiBar/> }
                            />

                            <div className='filter-section with-border'>
                                <h2>Ignored Channels</h2>
                                <div className='pick-list'>
                                    <div className='pick-list-items'>
                                        <div className='pick-list-item'>
                                            <span className='hashtag'>#</span>
                                            <span className='hashtag-value'>Welcome</span>
                                        </div>
                                    </div>
                                    <div className='icon-container'>
                                        <span className='add-icon'>+</span>
                                    </div>
                                </div>
                            </div>

                            <div className='filter-section'>
                                <h2>Allowed Roles</h2>
                                <div className='pick-list'>
                                    <div className='pick-list-items'>
                                        <div className='pick-list-item'>
                                            <span className='role-icon'></span>
                                            <span className='mod-value'>Moderator</span>
                                        </div>
                                    </div>
                                    <div className='icon-container'>
                                        <span className='add-icon'>+</span>
                                    </div>
                                </div>
                            </div>

                            <div className='card-actions'>
                                <button
                                    className='btn btn-cancel'
                                    onClick={ () => setShow(show => !show) }
                                >
                                    Cancel
                                </button>
                                <button
                                    className=' btn btn-save'
                                    onClick={ () => setShow(show => !show) }
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    <FooterBackground/>
                    </div>
                </div>
            </Fade>
        </Fragment>
    );
}

const FooterBackground = () => (
    <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-300 0 950 270" >
        <path d="M-314,267 C105,364 400,100 812,279" fill="none" stroke="#232428" stroke-width="120" stroke-linecap="round"/>
    </svg>
)

export default App;
