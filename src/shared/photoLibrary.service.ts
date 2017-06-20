import { ImagePicker } from '@ionic-native/image-picker';
import {Injectable} from '@angular/core';

@Injectable()
export class GetPhotoLibrary {

constructor(private imagePicker: ImagePicker) { }

pickPhoto() {
    console.log("debug PIckPhoto function");
      let options = {
            maximumImagesCount: 8,
            width: 500,
            height: 500,
            quality: 75
        }

    return this.imagePicker.getPictures(options).then((results) => {
            return results;
        }, (err) => { 
            console.log('Error picking many images');
        });
}


}

