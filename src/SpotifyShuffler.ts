import {
    SpotifyWebApi,
    ICredentials,
} from "../node_modules/spotify-web-api-node";

export class SpotifyShuffler extends SpotifyWebApi {
    constructor(test: ICredentials) {
        super(test);
    }
}
