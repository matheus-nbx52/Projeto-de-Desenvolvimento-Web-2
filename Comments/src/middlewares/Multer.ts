import multer from 'multer';

export = (multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/upload');
    },
    filename: (req, file, cb) => {
      const videoNewName = `${Date.now().toString()}${file.originalname}`;
      cb(null, videoNewName);
    },
  }),
  fileFilter: (req, file, cb) => {
    const extensaoVideo = ['video/mp4', 'video/mkv',].find((formatoAceito) => formatoAceito === file.mimetype);
    if (extensaoVideo) {
      return cb(null, true);
    }
    return cb(null, false);
  },

}));
