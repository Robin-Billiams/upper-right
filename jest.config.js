module.exports = {
    verbose: true,
    testPathIgnorePatterns:  [
        "/node_modules/",
        "/mongoDB/",
        "/server/",
        "/test.js/",
        "/dist/"
    ],
    testURL: 'http://localhost:3002',
//     // setupFiles: [
//     //     "./setupTests.js"
//     // ],
}