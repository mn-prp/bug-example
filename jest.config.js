module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    transformIgnorePatterns: ["node_modules/(?!ol|d3-array)/"],
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    // transform: {
    //   "^.+\\.(t|j)sx?$": [
    //     "@swc/jest",
    //     {
    //       sourceMaps: true,

    //       jsc: {
    //         parser: {
    //           syntax: "typescript",
    //           tsx: true,
    //         },

    //         transform: {
    //           react: {
    //             runtime: "automatic",
    //           },
    //         },
    //       },
    //     },
    //   ],
    // },
};
