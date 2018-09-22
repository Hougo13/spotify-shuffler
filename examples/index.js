const SpotifyWebApi = require("spotify-web-api-node");
const { SpotifyShuffler } = require("../dist");

const config = {
    clientId: "6ad472bb911648ad9e8379dfbb9a2fac",
    clientSecret: "3587ae59ef534d97bda7895b5b25617c",
    redirectUri: "",
    accessToken: "",
};

const refreshToken =
    "AQBhbIZeBNrKPILuNgj2AOF6Bbyu4D2po31H2OrxysGvpfureFpyie1UfHAuPsDPzW9ZA3QWr-rtwpTjJeUn5xQBKfLOuZkq17vx5OO79y9WO8_qjM9fuM2bAeA7AgLMjMg";

const spotifyApi = new SpotifyWebApi(config);

spotifyApi.setRefreshToken(refreshToken);

spotifyApi.refreshAccessToken().then(
    function(data) {
        console.log("The access token has been refreshed!");
        // Save the access token so that it's used in future calls
        config.accessToken = data.body["access_token"];
        spotifyApi.setAccessToken(config.accessToken);

        const spotifyShuffler = new SpotifyShuffler(config);
    },
    function(err) {
        console.log("Could not refresh access token", err);
    }
);
