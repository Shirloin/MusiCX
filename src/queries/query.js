import { gql } from "@apollo/client"
export const GET_ALL_SONG = gql `
    query getSong {
        a: artist(name: "Ed Sheeran"){
            id
            name
            image
            albums{
                id
                name
                image
                tracks{
                    id
                    name
                    preview_url
                }
            }
        }
        b: artist(name: "Luke Chiang"){
            id
            name
            image
            albums{
                id
                name
                image
                tracks{
                    id
                    name
                    preview_url
                }
            }
        }
        c: artist(name: "Sam Kim"){
            id
            name
            image
            albums{
                id
                name
                image
                tracks{
                    id
                    name
                    preview_url
                }
            }
        }
        d: artist(name: "IU"){
            id
            name
            image
            albums{
                id
                name
                image
                tracks{
                    id
                    name
                    preview_url
                }
            }
        }
        e: artist(name: "LeeHi"){
            id
            name
            image
            albums{
                id
                name
                image
                tracks{
                    id
                    name
                    preview_url
                }
            }
        }
    }`;