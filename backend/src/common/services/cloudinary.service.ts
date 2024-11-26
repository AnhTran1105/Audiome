import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import * as multer from 'multer';

interface CloudinaryStorageParams {
  folder: string;
  resource_type: string;
  allowedFormats?: string[];
}

@Injectable()
export class CloudinaryService {
  private storage: CloudinaryStorage;

  constructor() {
    this.storage = new CloudinaryStorage({
      cloudinary: cloudinary,
      params: {
        folder: 'songs',
        resource_type: 'auto',
      } as CloudinaryStorageParams,
    });
  }

  public uploadFile() {
    return multer({ storage: this.storage });
  }
}
