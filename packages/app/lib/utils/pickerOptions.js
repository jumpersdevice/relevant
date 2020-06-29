'use strict';
var pickerOptions = {
  title: 'Select Profile Picture',
  cancelButtonTitle: 'Cancel',
  takePhotoButtonTitle: 'Take Photo...',
  chooseFromLibraryButtonTitle: 'Choose from Library...',
  cameraType: 'back',
  mediaType: 'photo',
  videoQuality: 'high',
  durationLimit: 10,
  maxWidth: 1200,
  maxHeight: 1200,
  aspectX: 2,
  aspectY: 1,
  quality: 0.6,
  angle: 0,
  allowsEditing: true,
  noData: false,
  storageOptions: { skipBackup: true, path: 'images' }
};
exports.pickerOptions = pickerOptions;
//# sourceMappingURL=pickerOptions.js.map
