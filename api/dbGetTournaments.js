import firebase from "~/plugins/firebase"
export default async () => {
    return await firebase
        .database()
        .ref('tournaments')
        // .orderByKey()
        // .startAt(start.toString())
        // .endAt(end.toString())
        .once('value')
        .then((data) => {
            return data.val()
        })

}