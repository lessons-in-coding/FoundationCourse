function relationshipStatus(man, girl) {
    if (man.hasCar && man.hasHouse && man.hasMoney) {
        if (girl.hasEx || girl.hasComplications || girl.hasSeriousIssues) {
            console.log("The girl refuses the engagement due to her circumstances.");
        } else {
            console.log("The girl loves him and accepts the engagement.");
        }
    } else {
        console.log("The girl doesn't love him because he lacks essentials.");
    }
}

// Example usage
let man = { hasCar: true, hasHouse: true, hasMoney: true };
let girl = { hasEx: false, hasComplications: false, hasSeriousIssues: false };

relationshipStatus(man, girl);
// Output: The girl loves him and accepts the engagement.




/*
// for man
function doesGirlLoveMan(man) {
    if (man.hasCar && man.hasHouse && man.hasMoney) {
        console.log("The girl loves him.");
    } else {
        console.log("The girl doesn't love him.");
    }
}

// Example usage
let man1 = { hasCar: true, hasHouse: true, hasMoney: true };
let man2 = { hasCar: false, hasHouse: true, hasMoney: true };

doesGirlLoveMan(man1); // Output: The girl loves him.
doesGirlLoveMan(man2); // Output: The girl doesn't love him.

// for girl
function doesGirlRefuseEngagement(girl) {
    if (girl.hasEx || girl.hasComplications || girl.hasSeriousIssues) {
        console.log("The girl refuses the engagement.");
    } else {
        console.log("The girl accepts the engagement.");
    }
}

// Example usage
let girl1 = { hasEx: true, hasComplications: false, hasSeriousIssues: false };
let girl2 = { hasEx: false, hasComplications: false, hasSeriousIssues: false };

doesGirlRefuseEngagement(girl1); // Output: The girl refuses the engagement.
doesGirlRefuseEngagement(girl2); // Output: The girl accepts the engagement.
*/