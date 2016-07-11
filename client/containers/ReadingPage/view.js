
import React, { Component, PropTypes } from "react";
import CSSModules from "react-css-modules";
import { push } from "react-router-redux";
import debounce from "debounce";

/*
** Constants
*/
const DEBOUNCE_TIME = 1000,
      LEADER_HEADER = 82,
      ZERO          = 0;

/*
** Styles
*/
import styles from "./local.css";

/*
** Actions
*/
import { establishWSConnection, sendScrollEvent } from "actions/sockets";

class ReadingPage extends Component {

    constructor(props) {
        super(props);
        this.debounce = debounce(this.handleScroll, DEBOUNCE_TIME);
    }

    componentDidMount() {
        this.props.dispatch(establishWSConnection(this.props.reader.id));
        document.addEventListener("scroll", e => this.debounce(e));
    }

    componentWillReceiveProps(nextProps) {

        const { scrollPos } = this.props.reader,
              nextScrollPos = nextProps.reader.scrollPos;

        if (scrollPos !== nextScrollPos) {
            window.scrollTo(ZERO, nextScrollPos);
        }

    }

    componentWillUnmount() {
        document.removeEventListener("scroll", e => this.debounce(e));
    }

    handleScroll(e) {

        const { id, leader } = this.props.reader;

        // Dispatch scroll and viewport data (modifying scroll position depending on leader status)
        this.props.dispatch(sendScrollEvent({
            id,
            position: (leader) ? (document.body.scrollTop - LEADER_HEADER) : document.body.scrollTop,
            viewportHeight: window.innerHeight
        }));

    }

    renderLeader() {

        const { leader } = this.props.reader;

        if (!leader) return null;

        return <h1 className="alert alert-info">Leader</h1>;

    }

    render() {

        return (

            <div className="reading">

                { this.renderLeader() }

                <div className="container">

                    <div className="row">

                        <h1>We happy?</h1>
                        <p>Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass. </p>

                        <h1>I'm serious as a heart attack</h1>
                        <p>Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends. </p>

                        <h1>Hold on to your butts</h1>
                        <p>Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing. </p>

                        <h1>Are you ready for the truth?</h1>
                        <p>My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand? </p>

                        <h1>I gotta piss</h1>
                        <p>Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb. </p>

                        <h1>I'm serious as a heart attack</h1>
                        <p>Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit.  </p>

                        <h1>Is she dead, yes or no?</h1>
                        <p>Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends. </p>

                        <h1>We happy?</h1>
                        <p>Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'? </p>

                        <h1>I'm serious as a heart attack</h1>
                        <p>My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand? </p>

                        <h1>Is she dead, yes or no?</h1>
                        <p>The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee. </p>

                    </div>

                </div>

            </div>

        );

    }
}

ReadingPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    reader: PropTypes.object.isRequired
};

export default CSSModules(ReadingPage, styles);
