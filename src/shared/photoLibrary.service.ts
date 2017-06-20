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

    this.imagePicker.getPictures(options).then((results) => {
        for (var i = 0; i < results.length; i++) {
            console.log('Image URI: ' + results[i]);
        }
        }, (err) => { 
            console.log('Error picking many images');
        });
}


}

