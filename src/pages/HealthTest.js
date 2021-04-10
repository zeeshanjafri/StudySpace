import axios from "axios";
import React, { Component } from "react";

const api = axios.create({
    // baseURL: `http://127.0.0.1:8000/`,
    baseURL: `http://studyspace-backend.herokuapp.com/`,
});

// This line makes sure that the response is in JSON format
api.defaults.headers.common["Content-Type"] = "application/json";

// The conditional icon
function Icon(props) {
    const isHealthy = props.healthy;
    if (isHealthy) {
        return (
            <svg
                className="w-6 h-6"
                fill="#34D399"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
    return (
        <svg
            className="w-6 h-6"
            fill="#DC2626"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z"
                clipRule="evenodd"
            />
        </svg>
    );
}

// The main component
class HealthTest extends Component {
    constructor(props) {
        super(props);
        this.state = { healthy: false }; // initial state
    }

    componentDidMount() {
        // The API Call
        api.get("ht/").then((res) => {
            console.log(res.data.DatabaseBackend);

            if (res.data && res.data.DatabaseBackend === "working") {
                this.setState({
                    healthy: true,
                });
            }
        });
    }

    render() {
        return (
            <div className="flex flex-col w-full p-10 border">
                <h1 className="text-2xl font-bold">Backend Status:</h1>
                <span className="flex flex-row mt-2 space-x-3">
                    <h2 className="text-xl font-bold">The Database is</h2>
                    <Icon healthy={this.state.healthy} />
                </span>
            </div>
        );
    }
}

export default HealthTest;
