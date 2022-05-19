module.exports = {
    testEnvironment: "jsdom",
    transformIgnorePatterns: ["node_modules/(?!ol|d3-array)/"],
    transform: {
        "^.+\\.(t|j)sx?$": [
            "@swc/jest",
            {
                sourceMaps: true,

                jsc: {
                    parser: {
                        syntax: "typescript",
                        tsx: true,
                    },

                    transform: {
                        react: {
                            runtime: "automatic",
                        },
                    },
                },
            },
        ],
    },
};
