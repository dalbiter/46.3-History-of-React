function justScope() {
    const secret = 42;

    function shareSecret() {
        return secret;
    };

    return shareSecret();
};

// function closureExample() {
//     const secret = 42;

//     function shareSecret() {
//         return secret;
//     };

//     return shareSecret;
// };

function closureExample() {
    let secret = 42;

    function shareSecret() {
        return secret;
    };

    function changeSecret(newSecret) {
        secret = newSecret;
    };

    return {shareSecret, changeSecret};
};

