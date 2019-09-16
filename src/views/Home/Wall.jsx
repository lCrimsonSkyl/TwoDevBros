import React from 'react';
// import PropTypes from 'prop-types';

import Logo from '../../assets/images/logo';

// const styles = theme => ({
//     section: {
//         height: '100vh',
//     },
//     contenedor: {
//         height: '100%',
//         width: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     wrapper100: {
//         height: '100%',
//         width: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         background: 'linear-gradient(#0D2354, #083699)',
//     },
//     espaciado: {
//         paddingTop: '5em',
//     },
// });

class Wall extends React.Component {
    // static propTypes = {
    //     classes: PropTypes.object,
    // }

    state = {

    }

    render() {
        // const { classes } = this.props;

        return (
            <>
                {/* <div id="inicio" className={classes.section}> */}
                <div>
                    {/* <div className={classes.contenedor}> */}
                    <div>
                        {/* <Logo style={{ height: '150' }} /> */}
                        {/* <Logo /> */}
                        {/* <h1 style={{ textAlign: "center" }}> */}
                        <h1>
                            Freelance Develop & Digital Marketing
                        </h1>
                    </div>
                </div>

                {/* <section className={classes.section} id=""> */}
                <section>
                    {/* <div className={classes.wrapper100}> */}
                    <div>
                        {/* <div className={classes.espaciado} style={{ textAlign: "center" }}> */}
                        <div>
                            <h1>Lorem ipsum dolor sit.</h1>
                            <h2>Lorem ipsum dolor sit.</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ab natus similique, quibusdam
                                veniam facere cupiditate minus. Aperiam, ipsam? Odit vitae est reiciendis vero laborum assumenda libero quaerat, provident culpa repellat.
                                Vero nemo incidunt non animi ullam nisi suscipit! Quod.
                            </p>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
export default Wall;