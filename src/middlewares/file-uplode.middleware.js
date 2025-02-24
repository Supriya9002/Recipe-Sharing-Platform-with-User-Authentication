import multer from "multer"

const storeConfig = multer.diskStorage({  //Returns a StorageEngine implementation configured to store files on the local file system
    destination: function (req, file, cb) {
      cb(null, "public/images/");
    },
    filename: function (req, file, cb) {
      const name = Date.now() + '-' + file.originalname;
      cb(null, name);
    }
  })
  
  const uplodeFile = multer({ storage: storeConfig });
  
  export default uplodeFile;
