import multer from 'multer';

export = (multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/upload');
    },
    filename: (req, file, cb) => {
      const imageNewName = `${Date.now().toString()}${file.originalname}`;
      cb(null, imageNewName);
    },
  }),
  fileFilter: (req, file, cb) => {
    const extensaoImage = ['image/png', 'image/jpg', 'image/jpeg'].find((formatoAceito) => formatoAceito === file.mimetype);
    if (extensaoImage) {
      return cb(null, true);
    }
    return cb(null, false);
  },

}));
