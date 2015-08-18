
console.log("Running tests on " + process.env.CI_BRANCH);
console.log("Is pull request: " + process.env.CI_PULL_REQUEST);
console.log("Stealing secret " + process.env.SOMETHING_SECRET);
