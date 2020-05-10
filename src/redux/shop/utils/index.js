import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../../firebase/utils/firebase';

export const fetchCollectionsFromFirebase = () =>
  new Promise((resolve, reject) => {
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async snapshot => {
      try {
        const collectionsMap = await convertCollectionsSnapshotToMap(snapshot);
        resolve(collectionsMap);
      } catch (error) {
        reject(error);
      }
    });
  });
