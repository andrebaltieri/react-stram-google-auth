import React, { Component } from 'react';

class GoogleAuth extends Component {
    state = { isSignedIn: null };

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '21593431685-lic7r7e75d6du2ore52udm9v2ab7o7up.apps.googleusercontent.com',
                scope: 'profile'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });

                this.auth.isSignedIn.listen(this.onAuthChange);

                var profile = this.auth.currentUser.get().getBasicProfile();
                console.log('ID: ' + profile.getId());
                console.log('Full Name: ' + profile.getName());
                console.log('Given Name: ' + profile.getGivenName());
                console.log('Family Name: ' + profile.getFamilyName());
                console.log('Image URL: ' + profile.getImageUrl());
                console.log('Email: ' + profile.getEmail());
            });
        });
    }

    onUserSet = (data) => {
        console.log(data);
        console.log(this.auth.currentUser);
    }

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    };

    onSignIn = () => {
        this.auth.signIn();
    };

    onSignOut = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return (
                <div>Authenticating...</div>
            );
        } else if (this.state.isSignedIn) {
            return (
                <button className="ui red google button" onClick={this.onSignOut}>
                    <i className="google icon"></i>
                    Sign Out
                </button>
            );
        } else {
            return (
                <button className="ui blue google button" onClick={this.onSignIn}>
                    <i className="google icon"></i>
                    Sign In With Google
                </button>
            );
        }
    }

    render() {

        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    };
}

export default GoogleAuth;