import { gql } from "@apollo/client"

// export const GET_ALL_ANIME = gql `
//     query getAllAnime($page: Int, $perPage: Int){
//         Page(page: $page, perPage: $perPage){
//             media(type: ANIME, sort:POPULARITY_DESC){
//                 id
//                 coverImage{
//                     large
//                 }
//                 title{
//                     english
//                 }
//             }
//         }
//     }`;
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
        b: artist(name: "Zack Tabuldo"){
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