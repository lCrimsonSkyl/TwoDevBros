import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import WheelReact from 'wheel-react';

import Wall from './wall';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            presentationIndex: 0,
            presentationMaxIndex: 0,
        };

        WheelReact.config({
            up: () => {
                this.handleLateralNavigation('down');
            },
            down: () => {
                this.handleLateralNavigation('up');
            },
        });
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPressed);
        const childCount = document.getElementById('swipeable-container').childNodes[0];
        const self = this;
        this.getChildCount = setTimeout(() => {
            self.setState({ presentationMaxIndex: childCount.childElementCount - 1 });
        }, 500);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyPressed);
        clearTimeout(this.getChildCount);
    }

    handleKeyPressed = (event) => {
        if (event.key === 'ArrowUp') {
            this.handleLateralNavigation('up');
        }
        if (event.key === 'ArrowDown') {
            this.handleLateralNavigation('down');
        }
    }

    handleLateralNavigation = (direccion) => {
        const { presentationIndex, presentationMaxIndex } = this.state;
        if (typeof direccion == 'string') {
            if (direccion === 'up') {
                if (presentationIndex > 0) {
                    this.setState({ presentationIndex: presentationIndex - 1 });
                }
            }
            if (direccion === 'down') {
                if (presentationIndex < presentationMaxIndex) {
                    this.setState({ presentationIndex: presentationIndex + 1 });
                }
            }
        }
        else if (typeof direccion == 'number') {
            const newIndex = direccion;
            this.setState({ presentationIndex: newIndex });
        }
    }

    render() {
        const { presentationIndex } = this.state;
        return (
            <>
                <SwipeableViews
                    containerStyle={{ height: '100vh', width: '100vw' }}
                    id="swipeable-container"
                    axis="y"
                    resistance
                    index={presentationIndex}
                    {...WheelReact.events}
                >
                    <Wall />
                    {/* <Wall /> */}
                </SwipeableViews>
            </>
        );
    }
}
export default Home;