import React from 'react';
import { Button } from './Button';
import './header.css';
export var Header = function (_a) {
    var user = _a.user, onLogin = _a.onLogin, onLogout = _a.onLogout, onCreateAccount = _a.onCreateAccount;
    return (React.createElement("header", null,
        React.createElement("div", { className: "storybook-header" },
            React.createElement("div", null,
                React.createElement("svg", { width: "32", height: "32", viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg" },
                    React.createElement("g", { fill: "none", fillRule: "evenodd" },
                        React.createElement("path", { d: "M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z", fill: "#FFF" }),
                        React.createElement("path", { d: "M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z", fill: "#555AB9" }),
                        React.createElement("path", { d: "M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z", fill: "#91BAF8" }))),
                React.createElement("h1", null, "Acme")),
            React.createElement("div", null, user ? (React.createElement(React.Fragment, null,
                React.createElement("span", { className: "welcome" },
                    "Welcome, ",
                    React.createElement("b", null, user.name),
                    "!"),
                React.createElement(Button, { size: "small", onClick: onLogout, label: "Log out" }))) : (React.createElement(React.Fragment, null,
                React.createElement(Button, { size: "small", onClick: onLogin, label: "Log in" }),
                React.createElement(Button, { primary: true, size: "small", onClick: onCreateAccount, label: "Sign up" })))))));
};
//# sourceMappingURL=Header.js.map