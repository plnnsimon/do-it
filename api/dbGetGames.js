// import firebase from "~/plugins/firebase"
// export default async (gamesArr) => {
//     return await firebase
//         .database()
//         .ref('games')
//         .once('value')
//         .then((data) => {
//             data.val().forEach(async (el) => {
//                 return await firebase
//                     .storage()
//                     .refFromURL(el.img)
//                     .getDownloadURL()
//                     .then((url) => {
//                         gamesArr.push({
//                             title: el.title,
//                             img: url,
//                             id: el.id,
//                         })
//                     })

//             })


//         })
//         .catch(e => console.error(e.message))

// }
import firebase from "~/plugins/firebase"
export default (gamesArr, start, end) => {
    if (!start && !end) {
        return firebase
        .database()
        .ref('games')
        .once('value')
        .then((data) => {
            data.val().forEach(async (el) => {
                return await firebase
                    .storage()
                    .refFromURL(el.img)
                    .getDownloadURL()
                    .then((url) => {
                        gamesArr.push({
                            title: el.title,
                            img: url,
                            id: el.id,
                        })
                    })

            })
        })
        .catch(e => console.error(e.message))
    }
    return firebase
        .database()
        .ref('gamesTest')
        .orderByKey()
        .startAt(start.toString())
        .endAt(end.toString())
        .on('child_added', async (data) => {
            console.log(data.val());
            if (data.val() === undefined || data.val() === null) return;
            await firebase
                    .storage()
                    .refFromURL(data.val().img)
                    .getDownloadURL()
                    .then((url) => {
                        gamesArr.push({
                            title: data.val().title,
                            img: url,
                            id: data.val().id,
                        })
                    })
        })

}

