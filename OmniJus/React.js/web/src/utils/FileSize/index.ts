
export function fileSize(size: number): string {
  var units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  var i = 0;
  while(size >= 1024) {
      size /= 1024;
      ++i;
  }
  return size.toFixed(1) + ' ' + units[i];
}
