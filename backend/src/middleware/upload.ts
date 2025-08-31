import cloudinary from "../lib/cloudinary";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { UploadApiOptions } from "cloudinary";

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req: Express.Request, file: Express.Multer.File): Promise<UploadApiOptions> => {
    const isPdf = file.mimetype === "application/pdf";

    const options: UploadApiOptions = {
      folder: "posts",
      resource_type: isPdf ? "raw" : "auto",
      public_id: `${Date.now()}-${file.originalname.replace(/\.[^/.]+$/, "")}`,
    };

    if (isPdf) {
      options.format = "pdf"; // 👈 only set when PDF
    }

    return options;
  },
});

export const upload = multer({ storage });
