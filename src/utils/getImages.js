import { getStorage, ref, getDownloadURL } from "firebase/storage";

export const getImages = async (numberOfImages) => {
  const imagesPool = [];
  try {
    for (let i = 1; i <= numberOfImages; i++) {
      const storage = getStorage();
      const referance = ref(storage, `/Portfolio/image${i}.png`);
      await getDownloadURL(referance).then((x) => {
        imagesPool.push({ url: x, id: i });
      });
    }
  } catch (err) {
    console.log(err);
  }
  return imagesPool;
};

export const getProfilePic = async () => {
  try {
    const storage = getStorage();
    const referance = ref(storage, "/ProfilePic.jpg");
    const profilePic = await getDownloadURL(referance);

    return profilePic;
  } catch (err) {
    console.log(err);
  }
};
