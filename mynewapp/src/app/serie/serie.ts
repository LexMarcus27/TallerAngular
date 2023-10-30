export class Serie {
    id: number;
    name: string;
    channel: number;
    seasons: number;

    public constructor(id: number, name: string, channel: number, seasons: number) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
    }
}