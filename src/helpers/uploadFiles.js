import { storage } from "../config/fbConfig";

const onFileUpload=(file,folder)=>{
    return storage.ref(`${folder}/${new Date().getTime()+file.name}`).put(file);
};

export const uploadUrls=(files,folder)=>{
    return Promise.all(
                files.map(file=>{
                    return onFileUpload(file,folder);
                })
            )
            .then(files=>{
                return Promise.all(
                    files.map(file=>{
                        return file.ref.getDownloadURL();
                    })
                )
            })
};