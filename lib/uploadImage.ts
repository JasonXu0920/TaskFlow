import {ID, storage} from '@/appwrite';

const  uploadImage = async (file: File) => {
    if (!file) return;

    const fileUploaded = await storage.createFile(
        "654ecfa8229c6a066ec9",
        ID.unique(),
        file
    );

    return fileUploaded;
}

export default uploadImage