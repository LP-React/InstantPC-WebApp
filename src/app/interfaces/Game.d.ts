export interface Game {
    slug:               string;
    name:               string;
    required_age:       number;
    about_the_game:     string;
    short_description:  string;
    legal_notice:       string;
    controller_support: boolean;
    release_date:       Date;
    header_path:        string;
    library_path:       string;
    logo_path:          string;
    publishers:         string[];
    categories:         string[];
    genres:             string[];
    movies:             string[];
    screenshots:        string[];
}
